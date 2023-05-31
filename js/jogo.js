let altura = 0
let largura = 0
let vidas = 1
let tempo = 30
let criaMosquitoTempo = 2000
let nivel = window.location.search
nivel = nivel.replace('?', '')
if (nivel === 'facil'){
    criaMosquitoTempo = 2000
}else if (nivel === 'normal'){
    criaMosquitoTempo = 1500
}
else if (nivel === 'dificil'){
    criaMosquitoTempo = 1000
}else if (nivel === 'lendario'){
    criaMosquitoTempo = 800
}


function ajustaJogo (){
    altura = window.innerHeight
    largura = window.innerWidth
    
}
ajustaJogo()
let cronometro = setInterval(function() {
    tempo -=1
    if (tempo < 0 ){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica(){
if (document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()
    if (vidas > 5 ) {
        window.location.href = 'fim_jogo.html'
        
    }else {
    document.getElementById('v'+ vidas).src="img/coracao_vazio.png"
    vidas ++
    }
}
    let posicaoX = Math.floor(Math.random() * largura) -100
    let posicaoY = Math.floor(Math.random() * altura) -100
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    

    let mosquito = document.createElement('img')
    mosquito.src = 'img/mosca.png'
    mosquito.className = TamanhoAleatorio() +' '+ ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito' 
    mosquito.onclick = function() {
        this.remove()
    }

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

function ladoAleatorio (){
    let classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}