// Terminal: node index.js nome=Arthur idade=21

console.log(process.argv);

const args = process.argv.slice(2); // "Corta" e seleciona a partir esta posição

console.log(args); // Array dos valores passados como parâmetro

const nome = args[0].split("=")[1]; // Divide a string em duas partes: [0] é a parte esquerda e [1] a direita

console.log(nome); //Retorna o nome

const idade = args[1].split("=")[1];

console.log(idade); //Retorna a idade

console.log(`O nome dele é ${nome} e ele tem ${idade} anos`); // String com os valores de variável
