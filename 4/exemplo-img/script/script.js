const links = document.querySelector(".gallery__nav")

// childNodes() = retorna todos os nós que estão abaixo da hierarquia
// children() = retorna apenas os filhos que são <tag>

for (let i=0;i<links.children.length;i++){
    links.children[i].addEventListener("click", function(){

        //Inserir a imagem na galeria        
        const img = this.dataset.image //dataset pega o atributo de data e espeificar o tipo de data que vc quer pegar 
        document.querySelector(".gallery__image").src = img;

        //Inserir a legenda na propriedade de texto
        const legenda = this.dataset.title 
        document.querySelector(".gallery__caption").textContent = legenda
    })
}

//Outra forma de escrever o for

// for (let baby of links.children){
//     baby.addEventListener("click", function(){
//         const img = this.dataset.image //dataset pega o atributo de data e espeificar o tipo de data que vc quer pegar 
//         document.querySelector(".gallery__image").src = img;
//     })
// }
