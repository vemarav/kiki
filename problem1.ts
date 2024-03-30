#!/usr/bin/env node
import { main } from "./lib/presentation/problem1";

const results = main();

for (const result of results) {
  console.log(result);
}
