const projetosCriados = document.querySelectorAll('.container__codigo-area');

projetosCriados.forEach(codigo => {
    codigo.addEventListener('click', (e)=> {
        console.log(e);
    })
});