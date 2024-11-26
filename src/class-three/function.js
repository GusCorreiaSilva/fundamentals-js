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


// function Mediaquery() {
//     const getWidthScreen = window.innerWidth

//     if(getWidthScreen < 400){
//         console.log('é mobile');
//     } else if(getWidthScreen > 400 && getWidthScreen < 780) {
//         console.log('é tablet');
        
//     }else {
//         console.log('é desktop');
        
//     }
// }

//função estatica
// function Soma() {
//     return 2+2 
// }
// console.log(Soma());

//função dinamica
// function DynaSoma(a, b){
//     return a + b
// }
// console.log(DynaSoma(10, 300));

// function Salve() {
//     return console.log('Salve, sou uma função estática');
    
// }

// Salve()


// function Saudacao() {
//     return 'Ola mundo';
    
// }
// console.log(Saudacao());


//1 criar função que mostra quando numero é par ou impar
// function Number(n) {
//     if(n % 2 !== 0) {
//         return `${n} Esse número é impar`;
        
//     }else {
//         return `${n} Esse número é par`;
        
//     }
// } 

// console.log(Number(8));


// function ShortName(fullName) {
//     const splitName = fullName.split(' ')
//     const [firstName, ...rest] = splitName
//     const lastName = rest[rest.length -1]

//     return console.log(`${firstName} ${lastName}`);
    
// }
// ShortName('Maria Jose dos Santos')


// const Name = 'Gustavo Correia da silva'
// const transform = Name.split(' ')

// const [first, ...rest] = transform
// console.log(transform);
// console.log(first);
// console.log(rest);

//2 Se a função receber true ela retorna yes e se for falso retorna no

function Boolean(b) {
   return b ? 'Yes' : 'No';
    
}
console.log(Boolean(1));

// função anonimas
const exempleAnonimo = function() {
    console.log('sou uma fução anonima');
    
}
exempleAnonimo()

