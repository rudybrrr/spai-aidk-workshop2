const dots = document.getElementById("dots");
const footerLabel = document.getElementById("footerLabel");
const slideNo = document.getElementById("slideNo");
const topProgress = document.getElementById("topProgress");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const deckNavigation = { current: 0 };

window.deckNavigation = deckNavigation;

window.deckSlides.forEach((slide, index) => {
  const dot = document.createElement("button");
  dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
  dot.addEventListener("click", () => goTo(index));
  dots.appendChild(dot);
});

const dotButtons = Array.from(dots.querySelectorAll("button"));

function goTo(index) {
  const nextIndex = Math.max(0, Math.min(index, window.deckSlides.length - 1));
  if (
    nextIndex === deckNavigation.current &&
    window.deckSlides[deckNavigation.current].classList.contains("active")
  ) {
    window.fitSlide(deckNavigation.current);
    return;
  }

  const previous = window.deckSlides[deckNavigation.current];
  if (previous) {
    previous.classList.add("is-leaving");
    setTimeout(() => previous.classList.remove("is-leaving"), 190);
  }

  deckNavigation.current = nextIndex;
  window.deckSlides.forEach((slide, i) =>
    slide.classList.toggle("active", i === deckNavigation.current),
  );
  dotButtons.forEach((dot, i) => dot.classList.toggle("active", i === deckNavigation.current));

  const slide = window.deckSlides[deckNavigation.current];
  footerLabel.textContent = slide.dataset.footer || "AI Don’t Know · SPAI";
  slideNo.innerHTML = `${deckNavigation.current + 1} <span>/ ${window.deckSlides.length}</span>`;
  topProgress.style.width = `${((deckNavigation.current + 1) / window.deckSlides.length) * 100}%`;
  prevBtn.disabled = deckNavigation.current === 0;
  nextBtn.disabled = deckNavigation.current === window.deckSlides.length - 1;
  history.replaceState(null, "", `#${deckNavigation.current + 1}`);

  window.fitSlide(deckNavigation.current);
}

window.addEventListener("resize", () => window.fitSlide(deckNavigation.current));

prevBtn.addEventListener("click", () => goTo(deckNavigation.current - 1));
nextBtn.addEventListener("click", () => goTo(deckNavigation.current + 1));

document.addEventListener("keydown", (event) => {
  const tag = document.activeElement.tagName.toLowerCase();
  if (tag === "input" || tag === "textarea") return;

  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    goTo(deckNavigation.current + 1);
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    goTo(deckNavigation.current - 1);
  }

  if (event.key === "Home") goTo(0);
  if (event.key === "End") goTo(window.deckSlides.length - 1);
});

const initial = Number(location.hash.replace("#", "")) - 1;
goTo(Number.isFinite(initial) && initial >= 0 ? initial : 0);
