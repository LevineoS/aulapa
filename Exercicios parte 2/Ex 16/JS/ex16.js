var area = parseFloat(prompt("Insira o tamanho da área em metros quadrados: "));

var cobertura = 3;
var capacidade = 18; 
var preço = 80.00;

var litrosN = (area/cobertura);
var latasN = (litrosN/capacidade);
var total = latasN * preço;

console.log("A quantidade de latas que você precisa é: ", latasN);
console.log("O total da compra é de: R$ ", total);