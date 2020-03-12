let vetor = [8,1,7,4,2,9]

for(let posiçao=0;posiçao<vetor.length;posiçao++) console.log(`Posição ${posiçao} valor ${vetor[posiçao]}`)

console.log("--------------------------------")

vetor.sort()        //Ordena
vetor.push(2)       //Adiciona
vetor.indexOf(7)    //Retora a posiçao do valor passado ou -1 (quando nao existente)

for (const pos in vetor) console.log(`Posição ${pos} valor ${vetor[pos]}`)
