///Desafio Primer Proyecto////

//Productos con sus propiedades////
class Productos{
    constructor(nombre,precio,stock){
        this.nombre = nombre.toUpperCase()
        this.precio = precio
        this.stock = stock
    }
    imprimir(objeto){
        for(const clave in objeto){
            alert(`${clave} : ${objeto[clave]}`)
        }
    }
}
///Inventario////
const listaProductos = [
    {nombre: "Televisor", precio: 140000,stock: 1},
    {nombre: "Celular", precio: 45000,stock: 4},
    {nombre: "Parlante", precio: 50000,stock: 2},
    {nombre: "Playstation 5", precio: 150000,stock: 1},
]

function saludoCliente(){
    const nombreCliente = prompt("ingrese su nombre")
    alert(`hola ${nombreCliente} bienvenido a Fravegas`)
}

    
function muestraDeProducto(){
    listaProductos.forEach(product => {
        alert(`Le presentamos nuestros productos este producto es ${product.nombre} y su precio es $${product.precio} y tiene un stock de ${product.stock} unidades`)
    })
}
    



saludoCliente()
muestraDeProducto()
//Producto del Cliente que quiere llevar //
let productoCliente = prompt('que producto quiere?(nombredelproducto)').toLowerCase()
let encontrado = listaProductos.find(product => product.nombre.toLowerCase() == productoCliente)
alert(`Ustedes eligio el producto ${encontrado.nombre} con el precio de ${encontrado.precio} y con un stock de ${encontrado.stock}`)

/// Precio del producto////
alert (`El precio del producto es $${encontrado.precio}`)

// Como lo va a querer pagar //
let productoPrecio = encontrado.precio
let meses
let banco
let interes
let precioConInteres
let cuota
ingresarDatos()

function ingresarDatos (){
    let productoPrecio = encontrado.precio
    console.log(productoPrecio)
    let banco = prompt("Ingresa que tarjeta tiene(visa,mastercard,naranja,debito)")
    let meses = parseInt(prompt("Ingresa la cantidad de cuotas"))
    let interes = calcInteres(banco)
    let precioConInteres = productoConInteres(productoPrecio,interes)
    let cuota = calcCuota(precioConInteres,meses)
    mostrar(precioConInteres,banco,interes,cuota,meses)
}
function productoConInteres (productoPrecio,interes){
    let precioconinteres = productoPrecio * (1 + interes/100)
    return precioconinteres.toFixed(2)
}

function calcCuota (precioConInteres,meses){
    cuota = precioConInteres / meses
    return cuota.toFixed(2)
}

function calcInteres (banco){
    switch (banco){
        case "visa":
            return 10
        case "mastercard":
            return 10
        case "naranja":
            return 15
        default:
            return 0
    }
}

// Muestra el interes de la tarjeta,cuantas cuota lo lleva y el precio con su respectivo interes //
function mostrar(precioConInteres,banco,interes,cuota,meses){
    alert(`el precio del producto es de $${precioConInteres} con la tarjeta del banco ${banco} tiene un interes de ${interes}% a pagar en cuotas de $${cuota} durante ${meses} meses`)
}
