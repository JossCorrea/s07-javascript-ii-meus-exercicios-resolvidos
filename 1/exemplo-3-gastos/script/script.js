const transacaoButton = document.querySelector(".transacao__button")
transacaoButton.addEventListener("click",function(evento){
    evento.preventDefault()
    const extratoTable = document.querySelector(".extrato__table")
    
    //Criar linhas
    const lineTable=document.createElement("tr")
    
    //Criar colunas 
    const transacaoColuna = document.createElement("td")
    const valorColuna = document.createElement("td")
    const dataColuna = document.createElement("td")
    
    //Inserir colunas na linha
    lineTable.appendChild(transacaoColuna)
    lineTable.appendChild(valorColuna)
    lineTable.appendChild(dataColuna)
    
    
    // Ler os valores que entrarão nas colunas
    const transacao = document.getElementById("transacaoInputName")
    const valor = document.getElementById("transacaoInputMoney")
    const data = document.getElementById("transacaoInputDate")
    
    //Inserir os textos nas colunas
    const transacaoColunaTexto = document.createTextNode(transacao.value)
    const valorColunaTexto = document.createTextNode(valor.value)
    const dataColunaTexto = document.createTextNode(data.value)
    
    //Inserir valores nas colunas
    transacaoColuna.appendChild(transacaoColunaTexto)
    valorColuna.appendChild(valorColunaTexto)
    dataColuna.appendChild(dataColunaTexto)
    
    //Inserir linha com os valores nas respectivas colunas
    extratoTable.appendChild(lineTable)
})

//Nat fez um negócio diferente , dá uma olhada no git dela