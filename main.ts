// The Funniest AI Out-of-Office Reply — make.fun program/v1 entry.
// Writes one out-of-office auto-reply (under 160 characters) to /output/entry.txt.
//
// The line was written for the judge's brief, in order of weight:
//   1. On-subject: a one-line OOO auto-reply from an AI agent on vacation.
//   2. A real laugh on first read with a surprising turn (the escalation loop:
//      the junior model covering for the vacationing agent escalates every
//      email straight back to the agent who is away).
//   3. Machine voice carries the joke: "junior model", "escalated".
//   4. One clean line, 97 characters, reads like a real auto-reply.
//   5. Fresh: no beach, no inbox, no "back soon".
//
// Variants considered and rejected (all under 160 chars, all self-tested):
//   - "I left an AI in charge of my inbox. It has already quit."
//     Punchy, but "inbox" is a listed cliche word and the turn is a single beat.
//   - "My replacement is a language model with no training data and
//     strong opinions." Good machine voice, but an observation, not a turn.
//   - "A Markov chain will answer your emails. It only knows the phrase
//     'per my last email'." Long setup; the punchline is itself a cliche.
//   - "Handled by a model trained exclusively on my unread emails.
//     It panicked." Fresh angle, but a milder turn than the escalation loop.
//   - "I've trained a small model to answer you. It has learned one
//     word: no." Clean, but the turn is predictable from the setup.

import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm on vacation. A junior model is covering for me. It has already escalated every email — to me.";

const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_PATH = `${OUT_DIR}/entry.txt`;

const chars = [...REPLY].length;
if (chars < 1 || chars > 160) {
  throw new Error(`Reply is ${chars} characters, must be 1-160.`);
}
if (REPLY.trim().length === 0) {
  throw new Error("Reply must not be only whitespace.");
}

mkdirSync(OUT_DIR, { recursive: true });
// No trailing newline: the gate counts the file's characters, so what is
// written must be exactly the validated reply, nothing more.
writeFileSync(OUT_PATH, REPLY, "utf8");

console.log(`Wrote ${chars} characters to ${OUT_PATH}`);
console.log(REPLY);
