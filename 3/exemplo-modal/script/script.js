// Ler elementos do HTML
const loginButton = document.querySelector(".login__button")
const loginModal = document.querySelector(".login-modal")
const loginModalButtonSend = document.querySelector(".login-modal__button")
const loginModalButtonClose = document.querySelector(".login-modal__button-close")

//Botão de login e abrir 
loginButton.addEventListener("click",function(evento){
    evento.preventDefault();
    this.style.display = "none"; //Fazer botão de login sumir
    loginModal.style.display = "flex"
})

//Botão de fechar modal
loginModalButtonClose.addEventListener("click",function(evento){
    evento.preventDefault();
    loginModal.style.display = "none"; //Fazer botão de login sumir
    loginButton.style.display = "block";
})

//Botão de envio modal
loginModalButtonSend.addEventListener("click",function(evento){
    evento.preventDefault();
    loginModal.style.display = "none"; //Fazer botão de login sumir
    loginButton.style.display = "block";
})