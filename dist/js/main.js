//Select objects from the DOM
const menuBtn = document.querySelector('.menu-btn');
const icon = document.querySelector('.material-icons');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach((item) => { item.classList.add('show') });

        icon.innerHTML = 'close';
        showMenu = true;
    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach((item) => { item.classList.remove('show') });

        icon.innerHTML = 'menu'
        showMenu = false;
    }
}
