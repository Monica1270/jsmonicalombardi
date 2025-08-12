

const marcoslista = document.getElementById("cardMarcos");
const viwCartBtn = document.getElementById("viw-cart-btn");
const btnmarcos = document.getElementById("spanMarcos");
const numpostal = document.getElementById("inputMarcos");
const envio = document.getElementById("costodeenvio");
/* const cart = [] */
let cardMarcosRecuperado = JSON.parse(localStorage.getItem("cardMarcos")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || []; 
// crear una funcion

fetchobras();

async function fetchobras() {
  try {
    const respuesta = await fetch("../data/cuadros.json");//aqui si hago un console puedo ver mi array

    if (!respuesta.ok) {//dice si la repuesta no es ok que tire error, me tiraba error 404 porque antiguamente no estaba dentro de la carpeta data. Se va del try y se mete en el catch.
      throw new error("Network response was not ok");
    
    }
    const data = await respuesta.json();
    displayobras(data);

  } catch (error) {

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
    <img src="${cuadro.imagen}" alt="${cuadro.nombre}"</img>;
    
      <h3>${cuadro.nombre}</h3>
      <h4>${cuadro.medidas}</h4>
      <h5>${cuadro.técnica}</h5>
      <p> $ ${cuadro.precio}</p>
      <button data-id="${cuadro.id}"> Agregar al carrito </button>
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
      const cuadroToadd = cuadros.find((item) => item.id === cuadroid)
      //le estoy consultando si existe el cuadroid, entonces hacemos una funcion
      if (cuadroid) {
        addToCart(cuadroToadd);
        //cree la funcion addtucart que todavia no la tengo
      }

    })

  })
}
  function updateCartCount() {
    btnmarcos.textContent = cart.reduce((acc, item) => acc + item.quantity, 0)
  }
  //con esto voy a lograr que cuando hacemos un clik agregar al carrito vaya al boton de carrito que dice o y esta en html
  //con esta funcion voy a hacer que el boton que cada vez que hagamos click lo va a agregar al carrito de compras
  //con la constante le consulto si el cuadro esta
  function addToCart(cuadro) {


    const existingCuadro = cart.find((item) => item.id === cuadro.id)
    if (existingCuadro) {
      existingCuadro.quantity += 1;
    }
    else {
      cart.push({ ...cuadro, quantity: 1 })
    }
    //con este local estorage voy viendo como se van guardando, cada vez que yo apreto en el boton agregar al carrito
    localStorage.setItem("cart", JSON.stringify(cart))
    // debo crear una funcion para que se actualice el boton carrito en el html
    updateCartCount()
    Toastify({
      text: `${cuadro.nombre} agregado al carrito`,
      duration: 3000,
      gravity: "bottom",
      position: "right",
      style: {
        background: "linear-gradient(to right, #880859ff, #085088ff)",
        borderRadius: "10px",
        color: "#eaf3f1ff",
      },
      stopOnFocus: true,
    }).showToast();
  }
  //esta funcion es para que me salga un cartelito en la pagina que el carrito esta vacio
  function showCart() {
if (result.isConfirmed) {
  swal.fire({
    icon: "success",
    title: 'Compra Exitosa',
    text: `Gracias por su compra!`
  });
  cart.length = 0; // en vez de cart = [];
  localStorage.removeItem("cart");
  updateCartCount();
}

  if (cart.length === 0) {
      swal.fire({
        icon: "info",
        title: "Carrito vacío",
        Text: "No hay productos en el carrito",
        background: "#880859ff",
        color: "#085088ff",
        borderRadius: "2rem",
      });
      //con este retun le digo al sistema que cierre la funcion
      return;
    } 
    //dentro de este misma funcion voy a crea una lista  se debe hacer con batic pading, se dibuja el carrito dentro del ul
    let cartContent = `<ul style="list-sytle: none; padding: 0;">`;
    let total = 0;
    //en esta funcion estoy preparando para que vaya haciendo las cuentas el sistema 
    cart.forEach((item) => {
      const itemTotal = item.precio * item.quantity;
      total += itemTotal;
      //con esta cartconte lo que voy a hacer es que acumule. Y la forma de decirle al sistema que acumule es += Forma contraria se va a ir pisando la informacion     
      cartContent += `
       <li style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; border-bottom: 1px dotted #085088ff; padding-bottom: 5px;">
       <span>${item.nombre} x ${item.quantity}</span>
       <span>$${itemTotal.toFixed()}
       <button class="remove-from-cart-btn" data-id="${item.id}" style="background-color: #880859ff; color: white; border: none; border-radius: 3px; padding: 3px 8px; cursor: pointer; margin-left: 10px;">X</button>
                    </span>
                </li>
            `;
    });
  
  }

/* } */

const now = luxon.DateTime.local()
  .setLocale('es')
  .toLocaleString(luxon.DateTime.DATETIME_MED);
  let cartContent = " ";

cartContent += `<p style="font-style: italic"; font-size: 0.9rem; text-align: right; color: #170a6e>Fecha actual: ${now}</p>`;
swal.fire({
  title: 'Carrito de Compras',
  html: cartContent,
  width: 600,
  showCancelButton: true,
  confirmButtonText: 'Finalizar Compra',
  cancelButtonText: 'Seguir Comprando',
  didOpen: () => {
    document.querySelectorAll(".remove-from-cart-btn").forEach((button) => {
      button.addEventListener("click", (evt) => {
        // elimiar producto del carrito
        const productoToRemove = parseInt(evt.target.dataset.id)
        removeFromCart(cuadroToRemove)
        // vuelve a abrir el carrito
        showCart()
      });
    });
  }
}).then((result) => {
    if (result.isConfirmed) {
      swal.fire({
        icon: "success",
        title: 'Compra Exitosa',
        text: `Gracias por su compra!`
      })
      // limpiar el carrito
 cart = [];
 
}
   localStorage.removeItem("cart"); 
      updateCartCount();
    } 
 );


function removeFromCart(cuadroid) {
  cart = cart.filter((item) => item.id !== cuadroid)
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
    //el viwcartbn salio de la const que cree mas arriba, showcart le estoy diciendo mostrar el carrito
viwCartBtn.addEventListener("click", showCart)

}





