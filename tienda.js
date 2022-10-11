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

alert("Artículos de nuestro catálogo: \n - Mug\n - Figura\n - Llavero")

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

/**/ 

let cantidadCompra = parseInt(prompt("Cuantas referencias de producto desea adquirir:"))

for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese el nombre del producto que desea comprar: \n - Mug\n - Figura\n - Llavero")
    
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

