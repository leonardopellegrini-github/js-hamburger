//apri

const apri = document.querySelector ('.fa-bars');

const active = document.querySelector ('.hamburger-menu');

const chiudi = document.querySelector ('.fa-times');


apri.addEventListener('click', function(){
  
  active.classList.add('active');

});

chiudi.addEventListener('click', function(){
  
  active.classList.remove('active');

});

