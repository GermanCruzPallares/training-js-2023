window.onload = function(e) {
document.getElementsByClassName('first')[0].style.backgroundColor = "yellow"
document.getElementsByTagName('h2')[1].innerHTML = "no"
console.log(document.getElementsByClassName('buttons'))

console.log(document.querySelectorAll("li .item"))

let g = document.querySelectorAll("article .first")
for (let index = 0; index < g.length; index++) {
   g[index].style.color = "red"
    
}

}  