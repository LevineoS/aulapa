var peso = parseFloat(prompt("Quantos Quilos trouxe?: "));
var excesso = parseFloat

excesso = peso - 50
var multa = excesso * 4
if (peso > 50) {
    console.log("Há um excesso de: ", excesso, "KG");
    console.log("Sua multa é de: R$ ", multa);

}else{
    console.log("Não há excesso, logo não precisa pagar multa!");   
}