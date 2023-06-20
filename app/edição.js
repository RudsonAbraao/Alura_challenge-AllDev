const botoes = document.querySelectorAll('#btnEditor');

botoes.forEach(botao => {
    botao.addEventListener('click', capturaPai)
});

function capturaPai (e){
    console.log(e.target.parentNode.parentNode.parentNode.parentNode);
    // let botao = e.target;
    // let input = botao.parentNode;
    // let back = input.parentNode;
    let codigoArea = e.target.parentNode.parentNode.parentNode.parentNode;

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