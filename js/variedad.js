

const marcoslista = document.getElementById("cardMarcos");
const btnmarcos = document.getElementById("spanMarcos");
const numpostal = document.getElementById("inputMarcos");
const envio = document.getElementById("costodeenvio");
/* localStorage.setItem = ("cardMarcos",JSON.stringify("cardMarcos")); */
let cardMarcosRecuperado = JSON.parse(localStorage.getItem("cardMarcos")) ||[];
// crear una funcion
fetchobras ();
async function fetchobras() {
  try{
    const respuesta = await fetch("cuadros.json");
    console.log(respuesta);
    const filarray = await respuesta.json ();
    console.log(filarray);
  }catch(error){

  }
  
}
