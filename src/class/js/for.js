//loop

// for (i = 0; i <= 5; i ++) {
   
//     console.log(i);

// }

// //Operador de adição
// let int = 1
//incremento pós
// console.log(int++, 'pós');
//incremento pré
// console.log(++int, 'pré');

//Operador de decremento
// let dec = 10
// //decremento pós
// console.log(dec--, 'pós');
//incremento pré
// console.log(--dec, 'pré');

// for (i = 1; i <= 20; i++) {
//     // console.log('chocolate');
    
//     if (i % 2 === 0) {  
//         console.log(i,'é par!');
        
//     } else {
//         console.log(i,'é impar!');
        
//     }
// }

let object = {
    nome: 'maria',
    age: 40
}

const array = []
const arrays = []
const products = [{
    name: 'camiseta',
    price: 25
}, {
    name: 'calça',
    price: 60
}, {
    name: 'chápeu',
    price: 15
}]

//percorre todos os obj da array
for (let product of products ) {
    console.log(product.name + ' custa ' + product.price + ' reais');
    
}

let total = 0
//soma todos os produtos para

for(let product of products) {
    total += product.price
}
console.log('A soma total dos produtos é: ' + total + ' reias');
