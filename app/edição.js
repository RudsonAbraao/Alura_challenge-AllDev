const botoes = document.querySelectorAll('#btnEditor');

botoes.forEach(codigo => {
    codigo.addEventListener('click', capturaPai)
});

function capturaPai (e){
    let botao = e.target;
    let input = botao.parentNode;
    let back = input.parentNode;
    let codigoArea = back.parentNode;

    let codigo = codigoArea.querySelector('code').innerText;
    let nome = codigoArea.querySelector('.apresentacao__titulo').innerText;
    let descricao = codigoArea.querySelector('.apresentacao__descricao').innerText;
    let cor = codigoArea.querySelector('.container__background').style.backgroundColor
    let linguagem = codigoArea.querySelector('#linguagem').value
    console.log(codigo);
    console.log(nome);
    console.log(descricao);
    console.log(cor);
    console.log(linguagem);
}