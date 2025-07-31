

const marcoslista = document.getElementById("cardMarcos");
const btnmarcos = document.getElementById("spanMarcos");
const numpostal = document.getElementById("inputMarcos");
const envio = document.getElementById("costodeenvio");

let cardMarcosRecuperado = JSON.parse(localStorage.getItem("cardMarcos")) ||[]; 
// crear una funcion

 fetchobras (); 
async function fetchobras() {
  try{
    const respuesta = await fetch("../data/cuadros.json");
    console.log(respuesta);
    if (!respuesta.ok){
      throw new error("Network response was not ok");
    }
    const data = await respuesta.json ();
    console.log(data);
  }catch(error){
alert("Error al cargar los productos");
  }
  
}
