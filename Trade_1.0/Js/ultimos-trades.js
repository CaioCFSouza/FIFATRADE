function montaTr(qtd_jogador , compra , venda , investimento , desconto , resultado_formatado){
    let carregaTrades = document.querySelector('#carrega-trades');

    //Montar tr
    let tabelaTr = document.createElement('tr');

    //Motar td
    let qtd_jogadorTd = document.createElement('td');
    let compraTd = document.createElement('td');
    let vendaTd = document.createElement('td');
    let investimentoTd = document.createElement('td');
    //let descontoTd = document.createElement('td');
    let resultado_formatadoTd = document.createElement('td');

    qtd_jogadorTd.textContent = qtd_jogador;
    compraTd.textContent = compra;
    vendaTd.textContent = venda;
    investimentoTd.textContent = investimento;
    //descontoTd.textContent = desconto;
    resultado_formatadoTd.textContent = resultado_formatado;
    
    //Adicionar tr tabela
    carregaTrades.appendChild(tabelaTr);

    //Adiciona td tr
    tabelaTr.appendChild(qtd_jogadorTd);
    tabelaTr.appendChild(compraTd);
    tabelaTr.appendChild(vendaTd);
    tabelaTr.appendChild(investimentoTd);
    //tabelaTr.appendChild(descontoTd);
    tabelaTr.appendChild(resultado_formatadoTd);

    let substring = '-';
    let validaResultado = resultado_formatadoTd.textContent.indexOf(substring) > - 1;
    if(validaResultado){
        tabelaTr.classList.add('tradeNegativo')
    }
    
    return;
}
