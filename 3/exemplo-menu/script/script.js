const menuButton = document.querySelector(".sidebar-menu__button")
const menuNav = document.querySelector(".sidebar-menu")

menuButton.addEventListener("click", function(evento){
    evento.preventDefault()
    if (menuNav.style.left === "-440px"){
        menuNav.style.left = "0px";
        menuNav.setAttribute("style","font-size:50px; font-style: italic; color:#ff0000;") // Para passar múltiplos atributos de estilo
    }else{
        menuNav.style.left = "-440px";
    }
})


//Naty Version:
//Conceito: Usou variável para mudar de par para impar e definir que a ação associada seja diferente a cada clique

// const menuButton = document.querySelector(".sidebar-menu__button")
// const menuNav = document.querySelector(".sidebar-menu")

// let counter = 1
// menuButton.addEventListener("click", function(evento){
//     evento.preventDefault()
    
//     menuNav.style.left = "-440px"
//     counter++
    
//     if (counter % 2 !== 0){
//         menuNav.style.left = "0px";
//     }
// })
