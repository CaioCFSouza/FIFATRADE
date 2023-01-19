function mesangemDeErro(){
    let erro = document.querySelector('#ret');
    erro.classList.remove('invisivel')
    erro.classList.add('visivel');
}

function limpaErro(){
    let erro = document.querySelector('#ret');
    erro.classList.add('invisivel');
}