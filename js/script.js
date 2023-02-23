let nombre = prompt("Ingresa tu nombre");
alert ("Bienvenido/a, " + nombre);

let edadUser = parseInt(prompt("Ingresa tu edad, queremos asegurarnos que sos mayor!"));
let edadMinima = 18;

if(edadUser>=edadMinima){
    alert("Genial, podemos seguir.");
    
    
        for(let i = 5; i>0; i--){
        alert('Para asegurarnos que no eres un robot pulsa '+i+ ' veces aceptar.');
        }
    
        const suma = (a,b) => {return a + b}
        const iva = x =>  {return x * 0.21}
    
        let precioProducto = parseInt(prompt("Ingresa el precio de tu producto"))
    
        let nuevoPrecio = (suma(precioProducto,iva(precioProducto)))
    
        alert('El precio original de producto es $'+precioProducto+'. Luego de aplicarle el IVA, el nuevo precio es $'+nuevoPrecio);


} else if(edadUser<0){
    alert("Pusiste una edad invalida");
}
else {
    alert("Vuelve cuanto tengas 18 :(")
}




