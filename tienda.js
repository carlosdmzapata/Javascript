function tienda() {
    let consultaCompra = prompt("Desea realizar una compra?").toLowerCase();
    if(consultaCompra ==`si`){
        seleccion1 = parseInt(prompt(`${listadoNombresProductos.join(`\n`)}`) );
    }else if(consultaCompra == `no`){
        alert("Muchas gracias por su visita");
    }
    }


function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
    this.sumarStock = function(cantidad){
        this.stock += cantidad
    }
}

let productoA = new Producto("Mug", 5.50, 150)
let productoB = new Producto("Figura", 12.00, 100)
let productoC = new Producto("Llavero", 8.50 , 200)

let precioTotal = 0

const listaProducto =[] 
listaProducto.push(new Producto(`Camiseta`,165035,15,1.21,1));
listaProducto.push(new Producto(`Gorra`,6198.1,30,1.21,2));
listaProducto.push(new Producto(`Parche`,6500,50,1.21,3));
listaProducto.push(new Producto(`Manilla`,45000,53,1.21,4));

alert("Artículos de nuestro catálogo: \n - Mug\n - Figura\n - Llavero\n - Camiseta\n - Gorra\n - Parche\n - Manilla")

function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

function calculoStock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
    }
    else{
        alert("Quedan " + stock + " unidades en stock")
    }
}


let cantidadCompra = parseInt(prompt("Cuantas referencias de producto desea adquirir:"))

for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese el nombre del producto que desea comprar: \n - Mug\n - Figura\n - Llavero\n - Camiseta\n - Gorra\n - Parche\n - Manilla")
    
    if(productoCompra.toUpperCase() == 'MUG'){
        let cantidadProductoMug = prompt("ingrese que cantidad de " + productoA.nombre + " desea comprar:")
        calculoStock(cantidadProductoMug, productoA.stock, productoA["precio"])
        productoA.restarStock(cantidadProductoMug)
    }
    else if(productoCompra == 'Figura'){
        let cantidadProductoFigura = prompt("ingrese que cantidad de " + productoB.nombre + " desea comprar:")
        calculoStock(cantidadProductoFigura, productoB.stock, precioProductoB)
        productoB.restarStock(cantidadProductoFigura)
    }
    else if(productoCompra == 'Llavero'){
        let cantidadProductoLlavero = prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar:")
        calculoStock(cantidadProductoLlavero, stockProductoC, precioProductoC)
        productoC.restarStock(cantidadProductoLlavero)
    }

    else if(productoCompra == 'Camiseta'){
        let cantidadProductoLlavero = prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar:")
        calculoStock(cantidadProductoLlavero, stockProductoC, precioProductoC)
        productoC.restarStock(cantidadProductoLlavero)
    }

    else if(productoCompra == 'Gorra'){
        let cantidadProductoLlavero = prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar:")
        calculoStock(cantidadProductoLlavero, stockProductoC, precioProductoC)
        productoC.restarStock(cantidadProductoLlavero)
    }

    else if(productoCompra == 'Manilla'){
        let cantidadProductoLlavero = prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar:")
        calculoStock(cantidadProductoLlavero, stockProductoC, precioProductoC)
        productoC.restarStock(cantidadProductoLlavero)
    }

    else if(productoCompra == 'Parche'){
        let cantidadProductoLlavero = prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar:")
        calculoStock(cantidadProductoLlavero, stockProductoC, precioProductoC)
        productoC.restarStock(cantidadProductoLlavero)
    }

    else{
        alert("El producto seleccionado no se encuentra disponible")
    }

} 

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}
else{
    alert("Gracias por su visita!")
}

