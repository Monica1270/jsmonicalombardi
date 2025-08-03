

const marcoslista = document.getElementById("cardMarcos");
const btnmarcos = document.getElementById("spanMarcos");
const numpostal = document.getElementById("inputMarcos");
const envio = document.getElementById("costodeenvio");

let cardMarcosRecuperado = JSON.parse(localStorage.getItem("cardMarcos")) || [];
// crear una funcion

fetchobras();
async function fetchobras() {
  try {
    const respuesta = await fetch("../data/cuadros.json");//aqui si hago un console puedo ver mi array

    if (!respuesta.ok) {//dice si la repuesta no es ok que tire error, me tiraba error 404 porque antiguamente no estaba dentro de la carpeta data. Se va del try y se mete en el catch.
      throw new error("Network response was not ok"); 
      console.log("respuesta");
    }
    const data = await respuesta.json();
    console.log("data");
  displayobras(data);  

  } catch (error) {
   console.error("Error al cargar los productos", error);
  }

}

//le puse cuadros para saber que tengo que sacar la informacion del json cuadros
function displayobras(cuadros) {
  marcoslista.innerHTML = "";//se deja la lista en cero para poder empezar a recorrer los productos
  cuadros.forEach((cuadro) => {
    //para crear la tarjeta realizo una constante cardContairner que salio del Css
    const tarjeta  = document.createElement("div");
    tarjeta .classList.add("card-container");
    tarjeta .innerHTML = `
    <img src="${cuadro.imagen}" alt="${cuadro.nombre}" />
      <h3>${cuadro.nombre}</h3>
      <h4>${cuadro.tecnica}</h4>
      <p> $ ${cuadro.precio}</p>
      <button>Agregar al carrito</button>
   `;
 marcoslista.appendChild(tarjeta)
})
    
}


