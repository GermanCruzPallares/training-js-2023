const assert = require('assert').strict

function insertIfNotExists(array, item, position) {
    if(!array.includes(item)){
     if (position) {
      array.unshift(item)
     }else{
        array.push(item)
     }
    }

    return array
}


let array = ['pera', 'manzana']

let result = insertIfNotExists(array, 'pera', false)
assert.deepStrictEqual(result, ['pera', 'manzana'])

result = insertIfNotExists(array, 'melón', false)
assert.deepStrictEqual(result, ['pera', 'manzana', 'melón'])

result = insertIfNotExists(array, 'melocotón', true)
assert.deepStrictEqual(result, ['melocotón', 'pera', 'manzana', 'melón'])

console.log(array)