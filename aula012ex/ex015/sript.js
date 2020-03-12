function verificar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_usuario = document.getElementById('txtAno')
    var sexo_usuario = document.getElementsByName('radSex')
    var resposta = document.getElementById('resposta')
    var imagem = document.getElementById('imagem')

    resposta.style.textAlign = 'center'
    if (ano_usuario.value.length == 0 || ano_usuario.value > ano_atual) {
        window.alert('Verifique os Dados Novamente')
    } else {
        if (ano_atual-ano_usuario.value <= 12) {  //Crianças 
            if (sexo_usuario[0].checked) {
                resposta.innerHTML = `Um menino de ${ano_atual-ano_usuario.value} anos`
                document.body.style.background = '#223d48'
                imagem.src = 'img_menino.png'      
            } else {
                resposta.innerHTML = `Uma menina de ${ano_atual-ano_usuario.value} anos`
                document.body.style.background = '#d7d2d6'
                imagem.src = 'img_menina.png'
            }
        } else if (ano_atual-ano_usuario.value <= 25) {   //Jovens
            if (sexo_usuario[0].checked) {
                resposta.innerHTML = `Um rapaz de ${ano_atual-ano_usuario.value} anos`
                document.body.style.background = '#8a8a8a'
                imagem.src = 'img_garoto.png'
            } else {
                resposta.innerHTML = `Uma dama de ${ano_atual-ano_usuario.value} anos`
                document.body.style.background = '#2d3d4c'
                imagem.src = 'img_garota.png'
            }
        } else if (ano_atual-ano_usuario.value <= 60) { //Adulto
            if (sexo_usuario[0].checked) {
                resposta.innerHTML = `Um homem de ${ano_atual-ano_usuario.value} anos`
                document.body.style.background = '#8b6453'
                imagem.src = 'img_adulto.png'
            } else {
                resposta.innerHTML = `Uma mulher de ${ano_atual-ano_usuario.value} anos`
                document.body.style.background = '#9caaaa'
                imagem.src = 'img_adulta.png'
            }
        } else {    //Velhos
            if (sexo_usuario[0].checked) {
                resposta.innerHTML = `Um senhor de ${ano_atual-ano_usuario.value} anos`
                document.body.style.background = '#e5e5e5'
                imagem.src = 'img_velho.png'
            } else {
                resposta.innerHTML = `Uma senhora de ${ano_atual-ano_usuario.value} anos`
                document.body.style.background = '#ee9543'
                imagem.src = 'img_velha.png'
            }
        }  
    }
}