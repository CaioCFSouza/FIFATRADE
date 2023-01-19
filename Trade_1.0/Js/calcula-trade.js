function calculaTrade(){
    let qtd_jogador = form.qtd.value;
    let compra = form.compra.value;
    let venda = form.venda.value;
    
    let investimento = qtd_jogador * compra;//Calcula trade
    let desconto = ((venda * qtd_jogador) * 5)/100; //Desconto de 5% por venda
    let resultado = venda * qtd_jogador - investimento - desconto;//Lucro
    let resultado_formatado = resultado.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
        
    let lucro = form.lucro.value = resultado_formatado;//retorna lucro

    montaTr(qtd_jogador , compra , venda , investimento , desconto , resultado_formatado);
    salvaInfoLocalStorage(qtd_jogador , compra , venda , investimento , desconto , resultado_formatado);//Chama localstorage
    return;
}
