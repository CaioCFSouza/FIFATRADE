let itens = JSON.parse(localStorage.getItem('filtroTrade')) || [];

function salvaInfoLocalStorage(qtd_jogador , compra , venda , investimento , desconto , resultado_formatado){
    //LocalStorage
    let itemAtual = {
        "qtd_jogador": qtd_jogador,
        "compra": compra,
        "venda": venda,
        "investimento": investimento,
        "desconto": desconto,
        "resultado_formatado": resultado_formatado,
    }
    itens.push(itemAtual);

    //Adicionando ao localStorage:
    localStorage.setItem('filtroTrade' , JSON.stringify(itens));
}

function carregaLocalStorage(){
    itens.forEach(function(elemento){
        montaTr(elemento.qtd_jogador , elemento.compra , elemento.venda , elemento.investimento , elemento.desconto , elemento.resultado_formatado);
        console.log(elemento.qtd_jogador);
    });
}
carregaLocalStorage();

