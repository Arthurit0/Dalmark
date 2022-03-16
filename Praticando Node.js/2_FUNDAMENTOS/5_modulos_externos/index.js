const minimist = require("minimist");
// igual a: import minimist from "minimist" mas precisaria mudar para .mjs

// Input: node index.js --nome=Arthur --profissao=Webdev

const args = minimist(process.argv.slice(2));

const nome = args["nome"]; // Agora não precisamos dar splice com o minimist, apenas passar como parâmetro a chave do objeto
const prof = args["profissao"];

console.log(args);
console.log(`Meu nome é ${nome} e eu sou ${prof}`);

/* Output

{ _: [], nome: 'Arthur', profissao: 'WebDev' }
Meu nome é Arthur e eu sou WebDev

*/
