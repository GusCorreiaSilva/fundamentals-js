// function Saudacoes() {

//     return console.log('Olá, mundo!');
    
// }
// Saudacoes()

// function Somar(numOne, numTwo) {
//     return numOne + numTwo
// }

// console.log( Somar(10,53));

// function Multiplicar(numOne, numTwo) {
//     return numOne * numTwo
// }

// console.log( Multiplicar(6,3));


function Mediaquery() {
    const getWidthScreen = window.innerWidth

    if(getWidthScreen < 400){
        console.log('é mobile');
    } else if(getWidthScreen > 400 && getWidthScreen < 780) {
        console.log('é tablet');
        
    }else {
        console.log('é desktop');
        
    }
}


function Salve() {
    return console.log('Salve, sou uma função estática');
    
}

Salve()


function Saudacao() {
    return 'Ola mundo';
    
}
console.log(Saudacao());
