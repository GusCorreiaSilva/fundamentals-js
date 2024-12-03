// fetch('https://viacep.com.br/ws/01001000/json/')
//     .then(response => {
//         return response.json();
        
//     })
//     .then(data => {
//         return console.log(data);
        
//     })
//     .catch(error => console.error('Error', error))


// function getCEP(cep) {
//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error', error))
// }

// getCEP('00')

function getPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) =>  {
        const {name, sprites, weight  } = data
        const div = document.getElementsByClassName('pokemon-info')

        div.innerHTML = `
        <h2>${name}</h2>
        <img src="${sprites.front_default}" alt="">
        <p>${weight}</p>
        `

       
    })
        
    .catch((error) => console.error('O erro é:', error))
}

getPokemon('snorlax') 





// function getPokemon(pokemon) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error('O erro é:', err))
// }

// getPokemon('ditto')