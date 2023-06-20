const botoes = document.querySelectorAll('#btnEditor');
const btnEditor = document.querySelector('.editor');
console.log(btnEditor);

btnEditor.addEventListener('click', ()=> {
    const zerarDados = {
        "nome": "",
        "codigo": "",
        "descricao": "",
        "cor": "",
        "linguagem": ""
    }

    localStorage.setItem("edicao", JSON.stringify(zerarDados));

})

botoes.forEach(botao => {
    botao.addEventListener('click', capturaPai)
});

function capturaPai (e){
    const codigoArea = e.target.parentNode.parentNode.parentNode.parentNode;
    let codigo = codigoArea.querySelector('code').innerText;
    let nome = codigoArea.querySelector('.apresentacao__titulo').innerText;
    let descricao = codigoArea.querySelector('.apresentacao__descricao').innerText;
    let cor = codigoArea.querySelector('.container__background').style.backgroundColor
    let linguagem = codigoArea.querySelector('#linguagem').value
    // console.log(codigo);
    // console.log(nome);
    // console.log(descricao);
    // console.log(cor);
    // console.log(linguagem);

    let dadosCodigo ={
        "nome": nome,
        "codigo": codigo,
        "descricao": descricao,
        "cor": cor,
        "linguagem": linguagem
    }

    localStorage.setItem("edicao", JSON.stringify(dadosCodigo));
    console.log(dadosCodigo);
}