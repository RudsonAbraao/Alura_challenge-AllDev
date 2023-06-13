const linguagem = document.querySelector('.personalizacao__linguagens');
const areaDoCodigo =  document.querySelector('.codigo');
const botao = document.querySelector('#btnHighlight');

const inputCor = document.getElementById('corDeFundo');
const corDeFundo = document.querySelector('.container__background');

const btnMenu = document.querySelector('.icone__menu');


function aplicaHighlight () {
    const codigo = areaDoCodigo.innerText;
    areaDoCodigo.innerHTML = `<code class = "preview hljs ${linguagem.value}" contenteditable="true" aria-label= "Editor de código"></code> `;
    areaDoCodigo.querySelector('code').textContent = codigo;
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
};

function mudarCor(){
    let cor = inputCor.value;
    corDeFundo.style.backgroundColor = cor;
}

inputCor.addEventListener('input', mudarCor);

btnMenu.addEventListener('click', ()=> {
    console.log('menu clicado');
})





export default linguagem;



