let nombre = prompt("Ingresá tu nombre");
alert ("Bienvenido/a, " + nombre + " a VapeAR! A continuación podrás ver nuestro catálogo");

let edadUser = parseInt(prompt("Ingresá tu edad, queremos asegurarnos que sos mayor!"));
let edadMinima = 18;

if(edadUser>=edadMinima){
    alert("Genial, podemos seguir.");
    
    
        for(let i = 5; i>0; i--){
        alert('Para asegurarnos que no eres un robot pulsa '+i+ ' veces aceptar.');
        }



        class Vape {
            constructor(modelo,puffs,color,precio){
                this.modelo = modelo;
                this.puffs = parseInt(puffs);
                this.color = color;
                this.precio = parseInt(precio);
            }
        }
        
        
        
        const vapes = [
            new Vape ("Zomo - Party", 1800, "Negro", 3585),
            new Vape ("Supreme - Pandora", 1500, "Rojo", 4889),
            new Vape ("Fume - Extra", 1500, "Amarillo", 5867),
            new Vape ("Fume - Ultra", 2500, "Negro", 6871),
            new Vape ("Ignite - V30", 3000, "Azul", 5990),
        ]
        
        console.log(vapes);


        
        let criterio = prompt('Elegí el criterio deseado:\n1 - Modelo (A a Z) \n2 - Modelo (Z a A)\n3 - Precio mayor a menor \n4 - Precio menor a mayor');
        
        function ordenar(criterio, array) {
            let arrayOrdenado = array.slice(0);
        
        
            switch (criterio) {
                case '1':
                    let nombreAscendente = arrayOrdenado.sort((a,b)=>a.modelo.localeCompare(b.modelo));
                    return nombreAscendente;
                case '2':
                    let nombreDescendente = arrayOrdenado.sort((a, b) => b.modelo.localeCompare(a.modelo));
                    return nombreDescendente;
                case '3':
                    return arrayOrdenado.sort((a, b) => b.precio - a.precio);
                case '4':
                    return arrayOrdenado.sort((a, b) => a.precio - b.precio);
                default:
                    alert('No es un criterio válido');
                    break;
            }
        }
        
        
        
        function crearStringResultado(array){
            let info = '';
        
            array.forEach(elemento=>{
                info += 'Título: ' + elemento.modelo + '\nPuffs: ' + elemento.puffs + '\nColor: ' + elemento.color + "\n" +'Precio: $' + elemento.precio + "\n\n"
            })
        
            return info;
        }

        
        alert(crearStringResultado(ordenar(criterio,vapes)));

        alert("Gracias por ver nuestro catálogo!");
        
        
} else if(edadUser<0){
    alert("Pusiste una edad invalida");
}
else {
    alert("Vuelve cuanto tengas 18 :(")
}