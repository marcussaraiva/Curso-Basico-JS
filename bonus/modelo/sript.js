
let resposta = document.getElementById('resposta')
let imagem = document.getElementById('imagem')

function cancelar(){
    
    let nome_usuario = String(document.getElementById('txtnome').value)
    let valor_aleatorio = Math.floor(Math.random()*(8-1)+1)

    switch(valor_aleatorio){
        case 1: resposta.innerHTML = `${nome_usuario} está sendo cancelado(a) por ser <strong>TÓXICO</strong>!`
            imagem.src = 'img_petrix.png'
            break;
        case 2: resposta.innerHTML = `${nome_usuario} está sendo cancelado(a) por ser <strong>O CHATO DA COMIDA</strong>!`
            imagem.src = 'img_babu.png'
            break;
        case 3: resposta.innerHTML = `${nome_usuario} está sendo cancelado(a) por ser <strong>MANIPULADOR</strong>!`
            imagem.src = 'img_pyong.png'
            break;
        case 4: resposta.innerHTML = `${nome_usuario} está sendo cancelado(a) por ser <strong>AMIGA TRAIDORA</strong>!`
            imagem.src = 'img_marcella.png'
            break;
        case 5: resposta.innerHTML = `${nome_usuario} está sendo cancelado(a) por ser <strong>SEM NOÇÃO</strong>!`
            imagem.src = 'img_daniel.png'
            break;
        case 6: resposta.innerHTML = `${nome_usuario} está sendo cancelado(a) por ser <strong>ESQUENTADINHO</strong>!`
            imagem.src = 'img_prior.png'
            break;
        case 7: resposta.innerHTML = `${nome_usuario} está sendo cancelado(a) por ser <strong>VITOR HUGO</strong> opa, rsrs!`
            imagem.src = 'img_planta.png'
            break;
    }

}