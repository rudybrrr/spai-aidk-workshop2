import { readFileSync } from "node:fs";

const standalone = readFileSync("ai_dont_know_workshop_1.html", "utf8");

const requiredRules = [
  ["slide 3 logo sizing", /\.orbit-core img\s*\{[^}]*width:\s*100%;[^}]*height:\s*100%;[^}]*object-fit:\s*contain;/s],
  ["slide 3 scoped layout", /\.slide\.two\[data-title="Who We Are"\] \.stage\s*\{/],
  ["slide 4 three-column layout", /\.event-list\s*\{[^}]*display:\s*grid;[^}]*grid-template-columns:\s*repeat\(3,\s*1fr\);/s],
  ["slide 4 card containment", /\.event-card\s*\{[^}]*overflow:\s*hidden;[^}]*display:\s*flex;[^}]*flex-direction:\s*column;/s],
  ["slide 4 image sizing", /\.event-card \.event-image\s*\{[^}]*width:\s*100%;[^}]*aspect-ratio:\s*5\s*\/\s*3;[^}]*object-fit:\s*cover;/s],
];

const missing = requiredRules
  .filter(([, pattern]) => !pattern.test(standalone))
  .map(([label]) => label);

if (missing.length > 0) {
  console.error(`Standalone visual contract missing: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("Standalone slide 3/4 visual contract is present.");
