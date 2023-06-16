// import linguagem from "./main.js";

const listaProjetos = document.getElementById("projetos");
const codigo = document.querySelector('.preview');
const nome = document.querySelector('.projeto__titulo--input');
const descricao = document.querySelector('.projeto__descricao');
const linguagem = document.querySelector('.personalizacao__linguagens')
const cor = document.querySelector('.personalizacao__cores');
const btnSalvarProjeto = document.querySelector('.btn__salvarProjeto')
const projetos = JSON.parse(localStorage.getItem("projetos")) || [];

console.log('oi');


btnSalvarProjeto.addEventListener('click', () => {

    const itemAtual = {
        "codigo": codigo.textContent,
        "nome": nome.value,
        "descricao": descricao.value,
        "linguagem": linguagem.value,
        "cor": cor.value
    }

    projetos.push(itemAtual);

    localStorage.setItem("projetos", JSON.stringify(projetos));



    console.log(codigo.textContent);
    console.log(nome.value);
    console.log(descricao.value);
    console.log(linguagem.value);
    console.log(cor.value);
});

function criaProjeto () {

}

console.log(listaProjetos);

