import assert from "node:assert/strict";
import { existsSync } from "node:fs";

assert.ok(existsSync("src/scripts/activityTimer.js"), "activity timer module must exist");
await import("../src/scripts/activityTimer.js");

const { formatTime, reduceTimer } = globalThis.ActivityTimerTestApi ?? {};
assert.equal(typeof formatTime, "function", "timer must expose formatTime for verification");
assert.equal(typeof reduceTimer, "function", "timer must expose reduceTimer for verification");

assert.equal(formatTime(600), "10:00");
assert.equal(formatTime(360), "6:00");
assert.equal(formatTime(0), "0:00");
assert.equal(formatTime(-1), "0:00");

const initial = { duration: 3, remaining: 3, running: false, finished: false };
const started = reduceTimer(initial, "start");
assert.deepEqual(started, { duration: 3, remaining: 3, running: true, finished: false });
const ticked = reduceTimer(started, "tick");
assert.deepEqual(ticked, { duration: 3, remaining: 2, running: true, finished: false });
const paused = reduceTimer(ticked, "pause");
assert.deepEqual(paused, { duration: 3, remaining: 2, running: false, finished: false });
assert.deepEqual(reduceTimer(paused, "tick"), paused, "paused timers must ignore ticks");
const finished = reduceTimer({ ...started, remaining: 1 }, "tick");
assert.deepEqual(finished, { duration: 3, remaining: 0, running: false, finished: true });
assert.deepEqual(reduceTimer(finished, "start"), finished, "finished timers must not restart without reset");
assert.deepEqual(reduceTimer(finished, "reset"), initial, "reset restores the configured duration");

console.log("Activity timer contract passed: formatting, start, pause, tick, zero, and reset states are correct.");
