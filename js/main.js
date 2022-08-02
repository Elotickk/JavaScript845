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
const prod1 = new Productos("1", "Placa de Video MSI NVIDIA Geforce RTX 3090 Ventus 3X 24G OC", "placavideo", "La GeForce RTX ™ 3090 es una gran GPU feroz (BFGPU) con un rendimiento de clase TITAN. Está impulsado por Ampere, la arquitectura RTX de segunda generación de NVIDIA, que duplica el rendimiento del trazado de rayos y la inteligencia artificial con núcleos RT mejorados, núcleos Tensor y nuevos multiprocesadores de transmisión.", 360000,'img/placa-de-video-msi-geforce-rtx-3090-ventus-3x-24g-450x450.png', 2);
const prod2 = new Productos("2", "Placa De Video Msi Nvidia Gtx 1650 Super Gaming X 4g", "placavideo", "La GeForce GTX 1650 Super es una gran GPU feroz (BFGPU) con un rendimiento de clase TITAN. Está impulsado por Ampere, la arquitectura RTX de segunda generación de NVIDIA, que duplica el rendimiento del trazado de rayos y la inteligencia artificial con núcleos RT mejorados, núcleos Tensor y nuevos multiprocesadores de transmisión.", 70000,'img/1650super.png', 2);
const prod3 = new Productos("3", "GeForce GTX 1050 Ti GAMING X 4G", "placavideo", "La GeForce GTX 1050 es una gran GPU feroz (BFGPU) con un rendimiento de clase TITAN. Está impulsado por Ampere, la arquitectura RTX de segunda generación de NVIDIA, que duplica el rendimiento del trazado de rayos y la inteligencia artificial con núcleos RT mejorados, núcleos Tensor y nuevos multiprocesadores de transmisión.", 50000,'img/1050ti.png', 1);
const prod4 = new Productos("4", "GeForce GTX 1050 Ti GAMING X 4G", "placavideo", "Monitor Curvo de Gaming ROG Strix XG27VQ: 27 pulgadas, Full HD (1920x1080), 144Hz, Extreme Low Motion Blur, Adaptive-Sync (FreeSync™)", 90000,'./img/monitor.png', 2);
const prod5 = new Productos("5", "Teclado HyperX Alloy CORE RGB Gaming", "placavideo", "Teclado HyperX Alloy CORE RGB Gaming", 50000,'img/tecladohyperx.png', 2);

products.push(prod1, prod2, prod3, prod4, prod5)
console.log(products)

let contenedorProductos = document.getElementById('contenedor-productos');

function mostrarProductos(){
    products.forEach(item => {
    let div = document.createElement('div')
    div.className = 'card col-md-3'
    div.id = `${item.id}`
    div.innerHTML = `<img class="product-image card-img-top align-self-center" src="${item.img}" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">${item.nombre}</h4>
                        <p class="card-text">${item.descripcion}</p>
                        <button class="add-to-cart add-to-cart btn btn-success">Comprar</button>
                        Precio<span class ="product-prize"> $${item.precio}</span>
                    </div>
                    `
    contenedorProductos.appendChild(div)
    })
}

mostrarProductos()
