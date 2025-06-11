function contarCaracteres(){
    let texo = document.getElementById('textarea'); 
    let texto = texo.value;   
    let numeroCarcateres = document.getElementById('contador').textContent= texto.length;
    
    let hola  =document.getElementById('textarea');

    const parrafo= document.querySelector('p');
    console.log(parrafo);
    console.log(numeroCarcateres);
    if(numeroCarcateres >= 250){
        console.log("maximo alcanzado");
        textarea.style.border = 'solid 3px red';  
        parrafo.style.color = 'red';
    }else{
        textarea.style.border = 'solid 3px black';  
        parrafo.style.color = 'black';

    }
}