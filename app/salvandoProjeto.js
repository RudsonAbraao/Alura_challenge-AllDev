import linguagem from "./main.js";

const codigo = document.querySelector('.preview');
const nome = document.querySelector('.projeto__titulo--input');
const descricao = document.querySelector('.projeto__descricao');
// const linguagem = document.querySelector('.personalizacao__linguagens');
const cor = document.querySelector('.personalizacao__cores');
const btnSalvarProjeto = document.querySelector('.btn__salvarProjeto')
const projetos = JSON.parse(localStorage.getItem("projetos")) || [];

console.log('oi');


btnSalvarProjeto.addEventListener('click', ()=> {
    // const projetoAtual = {
    //     "codigo" : codigo.textContent
    // }
    
    console.log(codigo.textContent);
    console.log(nome.value);
    console.log(descricao.value);
    console.log(linguagem.value);
    console.log(cor.value);
    // projetos.push(projetoAtual);

    // localStorage.setItem("projetos", JSON.stringify(projetos));
});

