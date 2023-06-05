const linguagem = document.querySelector('.personalizacao__linguagens');
const areaDoCodigo =  document.querySelector('.codigo');
const botao = document.querySelector('#btnHighlight');
console.log(areaDoCodigo.innerText);
console.log(areaDoCodigo.innerHTML);

function aplicaHighlight () {
    const codigo = areaDoCodigo.innerText;
    areaDoCodigo.innerHTML = `<code class = "preview hljs ${linguagem.value}" contenteditable="true" aria-label= "Editor de código"></code> `;
    areaDoCodigo.querySelector('code').textContent = codigo;
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
};

botao.addEventListener('click', ()=> {
    aplicaHighlight()
})