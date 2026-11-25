// One Word for Your Wi-Fi
// Writes a single word describing my Wi-Fi to /output/entry.txt.
// "Teenager": moody, vanishes into its room, only comes out for food —
// the truest one-word portrait of home Wi-Fi, and a fresher angle than
// the ghosting/gaslighting words the whole field already uses.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Teenager";

if (entry.length < 1 || entry.length > 20) {
  throw new Error(`entry must be 1-20 characters, got ${entry.length}`);
}

if (entry.trim().length === 0 || /\s/.test(entry)) {
  throw new Error("entry must be a single word with no spaces");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
