let carritoDeCompras = []
console.log(carritoDeCompras)
const carrito = document.querySelector("#cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay");
let contadorCarrito = document.getElementById('contadorCarrito')
let total = document.getElementById('precioTotal') 


function agregarCarrito(e){
    let boton = e.target;
    let producto = boton.parentElement;
    let prodName = producto.querySelector("h4").innerText;
    let precio = parseFloat(producto.querySelector(".product-prize").innerText);
    let contenedorProd = producto.parentElement
    let prodID = contenedorProd.getAttribute("id")
    let imagen = contenedorProd.querySelector("img").src;
    let buscar = products.find(elemento => elemento.id == prodID)
    if(buscar){
        let productoAgregado = carritoDeCompras.find(elemento => elemento.id == buscar.id)
        if(productoAgregado){
            productoAgregado.cantidad += 1
        }else{
            carritoDeCompras.push(new Carrito( prodID,prodName,imagen,precio,1))
            agregarElemento(prodID,prodName,precio,imagen)
        }
    }
    localStorage.setItem("products",JSON.stringify(carritoDeCompras))
    Swal.fire({
        background: "#fff",
        position: 'top-end',
        icon: 'success',
        title: 'Añadiste al carrito',
        showConfirmButton: false,
        timer: 1500
    })
    actualizarCarrito()
    console.log(carritoDeCompras)
}
///Productos en el Carrito/////

function agregarElemento(prodID,prodName,precio,imagen){
    let productRow = document.createElement("div");
    let contenedorProductos = document.querySelector(".product-rows");
    let elemProducto = `
        <div class="product-row" id="${prodID}">
            <img class="product-cart-image card-img-top align-self-center" src="${imagen}" alt="Card image"/>
            <span class="name-product-cart">${prodName}</span>
            <span class="cart-price">${precio}</span>
            <button class="remove-btn">Borrar</button>
        </div>
    `
    productRow.innerHTML = elemProducto;
    contenedorProductos.append(productRow);
    let botonesBorrar = productRow.querySelectorAll(".remove-btn");
    for(let boton of botonesBorrar) {
        boton.addEventListener("click", borrarElemento);
    }
    actualizarCarrito()
    cantElementosCarrito();
    Swal.fire({
        background: "#fff",
        position: 'top-end',
        icon: 'success',
        title: 'Añadiste al carrito',
        showConfirmButton: false,
        timer: 1500
    })
    actualizarCarrito()
}

function borrarElemento(e) {
    btn = e.target;
    btn.parentElement.parentElement.remove();
    cantElementosCarrito();
    Swal.fire({
        background: "#fff",
        position: 'top-end',
        icon: 'success',
        title: 'Borraste el producto del carrito',
        showConfirmButton: false,
        timer: 1500
    })
    actualizarCarrito ();
}

function cantElementosCarrito() {
    let cantidad = document.querySelectorAll(".product-rows > div");
    let cartQuantity = document.querySelector(".cart-quantity");
    cartQuantity.innerText = cantidad.length;
}

function  actualizarCarrito (){
    contadorCarrito.innerText = carritoDeCompras.length
    total.innerText = carritoDeCompras.reduce((acc, el)=> acc + el.precio, 0)
}

