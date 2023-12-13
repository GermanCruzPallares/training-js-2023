window.onload = function(e) {
    let b = document.getElementsByTagName("a")
    let c = document.getElementsByTagName('p')
    for (let i = 0; i < c.length; i++) {
        
            b[i].addEventListener("click",(event)=> {
                if(c[i].style.display===""){
                c[i].style.display= "none"
                b[i].innerHTML= "Mostrar contenido"
                }else{
                c[i].style.display= ""
                b[i].innerHTML= "Ocultar contenido"
                }
            })
        
    }
    

    
    
    


}