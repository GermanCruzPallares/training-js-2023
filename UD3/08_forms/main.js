window.onload = function() {

    console.log(document.main_form.elements)

    console.log(document.getElementById('pregunta_si').value)
    console.log(document.getElementById('pregunta_si').checked)

    document.getElementById('pregunta_si').onchange = changeValue
    document.getElementById('pregunta_no').onchange = changeValue
    let c = document.querySelectorAll('input[type=checkbox]')
    console.log(c)
    for (let index = 0; index < c.length; index++) {
        
        if (c[index].checked===false) {
            document.getElementById('submit').style.display="none"
        }else{
            
        }   
    }
    
   

    
}

function changeValue(e) {
     console.log('changed' + e.target.value)
}

