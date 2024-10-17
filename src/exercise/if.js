// const age = 17

// if(age >= 18 && age <= 60) {
//     return console.log('Você é de maior!')

// }else if (age === 17) {
//     return console.log('Falta apenas um ano para você beber!')

// } else {
//     return console.error('Você não pode beber')   
// }


// crie uma condição onde:

//nota 10 passou com excelencia
//nota 9 a 7 = passou
//nota 4 a 6 = recuperação
//nota 3 para baixo = reprovado


const nota = 8

if (nota === 10) {
    return console.log('Passou com excelencia');

}if (nota >= 7 && nota <= 9 ) {
    return console.log('Passou');
    
}else if (nota >= 4 && nota <= 6) {
    return console.log('Recuperação');
    
}else {
    return console.log('Reprovado');
    
}

