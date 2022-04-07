//apri

const hambu = document.getElementsByClassName ('.header-right');
console.log(hambu);

const active = document.getElementsByClassName ('.hamburger-menu');
console.log(active);

hambu.addEventListener('click', function(){
  
  active.classList.add('active');

});


//chiudi

// const chiudi = document.getElementsByClassName('.fas fa-times');