#!/usr/bin/env node
import { main } from "./lib/presentation/kiki";

const results = main();

for (const result of results) {
  console.log(result);
}
