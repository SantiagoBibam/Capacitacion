var colores = ["blanco", "negro", "amarillo", "azul", "verde", "naranja"]

var largoMaximoDeArray = function(array){
    let largoMaximo = ""
    for (let i=0; i<array.length; i++){
        if (array[i].length>largoMaximo.length){
            largoMaximo = colores[i]
         }
        
    }
    console.log(largoMaximo) 
}
largoMaximoDeArray(colores)