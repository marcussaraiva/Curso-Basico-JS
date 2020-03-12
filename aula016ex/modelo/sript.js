function contar(){

    let inicio_usuario  = document.getElementById('inputInicio')
    let fim_usuario     = document.getElementById('inputFim')
    let passo_usuario   = document.getElementById('inputPasso')
    let resposta        = document.querySelector('div#resposta')

    if (inicio_usuario.value.length == 0 || fim_usuario.value.length == 0 || passo_usuario.value.length == 0) {
        window.alert('Insira os valores')
    } else {
        
        inicio_usuario  = Number(inicio_usuario.value)
        fim_usuario     = Number(fim_usuario.value)
        passo_usuario   = Number(passo_usuario.value)
        
        resposta.innerHTML = `Contando: `
        if(passo_usuario<=0) passo_usuario=1
        if (inicio_usuario < fim_usuario) {
            for(let i = inicio_usuario;i<=fim_usuario;i+=passo_usuario)   resposta.innerHTML += `${i} | `     
        } else {
            for(let i = inicio_usuario;i>=fim_usuario;i-=passo_usuario)   resposta.innerHTML += `${i} | `     
        }
        
        resposta.innerHTML += `Fim!`
    }

}