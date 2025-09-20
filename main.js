const btn =document.getElementById('menu');
const nav = document.getElementById('mobile');

function navToggle(){
btn.classList.toggle('open');
nav.classList.toggle('hidden');
document.body.classList.toggle('no-scroll');
}
btn.addEventListener('click', navToggle);