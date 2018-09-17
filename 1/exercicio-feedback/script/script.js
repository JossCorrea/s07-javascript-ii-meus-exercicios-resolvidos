const feedbackButton = document.querySelector(".feedback__button")

feedbackButton.addEventListener("click",function(evento){
    evento.preventDefault()

    //Ler a mensagem
    const msg = document.getElementById("feedbackInputMessage")
    

    //Ler elemento que receberá as msg
    const historico = document.querySelector(".testimonials")

    //Criar histórico de mensagens
    const historicoLinha = document.createElement("p") // Cria nó paragrafo
    const historicoTexto = document.createTextNode(msg.value) // Cria nó texto do parágrafo
    historicoLinha.appendChild(historicoTexto) // Vincula texto ao parágrafo

    //Coloca a linha no histórico
    historico.appendChild(historicoLinha)
})

    