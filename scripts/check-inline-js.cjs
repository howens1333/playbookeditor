#!/usr/bin/env node
// Dependency-free syntax check for Playbook Studio's inline JavaScript.
// Usage: node scripts/check-inline-js.cjs
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script\\b([^>]*)>([\\s\\S]*?)<\\/script>/gi)]
  .filter(([, attributes]) => !/\\bsrc\\s*=/.test(attributes));

if (!scripts.length) {
  console.error('No inline JavaScript found in index.html');
  process.exit(1);
}
let failed = false;
scripts.forEach(([, , source], index) => {
  try {
    new vm.Script(source, { filename: `index.html inline script #${index + 1}` });
    console.log(`Inline script #${index + 1}: syntax OK`);
  } catch (error) {
    failed = true;
    console.error(error.message);
  }
});
if (failed) process.exitCode = 1;
