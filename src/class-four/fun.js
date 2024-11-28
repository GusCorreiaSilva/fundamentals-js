// Metodo length, conta caracteres.
// const fullName = 'Lucas do Espirito Santo'
// console.log(fullName.length, 'conta caracteres');

// const fruits = ['maçã', 'pera', 'uva', 'pessego']
// console.log(fruits.length, 'array');
// console.log(fruits[fruits.length -1]);

//usar para olhar array
// console.table(fruits)

//ele vai cortar os caracteres   
// const cortaNome = fullName.slice(1,4)
// console.log(cortaNome);

//split corta transformando em array
// const transformToArray = fullName.split(' ')
// console.log(transformToArray);

// const lastName = transformToArray[transformToArray.length -1]
// console.log(lastName);

//função que pegue o primeiro nome e da ola

// function FirstName(array) {
//     if(array.length <= 0) {
//         return console.error(`Coloque um nome valido`)
//     }
//     return `Olá ${array.split(' ')[0]}, seja bem vindo`
// }
// console.log(FirstName(''));

function CalcularImc(peso, altura) {
      
     let imc = peso / (altura * altura)
     if (imc < 18.5) {
        console.log('Abaixo do peso normal');
         
     }  else if(imc >= 18.5 && imc <= 24.99) {
        console.log('Peso normal');
        
     } else if ( imc > 25 && imc <= 29.99){
        console.log('Acima do peso');
     }
}
console.log(CalcularImc(59, 1.78).toFixed(1));