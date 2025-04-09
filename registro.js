const Persona = require('./persona'); // importa la clase desde persona.js

let personas=[];


function getRandomInt() {
    return Math.floor(Math.random() * 9080);
  }

console.log(getRandomInt());

const nue = new Persona("Carlos",40185815,35);
console.log(nue.name);



