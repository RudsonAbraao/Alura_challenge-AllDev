const btnMenu = document.querySelector('.icone__menu');
const menu = document.querySelector('.menu');
btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('menu__aberto')
    console.log('botao menu');
    menu.classList.toggle('ativo')
})