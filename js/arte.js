
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
//_______________________________________________________
const cuadroAuto = new Cuadro("cuadroAuto", 50000);
console.log(cuadroAuto);
const arrayCuadroAuto = Object.values(cuadroAuto);
console.log(arrayCuadroAuto);
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

    



//El metodo json convierte auna cadena de caracteres
//El metodo jsonparse le digo al objeto que lo parse
localStorage.setItem("cuadroCaro", JSON.stringify("cuadroCaro"));
let objetoCaro = JSON.parse(localStorage.getItem("cuadroCaro"));

localStorage.setItem("cuadroAuto", JSON.stringify("cuadroAuto"));
let objetoAuto = JSON.parse(localStorage.getItem("cuadroAuto"));

localStorage.setItem("cuadroVenecia", JSON.stringify("cuadroVenecia"));
let objetoVenecia = JSON.parse(localStorage.getItem("cuadroVenecia"));
console.log(objetoVenecia);
console.log(objetoAuto);
console.log(objetoVenecia);

const myButtonCaro = document.getElementById("myButtonCaro");
myButtonCaro.addEventListener("click", () => {
   /*  console.log("click en el boton"); */
     alert("click en el boton") 
})


const myButtonAuto = document.getElementById("myButtonAuto");
console.log(myButtonAuto);
myButtonAuto.addEventListener("click",() =>{
    alert("click auto")
})
