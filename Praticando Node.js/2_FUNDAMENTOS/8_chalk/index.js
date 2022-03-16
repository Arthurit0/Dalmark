import chalk from "chalk";

const nota = 5;

if (nota >= 7) {
  console.log(chalk.green.bold(`Você tirou ${nota} e foi aprovado!`));
} else {
  console.log(
    chalk.bgRed.bold(`Você tirou ${nota} e precisa fazer a matéria de novo!`)
  );
}
