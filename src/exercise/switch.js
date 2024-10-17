// const age = 15

// switch(true) {
//     case age >= 18 && age <= 60:

//         console.log('Você pode beber!');
//     break

//     case age === 17:
//         console.log('Falta apenas um ano para você beber!');
        
//     default:
//         console.log('Você não pode beber!');
        
// }



// crie uma condição onde:

//nota 10 passou com excelencia
//nota 9 a 7 = passou
//nota 4 a 6 = recuperação
//nota 3 para baixo = reprovado


const nota = 10

switch(true) {
    case nota === 10:
        console.log('Passou com excelencia');

    break

    case nota <= 9 && nota >= 7:
        console.log('Passou');
        
    break

    case nota >= 4 && nota <= 6:
        console.log('Recuperação');
        
    break

    case nota >= 0 && nota <= 3:
        console.log('Reprovado');
        
    break

    default:
        console.log('Nota invalida');
        
}