const botao = document.querySelector(".login__button") ;

botao.addEventListener("click", function(evento){
    evento.preventDefault();
    const email = document.getElementById("loginInputEmail").value;
    const senha = document.querySelector("#loginInputPassword").value;
    // alert(`O acesso do usuário ${email} foi realizado com sucesso!`)
    const loginform =document.querySelector(".login__form")
    loginform.innerHTML=`O acesso do usuário ${email} foi realizado com sucesso!`
})

