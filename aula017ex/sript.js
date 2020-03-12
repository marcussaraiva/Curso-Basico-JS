function calcular(){
    let valor_usuario = document.querySelector('#iptNumero')
    let i = 1
    let tabela = document.querySelector('#tabela')
    //let tabela = document.querySelector('#componentes')
    
    if (valor_usuario.value.length==0) {
        alert('Favor digitar Numero')
    } else {
        valor_usuario = Number(valor_usuario.value)
        
        //tabela.innerHTML = ``

        for(;i<=10;i++){
            
            let nova_linha = tabela.appendChild(document.createElement('tr'))

            let coluna_escolhido = document.createElement('td')
            let coluna_indice = document.createElement('td')
            let coluna_resultado = document.createElement('td')

            coluna_escolhido.innerHTML = `${valor_usuario}`
            coluna_indice.innerHTML = `${i}`
            coluna_resultado.innerHTML = `${valor_usuario*i}`

            nova_linha.appendChild(coluna_escolhido)
            nova_linha.appendChild(coluna_indice)
            nova_linha.appendChild(coluna_resultado)

            
        }
    }
}