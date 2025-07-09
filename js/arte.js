
class Cuadro {
  constructor(nombre, precio) {
    this.precio = precio;
    this.activo = true;
  }

}

//_____________________________________________________
const cuadroCaro = new Cuadro("cuadroCaro", 10000);
console.log(cuadroCaro.precio);//objeto

const arrayCuadroCaro = Object.values(cuadroCaro);
console.log(arrayCuadroCaro);//array

localStorage.setItem("cuadroCaro", JSON.stringify("cuadroCaro"));
let objetoCaro = JSON.parse(localStorage.getItem("cuadroCaro"));
console.log(objetoCaro);//guarde 
//===================================
//hice una constante para el boton  y el espacio vacio de precio caro
//le declar una variable valor y extraigo el valor del boton que esta en el html
const myButnCaroto = document.getElementById("myButtonCaro");
 const precioCaro = document.getElementById("precioCaro");
 myButnCaroto.addEventListener("click", function() {
  if (valorMinCaro < valorMaxCaro ) {
    valorMinCaro += btn;}
    else {valorMinCaro = 10000}
    precioCaro.textContent = "Valor: $ " + valorMinCaro;
 })
const btn = 15000;
let valorMinCaro = 10000;
const valorMaxCaro = 70000;
console.log("valor");
console.log("precioCaro");
alert("myButtonCaro");












//_______________________________________________________
const cuadroAuto = new Cuadro("cuadroAuto", 50000);
console.log(cuadroAuto);
const arrayCuadroAuto = Object.values(cuadroAuto);
console.log(arrayCuadroAuto);
//El metodo json convierte auna cadena de caracteres
//El metodo jsonparse le digo al objeto que lo parse
localStorage.setItem("cuadroAuto", JSON.stringify("cuadroAuto"));
let objetoAuto = JSON.parse(localStorage.getItem("cuadroAuto"));
console.log(objetoAuto);

const myButtonAuto = document.getElementById("myButtonAuto");
console.log(myButtonAuto);
myButtonAuto.addEventListener("click", () => {
  alert("click auto")
})







//__________________________________________________________
const cuadroVenecia = new Cuadro("cuadroVenecia", 150000);
console.log(cuadroVenecia);
const arrayCuadroVenecia = Object.values(cuadroVenecia);
console.log(arrayCuadroVenecia);
const seisCuotas = x => x * 0.10
const seisCuotas2 = x => x / 6
const doceCuotas = x => x * 0.15
const doceCuotas2 = x => x / 12
const suma = (a, b) => a + b
let precioVenecia = 150000
let precioSeis = (suma(precioVenecia, seisCuotas(precioVenecia))) / 6;
document.getElementById("seisCuotas").textContent = `En 6 cuotas de $ ${precioSeis.toLocaleString()}`;
console.log(precioSeis);
let precioDoce = (suma(precioVenecia, doceCuotas(precioVenecia))) / 12;
console.log(precioDoce);
document.getElementById("doceCuotas").textContent = `En 12 cuotas de $ ${precioDoce.toLocaleString()}`;
let listGroupItemVenecia = document.getElementsByClassName("listGroupItemVenecia");
console.log(listGroupItemVenecia);


//_____________________________________________________________________________________________________




localStorage.setItem("cuadroVenecia", JSON.stringify("cuadroVenecia"));
let objetoVenecia = JSON.parse(localStorage.getItem("cuadroVenecia"));


console.log(objetoVenecia);


