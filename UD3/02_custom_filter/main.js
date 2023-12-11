const assert = require('assert').strict;

function select(array, condition) {
    
    return condition(array)
}

function pairs(array){
    let lid
            
        for (let index = array.length - 1; index >= 0; index--) {
            
            if (array[index]%2!=0) {
                lista.add(array[index])   
           
        }
      
    } console.log(array)
    return array
}

function gt15(array){
    let lista = []
    console.log(lista)      
    for (let index = array.length - 1; index >= 0; index--) {
        
        if (array[index]>15) {
        lista.add(array[index])       
    }
  
} console.log(lista)
return lista
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]
// sólo pares
assert.deepStrictEqual(select(values, pairs), [2])

// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])