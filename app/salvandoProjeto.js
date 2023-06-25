// import linguagem from "./main.js";

const listaProjetos = document.getElementById("projetos");
const codigo = document.querySelector('.preview');
const nome = document.querySelector('.projeto__titulo--input');
const descricao = document.querySelector('.projeto__descricao');
const linguagem = document.querySelector('.personalizacao__linguagens')
const cor = document.querySelector('.personalizacao__cores');
const btnSalvarProjeto = document.querySelector('.btn__salvarProjeto')
const projetos = JSON.parse(localStorage.getItem("projetos")) || [];
const id =JSON.parse(localStorage.getItem("edicao")).id;

console.log('oi');
console.log(projetos);


btnSalvarProjeto.addEventListener('click', () => {

    const itemAtual = {
        "codigo": codigo.textContent,
        "nome": nome.value,
        "descricao": descricao.value,
        "linguagem": linguagem.value,
        "cor": cor.value,
    }


    console.log(id);

    // criaId(itemAtual);

    if(id){
        console.log('id existe');
        atualizaProjeto();
    }else {
        console.log('id não existe');
        itemAtual.id = projetos[projetos.length-1]?(projetos[projetos.length-1]).id + 1 : 0;

        projetos.push(itemAtual);

        localStorage.setItem("projetos", JSON.stringify(projetos));

    }

    



    // console.log(codigo.textContent);
    // console.log(nome.value);
    // console.log(descricao.value);
    // console.log(linguagem.value);
    // console.log(cor.value);
});

// function criaId (projetoAtual) {
//     console.log(projetoAtual);
//     if(projetoAtual.id){
//         console.log('id existe');
//         console.log(projetos);
//         atualizaProjeto();
//     }else {
//         console.log('id não existe');
//         projetoAtual.id = projetos[projetos.length-1]?(projetos[projetos.length-1]).id + 1 : 0;

//     }
// }

console.log(listaProjetos);


function atualizaProjeto (){
    console.log(projetos);
    console.log(id);
    let projetoSendoEditado = projetos.find(projeto => projeto.id == id)
    console.log(projetoSendoEditado.codigo);

    projetoSendoEditado.codigo = codigo.textContent;
    projetoSendoEditado.nome = nome.value;
    projetoSendoEditado.descricao = descricao.value;
    projetoSendoEditado.linguagem = linguagem.value;
    projetoSendoEditado.cor = cor.value;
    projetoSendoEditado.id = id;

    // "codigo": codigo.textContent,
    // "nome": nome.value,
    // "descricao": descricao.value,
    // "linguagem": linguagem.value,
    // "cor": cor.value,




    console.log(projetoSendoEditado);

    // projetos.push(projetoSendoEditado);

    localStorage.setItem("projetos", JSON.stringify(projetos));
}

