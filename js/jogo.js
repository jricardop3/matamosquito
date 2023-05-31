let altura = 0
let largura = 0
function ajustaJogo (){
    altura = window.innerHeight
    largura = window.innerWidth
    
}
ajustaJogo()

function posicaoRandomica(){
    let posicaoX = Math.floor(Math.random() * largura) -100
    let posicaoY = Math.floor(Math.random() * altura) -100
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    document.write (posicaoX,'<br>'+  posicaoY)

    let mosquito = document.createElement('img')
    mosquito.src = 'img/mosca.png'
    mosquito.className = TamanhoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
    TamanhoAleatorio()
}
function TamanhoAleatorio (){
    let classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return 'mosquito0'
        case 1:
            return 'mosquito1'
        case 2:
            return 'mosquito2'
    }
    
}