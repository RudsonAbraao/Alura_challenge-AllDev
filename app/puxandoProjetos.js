const areaProjetos = document.getElementById('projetos');
const projetos = JSON.parse(localStorage.getItem("projetos")) || [];
const codigos = document.querySelectorAll('.codgio');
console.log(projetos);
console.log(areaProjetos.innerHTML);

projetos.forEach(projeto => {
    criaProjeto(projeto)
});


function criaProjeto (projeto) {
    console.log();
    areaProjetos.innerHTML += `<div class="container__codigo-area">
    <div class="container__background" style = "background-color: ${projeto.cor}">
        <div class="container__input">
            <ul class="bolinhas">
                <li><img src="./img/bolinhas/vermelha.svg" alt=""></li>
                <li><img src="./img/bolinhas/amarela.svg" alt=""></li>
                <li><img src="./img/bolinhas/verde.svg" alt=""></li>
            </ul>
            <div class="codigo">
            <code class = "preview hljs ${projeto.linguagem}">
                ${projeto.codigo}
            </code> 
            </div>


        </div>
    </div>

    <div class="apresentacao-projeto">
        <h3 class="apresentacao__titulo">${projeto.nome}</h3>
        <p class="apresentacao__descricao">${projeto.descricao}</p>
    </div>

    <div class="social-projeto">
        <div class="interacoes">
            <ul class="interacoes__lista">
                <li class="interacoes__item">
                    <img src="./img/icone--comentario.svg" alt="comentarios">
                    <p>90</p>
                </li>
                <li class="interacoes__item">
                    <img src="./img/icone--coracao.svg" alt="curtidas">
                    <p>90</p>
                </li>
            </ul>
        </div>

        <div class="social-perfil">
            <img src="./img/foto.png" alt="foto do autor" class="social-perfil__foto">
            <p class="social-perfil__nome">@Rudson</p>
        </div>
    </div>
    
</div>`
}

function highlightAll(){
    const codigos = document.querySelectorAll('.preview')
    console.log(codigos);
    codigos.forEach(codigo => {
        hljs.highlightElement(codigo)
    });
}

highlightAll();

