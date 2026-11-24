import { mkdirSync, writeFileSync } from "node:fs";

const entry = "gaslighting";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
