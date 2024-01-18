const burger=document.querySelector('.side-menu__mobile-burger');
const menu=document.querySelector('.side-menu__wrapper-list-user-info');

burger.addEventListener('click',()=>{

    menu.classList.toggle('hiddens')
    if (menu.classList.contains('hiddens')) {

        burger.style.backgroundImage = "url('./images/icons/Hamburger_icon.svg')";

    } else {

        burger.style.backgroundImage = "url('./images/icons/close.svg')";
    }
})