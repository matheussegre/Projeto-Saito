const btnLogin = document.getElementById('btn-login');
const btnClose = document.querySelector('.js-close');
const overlayLogin = document.querySelector('.js-login');

const overlayCad = document.querySelector('.js-cadastro');
const btnCad = document.getElementById('js-btn-cad');
const buttonCad = document.querySelector('.js-cad')
const btnCloseCad = document.querySelector('.js-close-cad');

function openMenuLogin() {
    overlayLogin.classList.toggle('active');
}

function openMenuCad() {
    overlayCad.classList.toggle('active');
    overlayLogin.classList.remove('active');
}

btnLogin.addEventListener('click', openMenuLogin);

btnClose.addEventListener('click', openMenuLogin);

btnCad.addEventListener('click', openMenuCad);

buttonCad.addEventListener('click', openMenuCad);

btnCloseCad.addEventListener('click', openMenuCad);
