
class Cuadro {
    constructor(nombre, precio) {
        this.precio = precio;
        this.activo = true;
    }

} 

//_____________________________________________________
const cuadroCaro = new Cuadro("cuadroCaro", 10000);
console.log(cuadroCaro.precio);

const arrayCuadroCaro = Object.values(cuadroCaro);
console.log(arrayCuadroCaro);

localStorage.setItem("cuadroCaro", JSON.stringify("cuadroCaro"));
let objetoCaro = JSON.parse(localStorage.getItem("cuadroCaro"));
console.log(objetoCaro);
//le declaro con cuanto debe sumarle cada vez que presiona el boton
/* const MIN_POWER = 10000;
const MAX_PAWER = 80000;
if(minCaro === 10000) {
    console.log("El valor ofrecido es muy bajo, siga participando");
}
if(maxCaro === 80000) {
    console.log("¡Excelente! Decime tu nombre y tu teléfono, y en breve me estaré comunicando con vos.");
}  */
let valorCaro = 0; // empieza en 0

const myButtonCaro = document.getElementById("myButtonCaro");
const precioCaro = document.getElementById("precioCaro");

myButtonCaro.addEventListener("click", () => {
  if (valorCaro < 70000) {
    valorCaro += 10000;
    precioCaro.textContent = `$${valorCaro}`;
  } else {
    alert("Llegaste al máximo de $70.000");
  }
});








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
myButtonAuto.addEventListener("click",() =>{
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
const doceCuotas2 = x => x /12
const suma = (a, b) => a + b
let precioVenecia= 150000
let precioSeis = (suma(precioVenecia, seisCuotas(precioVenecia)))/6;
document.getElementById("seisCuotas").textContent = `En 6 cuotas de $ ${precioSeis.toLocaleString()}`;
console.log(precioSeis);
let precioDoce = (suma(precioVenecia, doceCuotas(precioVenecia)))/12;
console.log(precioDoce);
document.getElementById("doceCuotas").textContent = `En 12 cuotas de $ ${precioDoce.toLocaleString()}`;
let listGroupItemVenecia = document.getElementsByClassName("listGroupItemVenecia");
console.log(listGroupItemVenecia);

    
//_____________________________________________________________________________________________________




localStorage.setItem("cuadroVenecia", JSON.stringify("cuadroVenecia"));
let objetoVenecia = JSON.parse(localStorage.getItem("cuadroVenecia"));


console.log(objetoVenecia);


