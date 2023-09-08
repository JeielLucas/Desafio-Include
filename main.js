const button = document.getElementById('menuButton');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    
}

button.addEventListener('click', toggleMenu);
