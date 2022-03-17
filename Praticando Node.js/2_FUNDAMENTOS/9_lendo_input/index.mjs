import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual a sua linguagem preferida? \n", (lang) => {
  if (lang === "HTML" || lang === "html") {
    console.log("\nIsso não é uma linguagem de programação!");
  } else {
    console.log(`\nA minha linguagem preferida é: ${lang}`);
  }
  rl.close();
});
