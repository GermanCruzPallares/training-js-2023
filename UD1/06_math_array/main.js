// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos



function doCalculation(array) {
let sum=0
let numMa=array[0]
let numMe=array[0]
let med=0
for (let index = 0; index < array.length; index++) {
    
    sum= sum + array[index]
    
    if(array[index]>numMa){

       numMa = array[index] 
    
    }

    if (array[index]<numMe){

        numMe = array[index]
    }

    med= sum/array.length 
}

console.log(sum,numMa,numMe,med)
}

doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])


