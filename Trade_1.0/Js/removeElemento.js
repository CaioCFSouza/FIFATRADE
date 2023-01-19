let tabela = document.querySelector('#carrega-trades')

tabela.addEventListener('dblclick' , function(event){
    event.target.parentNode.remove();
})