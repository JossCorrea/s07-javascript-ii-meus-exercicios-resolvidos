//Ler a entrada de texto
const tweetTexto = document.getElementById("tweetComposerInput")


//Ler a botão de tweetar
const tweetButton = document.querySelector(".tweet-composer__button")


//Evento: Ao soltar a tecla do mouse (bloquear adicção de caracteres superior a 280)
tweetTexto.addEventListener("keyup", function(evento){
    let cont = 280 - tweetTexto.value.length
    const contador = document.getElementById("tweetComposerCounter")
    contador.innerHTML = cont
    
    // Deixar vermelho se cont<=15
    if(cont < 15){
        contador.style.color = "red"
    } else{ 
        contador.style.color = "#fff"
     }
    
    // Desabilitar botão quando cont<0
    if (cont < 0){
        tweetButton.disabled = true
    }else {
        tweetButton.disabled = false
    }

    // Método para desabilitar a inclusão de coisas se chegar a zero caracteres
    // if (cont == 0){
    //     evento.preventDefault()
    // }
})
// Nota: 
// evento keydown (lê quando vc pressiona a tecla)
// evento keyup (lê quando vc solta a tecla)


//Evento: Ao clicar o botão de Tweet

tweetButton.addEventListener("click",function(evento){
    evento.preventDefault()

    //Verificar se está vazio/nulo/undefined e não deixar twitar
    if (tweetTexto.value === " " || tweetTexto.value === null|| tweetTexto.value === ""|| tweetTexto.value === undefined){
        return false
    }
    
    //Ler a TimeLine
    const tweetTimeline = document.querySelector(".tweets-timeline")

    //Cria um elemento div 
    const tweetBox = document.createElement("div")
    
    //Gerar data de hoje
    const hoje = new Date();
    const dia = hoje.getDate();
    const mes = hoje.toLocaleString("pt-br",{month:"short"});
    
    //Outra forma de gerar data (myway)
    // const listaMeses=['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
    // const mes = listaMeses[hoje.getMonth()];      
   
    //Adicionar o conteúdo na div criada tweetBox
    tweetBox.innerHTML = `
    <div class="tweets-timeline__header">
        <span class="tweets-timeline__name">Jô</span>
        <span class="tweets-timeline__username">@joseline_cs</span>
        <span class="tweets-timeline__date">${dia} de ${mes}</span>
    </div>
        <p class="tweets-timeline__tweet">
            ${tweetTexto.value}
        </p>
    <div class="tweets-timeline__footer">
        <a href = "#" class= "tweets-timeline__button"> excluir tweet</a>
    </div>`

    //Insere o elemento antes dos outros na linha do tempo
    tweetTimeline.insertBefore(tweetBox, tweetTimeline.children[0])
    
    //Atribuir classe à nova div criada
    tweetTimeline.children[0].className = "tweets-timeline__box"

    //Acertar o estilo do contador 
    document.querySelector(".tweets-timeline__button").style.textDecoration = "none"
    document.querySelector(".tweets-timeline__button").style.color ="#808080"

    //Limpar a caixa de texto
    tweetTexto.value = null

    //Atualizar o valor original do contador
    document.getElementById("tweetComposerCounter").innerHTML = 280
    
    //Voltar a ficar branco depois que twita com o contador no vermelho
    document.getElementById("tweetComposerCounter").style.color = "#fff"

    //Inserir botão de exclusão
    const botaoExcluir = document.querySelector(".tweets-timeline__button")
    botaoExcluir.addEventListener("click",function(){
        tweetBox.remove();
    })
})

//Notas:
// // Obtém a data/hora atual
// var data = new Date();

// // Guarda cada pedaço em uma variável
// var dia     = data.getDate();           // 1-31
// var dia_sem = data.getDay();            // 0-6 (zero=domingo)
// var mes     = data.getMonth();          // 0-11 (zero=janeiro)
// var ano2    = data.getYear();           // 2 dígitos
// var ano4    = data.getFullYear();       // 4 dígitos
// var hora    = data.getHours();          // 0-23
// var min     = data.getMinutes();        // 0-59
// var seg     = data.getSeconds();        // 0-59
// var mseg    = data.getMilliseconds();   // 0-999
// var tz      = data.getTimezoneOffset(); // em minutos

// // Formata a data e a hora (note o mês + 1)
// var str_data = dia + '/' + (mes+1) + '/' + ano4;
// var str_hora = hora + ':' + min + ':' + seg;

// // Mostra o resultado
// alert('Hoje é ' + str_data + ' às ' + str_hora);