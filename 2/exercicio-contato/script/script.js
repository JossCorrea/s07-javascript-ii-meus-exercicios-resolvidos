//Leituta dos campos de dados do HTML
const inputNome = document.getElementById("contatoInputNome")
const inputEmail = document.getElementById("contatoInputEmail")
const inputPhone = document.getElementById("contatoInputPhone")
const inputMensage = document.getElementById("contatoInputMessage")

//Leitura do botão
const contatoButton = document.querySelector(".contato__button") 

//Ação do botão
contatoButton.addEventListener("click",function(evento){
    evento.preventDefault() 

    if (inputNome.value === undefined || inputNome.value === null || 
    inputNome.value === "" || inputNome.value === " "){
        inputNome.focus();
        return false;
    } else if(inputEmail.value === undefined || inputEmail.value === null || 
        inputEmail.value === "" || inputEmail.value === " " || inputEmail.value.includes("@")=== false){
        inputEmail.focus();
        return false;
    } else if(inputPhone.value.length < 13 || inputPhone.value === " "){
        inputPhone.focus();
        return false;
    } else if(inputMensage.value === undefined || inputMensage.value === null || 
        inputMensage.value === "" || inputMensage.value === " "){
            inputMensage.focus();
        return false;
    }else{
        alert("Acertou miseráver! Mensagem enviada com sucesso")
    }
})


