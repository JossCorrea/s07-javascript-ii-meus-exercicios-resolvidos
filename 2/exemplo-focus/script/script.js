// 1 - Pegar todos os inputs
const inputNome = document.getElementById("cadastroInputNome")
const inputEmail = document.getElementById("cadastroInputEmail")
const inputEmailConfirm = document.getElementById("cadastroInputEmailConfirm")
const inputPassword = document.getElementById("cadastroInputPassword")
const inputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm")
const inputPhone = document.getElementById("cadastroInputPhone")
const inputArea = document.getElementById("cadastroInputArea")
const inputLevel = document.getElementsByName("level")
const inputNews = document.getElementById("cadastroInputNews")

//Lê a variável correspondente ao fundo
const fundo = document.querySelector("body")

const cadastroButton = document.querySelector(".cadastro__button")

cadastroButton.addEventListener("click",function(evento){
    evento.preventDefault();

    // 7 - dependando do nível escreve no console
    //     junior: 0 - 2 anos de experiência;
    //     pleno: 2 - 5 anos de experiência;
    //     senior 5+ anos de experiência;
   
    let levelSelect
    for (i=0; i < inputLevel.length ; i++){ 
        if (inputLevel[i].checked === true){
            levelSelect = inputLevel[i].value
        }
    }
    
    switch(levelSelect){
        case "Junior":
            console.log("junior: 0 - 2 anos de experiência")
            break;
        case "Pleno":
            console.log("pleno: 2 - 5 anos de experiência")
            break;
        case "Senior":
            console.log("senior: 5+ anos de experiência")
            break;
    }
    
    // 8 - Se news não estiver checkado exibir um alerta escrito: É uma pena que você não deseja receber nosso conteúdo exclusivo :c
    //Mostra se está checado ou não
    if (inputNews.checked === false){
    alert("É uma pena que você não deseja receber nosso conteúdo exclusivo :(")
    }
// 2 -  Verificar se os inputs estão vazios, ou undefineds
    const campos=[
        inputNome, 
        inputEmail, 
        inputEmailConfirm, 
        inputPassword,
        inputPasswordConfirm,
        inputPhone
    ];
    for (let elemento in campos){
        if (campos[elemento].value === "" || 
        campos[elemento].value === undefined || 
        campos[elemento].value === null){
            campos[elemento].focus()
            return false
        }
    }
    fundo.style.backgroundColor = "#fff"; //Para o formulário voltar a ficar branco ao submeter
    const form = this.closest("form") //Procura o formulário mais próximo do elemento imediatamente anterior
    form.submit();
    alert("Formulário enviado com sucesso! ;)")
})

// 3 - Verificar se os emails são os mesmos
inputEmailConfirm.addEventListener("change", function(){
    if (inputEmail.value !== inputEmailConfirm.value){
        alert("A confirmação do email não corresponde ao email informado")
        inputEmailConfirm.focus()
        return false
    }
})

// 4 - Verificar se a senha é a mesma
inputPasswordConfirm.addEventListener("change", function(){
    if (inputPassword.value !== inputPasswordConfirm.value){
        alert("As senhas informadas não são iguais")
        inputPasswordConfirm.focus()
        return false
    }
})
// 5 - Senha tem que ter mais que 7 digitos
inputPassword.addEventListener("change", function(){
    if (inputPassword.value.length <= 7){
        alert("A senha deve ter mais que sete dígitos")
        inputPassword.focus()
        return false
    }
})

// 6 - O fundo muda de cor de acordo com a área
//     front end azul
//     back verde
//     ux rosa
//     ui laranja
inputArea.addEventListener("change", function(){
//Lê a opção selecionada (mostra a opção selecionada se você colocar .value)
const optionSelect = inputArea.options[inputArea.selectedIndex]

//Muda a cor do fundo
switch (inputArea.selectedIndex){
    case 0:
        fundo.style.backgroundColor = "#ADD8E6";
        break;
    case 1:
        fundo.style.backgroundColor = "#66CDAA";
        break;
    case 2:
        fundo.style.backgroundColor = "#FFB6C1";
        break;
    case 3:
        fundo.style.backgroundColor = "#FFDAB9";
        break;
    }   
})

// fundo.style.backgroundColor = "#fff"; //Para o formulário voltar a ficar branco ao submeter
// this.closest(".cadastro").style.backgroundColor="black";
// const form = this.closest("form") //Procura o formulário mais próximo
// // form.sumit();