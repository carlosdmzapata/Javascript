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
let productoD = new Producto("Manilla", 2.50 , 130)
let productoE = new Producto("Camiseta", 15.50 , 50)
let productoF = new Producto("Gorra", 9.00 , 20)


let listaProductos =[productoA, productoB, productoC, productoD, productoE, productoF] 

let listaProductosConStock = listaProductos.filter((prod) => prod.nombre)

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)

/*for(const prod of listaProductos){
    if (prod.stock > 0) {
    listaNombres.push(prod.nombre)
    }
}*/

let precioTotal = 0

alert("Artículos de nuestro catálogo: \n - " + listaNombres.join("\n -"))

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

    let productoCompra = prompt("Ingrese el nombre del producto que desea comprar: \n - " + listaNombres.join("\n -"))
    
    if(productoCompra.toUpperCase() == 'MUG'){
        let cantidadProductoMug = prompt("ingrese que cantidad de " + productoA.nombre + " desea comprar:")
        calculoStock(cantidadProductoMug, productoA["stock"], productoA["precio"])
        productoA.restarStock(cantidadProductoMug)
    }
    else if(productoCompra == 'Figura'){
        let cantidadProductoFigura = prompt("ingrese que cantidad de " + productoB.nombre + " desea comprar:")
        calculoStock(cantidadProductoFigura, productoB["stock"], productoB["precio"])
        productoB.restarStock(cantidadProductoFigura)
    }
    else if(productoCompra == 'Llavero'){
        let cantidadProductoLlavero = prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar:")
        calculoStock(cantidadProductoLlavero, productoC["stock"], productoC["precio"])
        productoC.restarStock(cantidadProductoLlavero)
    }

    else if(productoCompra == 'Camiseta'){
        let cantidadProductoCamiseta = prompt("ingrese que cantidad de " + productoE.nombre + " desea comprar:")
        calculoStock(cantidadProductoCamiseta, stockProductoE, precioProductoE)
        productoE.restarStock(cantidadProductoCamiseta)
    }

    else if(productoCompra == 'Gorra'){
        let cantidadProductoGorra = prompt("ingrese que cantidad de " + productoF.nombre + " desea comprar:")
        calculoStock(cantidadProductoGorra, stockProductoF, precioProductoF)
        productoF.restarStock(cantidadProductoGorra)
    }

    else if(productoCompra == 'Manilla'){
        let cantidadProductoManilla = prompt("ingrese que cantidad de " + productoD.nombre + " desea comprar:")
        calculoStock(cantidadProductoManilla, stockProductoD, precioProductoD)
        productoD.restarStock(cantidadProductoManilla)
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

