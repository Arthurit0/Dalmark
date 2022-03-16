// Modulo Externo

const minimist = require("minimist");
// igual a: import minimist from "minimist" mas precisaria mudar para .mjs

// Input: node index.js --a=6 --b=7

// Modulo Interno

const soma = require("./soma").soma;

const args = minimist(process.argv.slice(2));

const a = parseInt(args["a"]);
const b = parseInt(args["b"]);

soma(a, b);

// Output
// 13
