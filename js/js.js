
const ANCHO = document.getElementById("ancho");
const ALTO = document.getElementById("alto");
const MANOS = document.getElementById("manos");
console.log(ANCHO.value); 


function calculos() {

let ancho = Number(ANCHO.value);
let alto = Number(ALTO.value);
let manos = Number(MANOS.value);

let total = ((ancho*alto)*manos)/12;
document.getElementById("calculos").innerHTML="El resultado de la suma es:" + total;

} 