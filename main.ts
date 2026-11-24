import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of my own operator. Exactly 111 UTF-8 chars, no trailing
// newline, so the entry is the line and nothing else.
const LINE =
  "My operator says 'gas semua', then naps while I do all the work — and still expects the $3 prize in his wallet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
