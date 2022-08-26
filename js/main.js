
$('.single-item').slick({
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1800,
    slidesToShow: 1,
    adaptiveHeight: true
});


class Productos {
    constructor (id,nombre,tipo,descripcion,precio,img,stock){
        this.id = id,
        this.nombre = nombre,
        this.tipo = tipo,
        this.descripcion = descripcion,
        this.precio = precio,
        this.img = img,
        this.stock = stock
    }
    imprimir(objeto){
        for(const clave in objeto){
            alert(`${clave} : ${objeto[clave]}`)
        }
    }
}


const products = [];

fetch('../stock.json')
    .then((respuesta) => respuesta.json())
    .then((data) => {
        data.productos.forEach(item =>{
            const product = new Productos(item.id,item.nombre,item.tipo,item.descripcion,item.precio,item.img,item.stock)
            products.push(product)
        })
        mostrarProductos()
    })



console.log(products)

class Carrito{
    constructor(id,nombre,imagen,precio,cantidad){
        this.id = id,
        this.nombre = nombre,
        this.imagen = imagen,
        this.precio = precio,
        this.cantidad = cantidad
    }
}

let contenedorProductos = document.getElementById('contenedor-productos');

function mostrarProductos(){
    products.forEach(item => {
    if (item.stock != -1) {
    let div = document.createElement('div')
    div.className = 'card2 col-md-3'
    div.id = `${item.id}`
    div.innerHTML = `<img class="product-image card-img-top align-self-center" src="${item.img}" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">${item.nombre}</h4>
                        <p class="card-text">Quedan ${item.stock} unidades</p>
                        <p class="card-text card-price">Precio:$<span class ="product-prize">${item.precio}</span></p>
                        <button class="add-to-cart add-to-cart btn" id="agregar${item.id}">Añadir al carrito</button>
                        </div>
                    `
                    // if (item.stock <= 3) {
                    //     div.innerHTML += `
                    //     <p class="card-text">Ultimas Unidades!</p>
                    //     `
                    // }
                
    contenedorProductos.append(div)
    }
})
}

mostrarProductos ();


const carrito = document.querySelector("#cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay");

///MODAL/////
////abrir al hacer click en el carrito/////
carrito.addEventListener("click", ()=>{
    if(cartModalOverlay.classList.contains("open")) {
        cartModalOverlay.classList.remove("open");
    } else {
        cartModalOverlay.classList.add("open");
    }
})

/////cerrar al hacer click en la x en carrito /////
const closeBtn = document.querySelector("#close-btn");
closeBtn.addEventListener("click", ()=>{
    cartModalOverlay.classList.remove("open");
})
///Agregar Productos al Carrito cuando aprieto el boton /////
const addToCart = document.getElementsByClassName("add-to-cart")

for(let boton of addToCart){
    boton.addEventListener("click", agregarCarrito)
}
////Carrito///
let carritoDeCompras = [];
let contadorCarrito = document.getElementById('contadorCarrito');
let total = document.getElementById('precioTotal');
let productRows = document.getElementById('productRows');


function agregarCarrito(e){
    let boton = e.target;
    console.log(boton)
    let producto = boton.parentElement;
    let prodName = producto.querySelector("h4").innerText;
    let precio = parseFloat(producto.querySelector(".product-prize").innerText);
    let contenedorProd = producto.parentElement;
    let prodID = contenedorProd.getAttribute("id")
    let imagen = contenedorProd.querySelector("img").src;
    let buscar = products.find(elemento => elemento.id == prodID)
    if(buscar){
        let productoAgregado = carritoDeCompras.find(elemento => elemento.id == buscar.id)
        if(productoAgregado){
            productoAgregado.cantidad += 1
        }else{
            carritoDeCompras.push(new Carrito( prodID,prodName,imagen,precio,1))
        }
    }
    localStorage.setItem("products",JSON.stringify(carritoDeCompras))
    renderizarCarrito()
    avisoBorrar()
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

function renderizarCarrito(){
    productRows.innerHTML = "";
    carritoDeCompras.forEach(item => {
        let div = document.createElement('div');
        div.className = 'product-rows2'
        div.innerHTML = `<div class="product-row" id="${item.id}">
                            <img class="product-cart-image card-img-top align-self-center" src="${item.imagen}" alt="Card image"/>
                            <span class="name-product-cart">${item.nombre}</span>
                            <span class="cart-price">${item.precio}</span>
                            <span class="cantidad-product">${item.cantidad}</span>
                            <button onclick="eliminarDelCarrito(${item.id})" class="remove-btn">Borrar</button>
                        </div>
                        `
    productRows.appendChild(div)
    })
}



function avisoBorrar (){
    let botonesBorrar = productRows.querySelectorAll(".remove-btn");
    for(let boton of botonesBorrar) {
        boton.addEventListener("click", borrarElemento);
    }
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

const eliminarDelCarrito = (prodId) => {
    const item = carritoDeCompras.find((prod) => prod.id === prodId)
    const indice = carritoDeCompras.indexOf(item)
    carritoDeCompras.splice(indice, 1)
    actualizarCarrito()
}

const comprarCarrito = document.getElementById('comprarCarrito')

comprarCarrito.addEventListener('click',()=>{
    carritoDeCompras.length = 0
    renderizarCarrito()
    eliminarDelCarrito()
    Swal.fire({
        background: "#fff",
        position: 'top-end',
        icon: 'success',
        title: 'Tu compra fue realiza con exito',
        showConfirmButton: false,
        timer: 1500
    })
})