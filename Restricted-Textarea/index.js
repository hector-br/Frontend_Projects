function contarCaracteres(){
    let tarea = document.getElementById('textarea'); 
    let texto = tarea.value;   
    let numeroCarcateres = document.getElementById('contador').textContent= texto.length;
    

    let parrafo= document.querySelector('p');
    
    if(numeroCarcateres >= 250){
        tarea.style.border = 'solid 3px red';  
        parrafo.style.color = 'red';
        tarea.style.color = 'red';
        tarea.value = textarea.value.substring(0, 250-1);
    }else{
        tarea.style.border = 'solid 3px black';  
        parrafo.style.color = 'black';
        tarea.style.color = 'black';
    }
}