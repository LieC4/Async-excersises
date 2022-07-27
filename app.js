/*1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js.

2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io';*/

1.1

const agifyURL = "https://api.agify.io?name=michael";

const agifyInfo = fetch(agifyURL)
.then((response) => {
    return response.json();
})
.then((jsonn) => {
    console.log(jsonn);
});

2.1

const baseUrl = 'https://api.nationalize.io';


const input = document.querySelector("input");
const button = document.querySelector('button');



const getApi = async () =>{
    let api = await fetch(`https://api.nationalize.io/?name=${input.value}`);
    let convertToJson = await api.json();
    console.log(convertToJson)
    
}
button.addEventListener("click", getApi) ;


1.3


const mappedCharacters = async ((character)=>{
    console.log(character)

const cadena = character.results.country.map((element)=> {
return tienes un porcentaje de ${element.country_id} y una probabilidad de ${element.probability};

})


return Mi nombre es ${character.results.name} y mi procedencia es ${cadena.forEach(element => {
elemnt
})}
})






/*1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.

1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado.*/

1.3
const baseURL = 'https://api.nationalize.io';



/* Iteración #2: async-await */
//2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
//async-await.

/* const runTimeOut = async () => {
    const promise = await new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })
    promise.then(() => {console.log('Time out!')})
};
runTimeOut(); */

//2.2 Convierte la siguiente función con un fetch utilizando async-await. 
//Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;

/* const getCharacters2 = async () => {
    fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
}
getCharacters(); */


const data = () =>{
    const value = input.value;
    let peticion = baseUrl + '/?name=' + value;
    searchApi( peticion );
}

const searchApi = async( url ) => {
    let peticion = await fetch( url );
    let convertToJson = await peticion.json();
    let convertCountries = convertToJson.country;
    let convertName = convertToJson.name;
    mapData( convertCountries, convertName );
}

const mapData = (data, name) => {
    console.log( `El nombre ${name} es comun en los paises con las siguientes probabilidades:` );
    console.log( data.map( value => {
        return ({
            pais: value.country_id,
            probabilidad: (parseInt(value.probability * 100)) + '%'
        })
    } ));
}