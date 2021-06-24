const colores = ["blanco", "negro", "amarillo", "azul", "verde", "naranja"]

const largoMaximoDeArray = function(array){
    let largoMaximo = ""
    for (let i=0; i<array.length; i++){
        if (array[i].length>largoMaximo.length){
            largoMaximo = colores[i]
         }
        
    }
    console.log(largoMaximo) 
}

var caracterMasRecurrente = function (string) {
    
    let max = 0
    let caracter = ""
    string.split("").forEach(function(char){
        let i = string.split(char).length - 1
        if (i>max){
            max = i
            caracter = char
        }
    });
    console.log ("El caracter -" + caracter + "- aparece " + max + " veces")

};


largoMaximoDeArray(colores)
caracterMasRecurrente(colores[5])