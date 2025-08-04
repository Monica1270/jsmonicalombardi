

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
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("card-container");
    tarjeta.innerHTML = `
    <img src="${cuadro.imagen}" alt="${cuadro.nombre}" />
      <h3>${cuadro.nombre}</h3>
      <h4>${cuadro.medidas}</h4>
      <h5>${cuadro.técnica}</h5>
      <p> $ ${cuadro.precio}</p>
      <button data-id="${cuadro.id}">Agregar al carrito</button>
   `
      //en el boton le doy un atributo y le puse id para poder indentificar

      ;
    marcoslista.appendChild(tarjeta)
  })
  //con estoy estoy eligiendo todos los botones y luego con forech le estoy diciendo que los recorra a todos 
  document.querySelectorAll(".card-container button").forEach((button) => {
    //con add le asocion un evento que es el clik,evento+funcion
    button.addEventListener("click", (evt) => {
      //creo una constante de cuadroid para obtener el cuadro. Para sacarlo utilizo target.dataset.Poniendo dataset.id le estoy diciendo al sistema todo lo que tenga id Asi como esta redactado el sistma me lo trae como una cadena de caracteres para convertirlo en numerso debo anteponer parsetint
      const cuadroid = parseInt(evt.target.dataset.id)
      //creo una constante para agregar el cuadro find es buscar item son de los array
      const cuadroToadd = cuadros.find((item) => item.id = cuadroid)
      //le estoy consultando si existe el cuadroid, entonces hacemos una funcion
      if (cuadroid) {
        addToCart(cuadroToadd);
       
      }

    })


  })
  //con esta funcion voy a hacer que el boton que cada vez que hagamos click se vea el procucto 
  //con la constante le consulto si el cuadro esta
  function  addToCart(cuadro) {
     const existingCuadro = cart.find((item)=>item.id===cuadro.id) 
     if (existingCuadro) {
      existingCuadro.quantity +=1}
     }

  }



