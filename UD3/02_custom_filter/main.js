const assert = require('assert').strict;

function select(array, condition) {
    
    return condition(array)
}

function pairs(array){
    let lista = []
            
        for (let index = array.length - 1; index >= 0; index--) {
            
            if (array[index]%2==0) {
                lista.push(array[index])   
           
        }
      
    } 
    return lista
}

function gt15(array){
    let lista = []
    
    for (let index=0 ; index < array.length ; index++) {
        
        if (array[index]>15) {
        lista.push(array[index])       
    }
  
} console.log(lista)
return lista
}

function lt10(array){
    let lista = []
     
    for (let index = 0; index < values.length ; index++) {
        
        if (array[index]<10) {
        lista.push(array[index])       
    }
    console.log(values)
} 
return lista
}




let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]
// sólo pares
assert.deepStrictEqual(select(values, pairs), [2])

// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])