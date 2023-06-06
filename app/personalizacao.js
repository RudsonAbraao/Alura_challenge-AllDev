const inputCor = document.getElementById('corDeFundo');
const corDeFundo = document.querySelector('.container__background')
console.log(corDeFundo);

function mudarCor(){
    let cor = inputCor.value;
    corDeFundo.style.backgroundColor = cor;
}

inputCor.addEventListener('input', mudarCor)