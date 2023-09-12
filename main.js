const button = document.getElementById('menuButton');
const buttonFechar = document.getElementById('botaoFechar');
const nav = document.getElementById('nav');
const botaoMobile = document.querySelectorAll(".botaoMobile");

function toggleMenu(){
    nav.classList.toggle('active');
}

function fecharMenuMobile(){
    if(nav.classList.contains('active')){
        nav.classList.remove('active');
    }
}

botaoMobile[0].addEventListener('click', fecharMenuMobile);
botaoMobile[1].addEventListener('click', fecharMenuMobile);
botaoMobile[2].addEventListener('click', fecharMenuMobile);
button.addEventListener('click', toggleMenu);
buttonFechar.addEventListener('click', toggleMenu);
