function carregar(){
    
    var msg = window.document.querySelector('div#msg');
    var img = window.document.getElementById('imagem')
    var hora = new Date();
    
    hora = hora.getHours();
    
    //hora = 1;
    //hora = 12;
    //hora = 22;

    
    if(hora == 0 || hora == 1) msg.innerHTML = `Agora são ${hora} hora.`;
    else msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora<12) {
        document.body.style.background = '#fea652';
        img.src='manhaRedondo.png';
    } else if(hora<18) {  
        document.body.style.background = '#9d665a';
        img.src='tardeRedondo.png';
    } else {
        document.body.style.background = '#071c20';
        img.src='noiteRedondo.png';
    }
}


