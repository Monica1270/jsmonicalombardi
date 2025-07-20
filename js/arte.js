
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
const myButnCaroto = document.getElementById("myButnCaroto");
const precioCaro = document.getElementById("precioCaro");
const mje = document.getElementById("mensajeCaro");
myButnCaroto.addEventListener("click", function() {
  if (valorMinCaro < valorMaxCaro) {
    valorMinCaro += btn;
  }
  else { valorMinCaro = 10000 }
  precioCaro.textContent = "Valor: $ " + valorMinCaro;

  if (valorMinCaro >= valorMaxCaro) {
    mje.textContent = "Excelente!! Dejame un telèfono y tu nombre";
  }
  else {
    mje.textContent = "Sigue participando ";
  }

})

const btn = 15000;
let valorMinCaro = 10000;
const valorMaxCaro = 70000;
console.log("valor");
console.log("precioCaro");

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
let valorMinAuto = 50000;
const valorMaximo = 120000;
const btn1 = 15000;
const myButtonAuto = document.getElementById("myButtonAuto");
myButtonAuto.addEventListener("click", function() {
  if (valorMinAuto < valorMaximo) {
    valorMinAuto += btn1; }
  
  else { valorMinAuto = 50000; }
  precioAuto.textContent = "valor: $ "+ valorMinAuto;
   
  if ( valorMinAuto >= valorMaximo) {
    mensajeAuto.textContent = "Excelente!! Dejame un telèfono y tu nombre";
  }
  else {
    mensajeAuto.textContent = "Sigue participando ";
  }
})
const precioAuto = document.getElementById("precioAuto");
const mensajeAuto  = document.getElementById("mensajeAuto");

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
 let botonVoz = document.getElementById("descripciónV");
let speech = new SpeechSynthesisUtterance();
speech.lang ="es-Es" 
speech.text = `Descripción de la obra.
Obra originaria de Mónaco, con unas dimensiones de 40,5 cm x 51,5 cm. Fue trabajada sobre papel ilustración de 120 gramos, destacándose el manejo de luces y sombras que aportan profundidad y realismo a la composición. El marco fue seleccionado cuidadosamente, siendo acorde a los colores predominantes de la imagen, para realzar su belleza y armonizar con la obra en su totalidad.`;

botonVoz.addEventListener("click", function() {
  window.speechSynthesis.speak(speech);
  utterThis.pitch = 10; // Tono (por defecto es 1)
 utterThis.rate = 1;
});

/* // addEventListene se usa🔷 Cuándo se usa */
//Cuando querés que algo pase al hacer clic en un botón, enlace, imagen, etc.
//Cuando querés que reaccione a un evento de teclado (presionar una tecla).
//Cuando querés detectar el cambio de un input o select.
//Cuando querés realizar acciones en eventos como mouseover, mouseout, scroll, load, etc.
// _____________________________________________________________________________________________

/* localStorage.setItem("cuadroVenecia", JSON.stringify("cuadroVenecia"));
let objetoVenecia = JSON.parse(localStorage.getItem("cuadroVenecia"));

console.log(objetoVenecia);
//hoja de conctacto boton y opciones
let boton2 = document.getElementById("boton2");
boton2.addEventListener("click", function() {
  alert("El botón ha sido presionado");
})


 */