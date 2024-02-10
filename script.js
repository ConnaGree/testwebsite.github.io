const mobileMenu = document.querySelector('.my__mobile__menu');
const menuButton = document.querySelector('.menu__button');
const closeButton = document.querySelector('.close__button');


menuButton.addEventListener('click', (e) => {
    console.log(mobileMenu);
    mobileMenu.classList.toggle('disappear__menu');
    menuButton.style.display = 'none';
    closeButton.classList.remove('disappear__menu-button');
})

closeButton.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('disappear__menu');
    menuButton.style.display = 'inline-block';
    closeButton.classList.add('disappear__menu-button');
})