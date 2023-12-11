const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
    let hora = parseInt(value/3600)
    let min = parseInt((value%3600)/60)
    let sec = parseInt((value%3600)%60)
    return `${hora}:${min}:${sec}`
}

assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:2:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:2:5")