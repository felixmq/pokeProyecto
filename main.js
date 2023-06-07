// Agarramos los elementos en constante para poder manipularlos
const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'
const searchPoke = document.getElementById('searchPoke');
const btnSearch = document.getElementById('btnSearch');
const screenPoke= document.querySelector('.screenPoke');
const screenPoke2 = document.querySelector('.screenPoke2');

// Creamos una function asincrona para poder hacer nuestras peticiones a la API

function showError(msg){
    screenPoke.innerHTML = `<p>${msg}</p>`
}

async function searcPokemon() {


 // El valor del input le aplicamos un toLowerCase para que siempre sea en minuscula nuestra peticion y consumir la API   
    const searchPkm = searchPoke.value.toLowerCase();

    try{

        const response = await fetch(pokeUrl + searchPkm)
        const datos = await response.json();
        

// SISTEMA DE VALIDACION DE LA API SI CONLOCAN UN POKEMON QUE NO EXISTE NO SE ESTARA EJECUNTANDO LA FUNCION 
        if(!response.ok){
            showError('No se encuentra este pokemon');
        }

// SI EL POKEMON EXISTE SE ESTARA EJECURANDO LA SIGUIETES FUNCIONES EN LA CUAL SE ESTARAN CREANDO DIV PARA QUE SEA PRENSETADO LO SOLICITADO
            screenPoke.innerHTML =
            `<div class="img">
             <img src="${datos.sprites.front_default}" alt="#">
            </div>
            <h2 class="name">${datos.name}</h2>
            `
    
            screenPoke2.innerHTML =
            `
            <h2>Type: ${datos.types[0].type.name}</h2>
            <h3>Abilities</h3>
            <ul>
                <li>${datos.abilities[0].ability.name}</li>
                <li>${datos.abilities[1].ability.name}</li>
            </ul>
            <h3>Moves</h3>
            <ul>
            <li>${datos.moves[0].move.name}</li>
            <li>${datos.moves[1].move.name}</li>
            <li>${datos.moves[2].move.name}</li>
            <li>${datos.moves[3].move.name}</li>
            </ul>`
    
            console.log(datos)
        

    }catch (error){
        console.error(error);
        showError('ha ocurrido un error con el pokemon')
    }
} 

btnSearch.addEventListener("click",searcPokemon)

