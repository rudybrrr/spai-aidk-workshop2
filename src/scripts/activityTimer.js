(function initialiseActivityTimers(global) {
  const clampSeconds = (seconds) => Math.max(0, Math.floor(Number(seconds) || 0));

  function formatTime(seconds) {
    const safeSeconds = clampSeconds(seconds);
    const minutes = Math.floor(safeSeconds / 60);
    const remainder = safeSeconds % 60;
    return `${minutes}:${String(remainder).padStart(2, "0")}`;
  }

  function reduceTimer(state, action) {
    if (action === "reset") {
      return { duration: state.duration, remaining: state.duration, running: false, finished: false };
    }
    if (action === "pause") return { ...state, running: false };
    if (action === "start") {
      if (state.finished || state.remaining === 0) return state;
      return { ...state, running: true };
    }
    if (action === "tick") {
      if (!state.running || state.remaining === 0) return state;
      const remaining = state.remaining - 1;
      return { ...state, remaining, running: remaining > 0, finished: remaining === 0 };
    }
    return state;
  }

  global.ActivityTimerTestApi = { formatTime, reduceTimer };

  if (typeof document === "undefined") return;

  const timers = new Map();
  const views = [...document.querySelectorAll("[data-timer-id][data-duration-seconds]")];

  for (const view of views) {
    const timerId = view.dataset.timerId;
    const duration = clampSeconds(view.dataset.durationSeconds);
    if (!timers.has(timerId)) {
      timers.set(timerId, {
        duration,
        remaining: duration,
        running: false,
        finished: false,
        intervalId: null,
      });
    }
  }

  function render(timerId) {
    const state = timers.get(timerId);
    for (const view of views.filter((item) => item.dataset.timerId === timerId)) {
      const display = view.querySelector("[data-timer-display]");
      const status = view.querySelector("[data-timer-status]");
      const start = view.querySelector('[data-timer-action="start"]');
      const pause = view.querySelector('[data-timer-action="pause"]');
      if (display) display.textContent = formatTime(state.remaining);
      if (status) status.textContent = state.finished ? "Time’s up" : state.running ? "Running" : "Ready";
      if (start) start.disabled = state.running || state.finished;
      if (pause) pause.disabled = !state.running;
      view.classList.toggle("is-running", state.running);
      view.classList.toggle("is-finished", state.finished);
    }
  }

  function stopInterval(state) {
    if (state.intervalId !== null) global.clearInterval(state.intervalId);
    state.intervalId = null;
  }

  function dispatch(timerId, action) {
    const current = timers.get(timerId);
    if (!current) return;
    const intervalId = current.intervalId;
    const next = { ...reduceTimer(current, action), intervalId };
    timers.set(timerId, next);

    if (action === "start" && next.running && next.intervalId === null) {
      next.intervalId = global.setInterval(() => dispatch(timerId, "tick"), 1000);
    }
    if (!next.running) stopInterval(next);
    render(timerId);
  }

  for (const view of views) {
    view.addEventListener("click", (event) => {
      const button = event.target.closest("[data-timer-action]");
      if (!button) return;
      event.stopPropagation();
      dispatch(view.dataset.timerId, button.dataset.timerAction);
    });
  }

  for (const timerId of timers.keys()) render(timerId);
})(globalThis);
