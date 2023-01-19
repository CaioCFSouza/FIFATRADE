let form = document.querySelector('form');

form.calcular.addEventListener('click' , function(event){
    event.preventDefault();
    validaCampo()
})

function validaCampo(){
    let validaQtd = form.qtd.value;
    let validaCompra = form.compra.value;
    let validaVenda = form.venda.value;

    if(validaQtd == '' || validaCompra == '' || validaVenda == ''){
        mesangemDeErro();

    }else{
        limpaErro();
        calculaTrade();
    }
}