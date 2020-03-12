var agora = new Date();
var hora = agora.getHours();
//var minuto = agora.getMinutes();
//var segundo = agora.getSeconds();
var horario = `${hora}:${agora.getMinutes()}:${agora.getSeconds()}`

console.log(`Agora sao exatamente ${horario}`);
if (hora<12) console.log(`Bom dia!`);
else if (hora<=18) console.log(`Boa Tarde!`);
else console.log(`Boa Noite!`);