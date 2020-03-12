let vetor = []

function enviar(){

    let input_usuario = document.querySelector('#iptNumero')

    if (input_usuario.value.length==0) {
        alert('Insira um valor')
    } else if (Number(input_usuario.value)>100||Number(input_usuario.value)<1){
        alert('Insira Valores entre 1 e 100')
    } else {
        let tabela      = document.querySelector('#tabela')
        let nova_linha  = tabela.appendChild(document.createElement('tr'))
        input_usuario   = Number(input_usuario.value)

        if (verificar(input_usuario, vetor)==true) {
            alert('Valor já existente!')
        } else {
            vetor.push(input_usuario)
    
            let coluna_numero       = document.createElement('td')
            let coluna_status       = document.createElement('td')
            coluna_numero.innerHTML = `${input_usuario}`
            coluna_status.innerHTML = `Adicionado`
            nova_linha.appendChild(coluna_numero)
            nova_linha.appendChild(coluna_status)
            resposta.innerHTML = ``    
        }
    }
}

function verificar(valor_input, lista){
    if (lista.indexOf(valor_input)!=-1) {
        return true
    } else {
        return false
    }
}

function finalizar(){

    let resposta = document.querySelector('#resposta')
    let total_numeros   = vetor.length
    let maior_valor     = Math.max.apply(null, vetor)
    let menor_valor     = Math.min.apply(null, vetor)
    let somatorio       = 0
    for(const posiçao in vetor) somatorio += vetor[posiçao]  
    let media = somatorio/total_numeros

    if (vetor.length==0) {
        alert('Sem valores')
    } else { 
    
        resposta.innerHTML = `<p>Total de Numeros: ${total_numeros}</p>`
        resposta.innerHTML += `<p>Maior Valor: ${maior_valor}</p>`
        resposta.innerHTML += `<p>Menor Valor: ${menor_valor}</p>`
        resposta.innerHTML += `<p>Somatorio: ${somatorio}</p>`
        resposta.innerHTML += `<p>Media: ${media}</p>`
    }

}