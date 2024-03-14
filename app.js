var display=document.querySelector('.display')
var btn=document.querySelector('#btn')
var input=document.querySelector('#input')

function getTable(){

    display.innerHTML='';

    for(let i=1; i<11; i++){

        display.innerHTML+=input.value+'X'+i+'='+input.value*i+'<br>';
        
    }
}