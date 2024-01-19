// Função mouseouver no header
let elementosEnter = document.querySelectorAll('.mouseover');
elementosEnter.forEach(function(event){
    event.addEventListener("mouseenter",function(){
        event.style.color = 'white';
    });
});

let elementosLeave = document.querySelectorAll('.mouseover');
elementosLeave.forEach(function(event){
    event.addEventListener("mouseleave",function(){
        event.style.color = 'black';
    });
});

//Função que aumenta o tamanho do logo
let elementosLogo = document.querySelectorAll('.logo-network');
elementosLogo.forEach(function(evento){
    evento.addEventListener("mouseenter",function(){
        evento.style.color = 'white';
        console.log('oi');
        
    });
});