// const  titulo = document.getElementById("formTitle") //Usando o id como seletor
// const  titulo2 = document.querySelector(".news__title") //Selecionando a classe (se não colocar nada ele acha que é tag, com . é classe e # é id)
// console.log(titulo)
// console.log(titulo2)
// alert (titulo)

// const input = document.getElementById("newsInputEmail")
// const botao = document.querySelector(".news__button")

// botao.addEventListener("click",function(evento){ //Função anônima
//     evento.preventDefault(); //Prevenir que ele execute o evento padrão que é submeter (e jogar para o céu)
//     const email=input.value;
//     alert(`O email ${email} cadastrado com sucesso`);
// })

// ou

// const botao = document.querySelector(".news__button")

// botao.addEventListener("click",function(evento){ //Função anônima
//     evento.preventDefault(); //Prevenir que ele execute o evento padrão que é submeter (e jogar para o céu)
//     const email = document.getElementById("newsInputEmail").value;
//     alert(`O email ${email} cadastrado com sucesso`);
// })


// Para adicionar uma resposta na tela ao clicar
const input = document.getElementById("newsInputEmail")
const botao = document.querySelector(".news__button")

botao.addEventListener("click",function(evento){ //Função anônima
    evento.preventDefault(); //função para impedir que ele execute o submit
    const resposta = document.createElement("span") // createElement = cria novos elementos
    const respostaMensagem = document.createTextNode(`O email cadastrado com sucesso`) // createTextNode = cria nós de texto
    resposta.appendChild(respostaMensagem) //appendChild = insere  item dentro de um elemento
    const newsForm = document.querySelector(".news__form")
    newsForm.insertBefore(resposta , newsForm.childNodes[0]) //insertBefore = insere  item em um elemento antes de um item estabelecido
})