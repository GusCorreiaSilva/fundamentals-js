// Metodo length, conta caracteres.
const fullName = 'Lucas do Espirito Santo'
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
const transformToArray = fullName.split(' ')
// console.log(transformToArray);

const lastName = transformToArray[transformToArray.length -1]
console.log(lastName);
