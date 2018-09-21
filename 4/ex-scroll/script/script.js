const seta = document.getElementById("arrowTop")
seta.addEventListener("click", function(){
    window.scrollTo(pageYOffset,0)//scrollTo = rolar para / os argumentos são (eixo, posição )
})


window.addEventListener("scroll",function(){
    console.log(pageYOffset)
    pageYOffset > 450 ? seta.hidden = false : seta.hidden = true
})