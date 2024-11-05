var megab = parseFloat(prompt("Informe o tamanho do arquivo em MegaBytes: "));
var link = parseFloat(prompt("Informe a velocidade do link da internet em Megabites: "));
var res = megab /(link/8);

var minutos = res / 60


console.log("O tempo do download em minutos é: ", minutos);