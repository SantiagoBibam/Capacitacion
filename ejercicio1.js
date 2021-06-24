var colores = ["blanco", "negro", "amarillo", "azul", "verde", "naranja"]
var largoMaximo = ""
for (let i=0; i<colores.length; i++){
if (colores[i].length>largoMaximo.length){
    largoMaximo = colores[i]
}
}
console.log(largoMaximo)