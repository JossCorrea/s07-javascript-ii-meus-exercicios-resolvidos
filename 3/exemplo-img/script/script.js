const links = document.querySelector(".gallery__nav")

// childNodes() = retorna todos os nós que estão abaixo da hierarquia
// children() = retorna apenas os filhos que são <tag>

for (let i=0;i<links.children.length;i++){
    links.children[i].addEventListener("click", function(){
        const img = this.dataset.image //dataset pega o atributo de data e espeificar o tipo de data que vc quer pegar 
        document.querySelector(".gallery__image").src = img;
    })
}

//Outra forma de escrever o for

// for (let nenem of links.children){
//     nenem.addEventListener("click", function(){
//         const img = this.dataset.image //dataset pega o atributo de data e espeificar o tipo de data que vc quer pegar 
//         document.querySelector(".gallery__image").src = img;
//     })
// }
