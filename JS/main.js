const encontrado = document.querySelector("#listaProductos");

const buscador = document.querySelector("#buscador");

const buscar = document.querySelector("#buscar");

const desplegarCarrito = document.querySelector(".productosEnElCarrito");

const carrito = [];


 

function imprimirProductos(arr){
  arr.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('producto');

    div.innerHTML = `
    <img src="${producto.img}" alt="Imagen de ${producto.descripcion}">
    <h3>${producto.descripcion}</h3>
    <p>$${producto.precio}</p>
    <button id="agregar${producto.sku}">Agregar</button>
    `
    encontrado.appendChild(div);

    const boton = document.getElementById(`agregar${producto.sku}`);

    boton.addEventListener("click", () => {

      agregarAlCarrito(producto.sku);
      console.log(producto.sku);

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado',
        showConfirmButton: false,
        timer: 1500
      })
    })

  })

  const agregarAlCarrito = (prodId) => {
    

    

    const item = arr.find((prod) => prod.sku === prodId);
    carrito.push(item);
    console.log(carrito);

    //configuracion del local storage ---------------------------------------------------

    const carritoGuardado = carrito;

    let carritoGuardadoJson = JSON.stringify(carritoGuardado);

    localStorage.setItem("guardado", carritoGuardadoJson);

    const carritoAObjeto = JSON.parse(localStorage.getItem('guardado'));
    
    // fin de la configuracion del local storage------------------------------------------

    const itemCarrito = document.createElement('p');

      itemCarrito.innerHTML = `
      
      Usted tiene 1 unidad de ${item.descripcion} que tiene un valor de $${item.precio}
      `
      desplegarCarrito.appendChild(itemCarrito);

    
  }

}

fetch('../JS/data.json')
.then(res=>res.json())
.then(data=>imprimirProductos(data));

  
  
 

 
  