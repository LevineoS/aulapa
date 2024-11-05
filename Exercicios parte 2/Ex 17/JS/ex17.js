var area = parseFloat(prompt("Informe a área em metros quadrados: "));

var cobertura = 6;
var lata = 18;
var Galao = 3.6;
var preçolata = 80.00;
var precogalao = 25.00;
var folga = 1.10;

var tintaN = area / cobertura;
var tintaComFolga = tintaN * folga;

var latasN = (tintaComFolga / lata);
var precolatas = latasN * preçolata;

var galoesN = (tintaComFolga/Galao);
var precoGaloes = galoesN * precogalao;

var Mistura = (tintaComFolga / lata);
var restante = tintaComFolga - (Mistura * lata);
var galoesMistura = (restante / Galao);
var precoMistura = (Mistura * preçolata) + (galoesMistura * precogalao);



console.log("Somente com latas: ", latasN);
console.log("Preço das latas: R$ ", precolatas);

console.log("Somente em galão: ", galoesN);
console.log("Preço em galão: R$ ", precoGaloes);

console.log("Latas e Galões: ", Mistura, galoesMistura);
console.log("Total ambos: R$ ", precoMistura);