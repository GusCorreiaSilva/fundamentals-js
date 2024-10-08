//estruturas condicionais 

// const a = 3

// if (a > 8) {

//     return console.log('O numero é maior que 8!'); 

// } else {

//     return console.log('O numero é menor que 8!');

// }


const time = 'Vasco'

//else if 
if (time === 'Palmeiras') {

    console.log('O seu time é Palmeiras');

} else if (time === 'São Paulo') {

    console.log('O seu time é São Paulo');
    
} else if (time === 'Vasco') {

    console.log('O seu time é Vasco');
    
}
else {

    console.log('Não encontramos seu time no nosso banco de dados!');
    
}

//ternario
const age = 17

let adult = age >= 18 ? console.log('Você é de maior') : console.log('Você é de menor');

//expressão com and
let onlyGreater = age >= 18 && console.log('mostra site');

//abaixo de 4 = reprovado
//se a pessoa tirou de 4 a 5 = recuperação
//6 a 9 = aprovado
//10 = excelente

const nota = 6

if (nota === 10) {

    console.log('Excelente');
    
} else if (nota >= 6 && nota <= 9) {

    console.log('Aprovado');
    
}else if (nota >= 4 && nota <= 5) {

    console.log('Esta de recuperação');
    
} else {
    console.log('Reprovado');
    
}

//switch case

const fruit = 'Laranja'
switch(fruit) {

    case 'Laranja': return console.log('Você é de boas');
    case 'Morango': return console.log('Você é romantico');
    default: return console.log('Não temos o significado dessa fruta');
       
}

// switch(nota) {

//     case 10 : console.log('excelente');
//     case 6 && 9: console.log('Aprovado');
//     case 4 && 5: console.log('Recuperação');
//     default: console.log('reprovado');
       
// }