import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const deck = readFileSync("index.html", "utf8");
const sections = deck.match(/<section\b[\s\S]*?<\/section>/g) ?? [];
const titles = sections.map((section) => section.match(/data-title="([^"]+)"/)?.[1]);

assert.equal(sections.length, 45, "opening sequence requires 45 slides");
assert.deepEqual(titles.slice(0, 9), [
  "AI Don't Know: Workshop 2",
  "About SPAI",
  "Who We Are",
  "Previous Events",
  "The full path in one view",
  "What you should leave with",
  "Make sure your notebook can run",
  "Install the notebook tools once",
  "Download the Workshop 2 notebook",
], "the approved title, SPAI, series, and setup sequence must occupy slides 1–9");

const followAlongUrl = "https://spai-aidk-workshop2.vercel.app/";
assert.match(sections[0], new RegExp(`<a[^>]+href="${followAlongUrl.replaceAll(".", "\\.")}"`), "title slide must link the follow-along URL");
assert.ok(sections[0].includes(`Follow along on your own screen:`), "title slide must label the follow-along URL");

for (const schedule of ["15 JUL<br />3–5 PM", "22 JUL<br />7–9 PM", "29 JUL<br />3–5 PM"]) {
  assert.ok(sections[4].includes(schedule), `series outline is missing ${schedule}`);
}

assert.ok(sections[6].includes("AIDK_W2_Workshop.ipynb"), "setup checklist must name the Workshop 2 notebook");
assert.ok(sections[7].includes("python -m pip install pandas numpy matplotlib seaborn"), "notebook tools slide must use the Workshop 2 install command");
assert.ok(sections[8].includes("Download link coming soon"), "download slide must show the approved placeholder");
assert.ok(!sections[8].includes("<a "), "download placeholder must not be a nonfunctional link");
assert.ok(!sections[8].includes("qr-code"), "download placeholder must not include a QR code");

for (const asset of [
  "public/assets/images/events/pixels_to_perception.png",
  "public/assets/images/events/graphing_impact.png",
  "public/assets/images/events/n8n.png",
  "public/assets/logos/spai-logo.png",
]) {
  assert.ok(existsSync(asset), `opening asset is missing: ${asset}`);
  assert.ok(deck.includes(asset), `canonical deck does not reference opening asset: ${asset}`);
}

console.log("Workshop 2 opening sequence passed: 45 slides, SPAI context, mixed schedule, setup, assets, and placeholder are present.");
