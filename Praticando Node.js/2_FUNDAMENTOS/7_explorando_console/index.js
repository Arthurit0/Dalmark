// Mais de um valor
const x = 10;
const y = "Algum Texto";
const z = [1, 2];

console.log(x, y, z);

// contagem de impressões
for (var i = 0; i < 5; i++) {
  // Abaixo utilizamos template string
  console.count(`O valor de x é ${x}, esta é a impressão Nº`);
}

// Variável entre string
console.log('A string em y é "%s"', y);

// Limpar console em 5 segundos
setTimeout(() => {
  console.clear();
}, 5000);
