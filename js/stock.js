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
const prod1 = new Productos("1", "Placa de Video MSI NVIDIA Geforce RTX 3090 Ventus 3X 24G OC", "placavideo", "Su memoria de video es de 24GB en formato GDDR6X, contará con 36 Shaders -TFLOPs, 69 RT-TFLOPs y 285 Tensor-TFLOPs. Tendrá 10,496 núcleos CUDA y velocidad máxima de reloj de 1.7 GHz. La promesa de Nvidia es que con esas especificaciones pueda ser la primera GPU verdaderamente ideada para el gaming en 8K.", 360000,'img/placa-de-video-msi-geforce-rtx-3090-ventus-3x-24g-450x450.png', 2);
const prod2 = new Productos("2", "Placa De Video Msi Nvidia Gtx 1650 Super Gaming X 4g", "placavideo", "Es una tarjeta gráfica de desktop en la arquitectura Turing y el proceso de la tecnología 12 nm priméramente desarrollada para los jugadores. Posee una memoria de 4 GB de memoria GDDR5 en la frecuencia de 8 GHz y con la interfaz de 128 Bit posee un ancho de banda de 128.0 GB/s.", 70000,'img/1650super.png', 2);
const prod3 = new Productos("3", "GeForce GTX 1050 Ti GAMING X 4G", "placavideo", "Es una tarjeta gráfica de desktop en la arquitectura Pascal y el proceso de la tecnología 16 nm priméramente desarrollada para los jugadores. Posee una memoria de 4 GB de memoria GDDR5 en la frecuencia de 7 GB/s y con la interfaz de 128 Bit posee un ancho de banda de 112 GB/s.", 50000,'img/1050ti.png', 3);
const prod4 = new Productos("4", "Monitor Curvo de Gaming ROG Strix", "Monitor", "Monitor Curvo de Gaming ROG Strix XG27VQ: 27 pulgadas, Full HD (1920x1080), 144Hz, Extreme Low Motion Blur, Adaptive-Sync (FreeSync™)", 90000,'./img/monitor.png', 4);
const prod5 = new Productos("5", "Teclado HyperX Alloy CORE RGB Gaming", "teclado", "Teclado HyperX Alloy CORE RGB Gaming", 50000,'img/tecladohyperx.png', 5);
const prod6 = new Productos("6", "G502 HERO - Logitech G", "mouse", "G502 HERO dispone de un sensor óptico avanzado para máxima precisión de seguimiento, iluminación RGB personalizada, perfiles de juego personalizados, de 200 a 25.600 dpi y pesas reposicionables. 11 botones Totalmente programable4.", 50000,'img/mouseG502hero.png', 5);

products.push(prod1, prod2, prod3, prod4, prod5, prod6) 

class Carrito{
    constructor(id,nombre,imagen,precio,cantidad){
        this.id = id,
        this.nombre = nombre,
        this.imagen = imagen,
        this.precio = precio,
        this.cantidad = cantidad
    }
}
