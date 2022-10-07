import { Futbolista } from "./claseFutbolista.js";
import { Persona } from "./clasePersona.js";
import { Masajista } from "./claseMasajista.js";
import { Entrenador } from "./claseEntrenador.js";

let jugadorA : Futbolista = new Futbolista ("Jorge", 0);
let jugadorB : Futbolista = new Futbolista ("Pablo", 1);
let jugadorC : Futbolista = new Futbolista ("Tomas", 2);
let jugadorD : Futbolista = new Futbolista ("Lorenzo", 3, 50000);
let jugadorE : Futbolista = new Futbolista ("Joaquin", 4, 50000);
let jugadorF : Futbolista = new Futbolista ("Pepe", 5, 50000);

let jugadores : Futbolista[] = [jugadorA, jugadorB, jugadorC, jugadorD, jugadorE, jugadorF];

let masajista1: Masajista = new Masajista ("Jorge", 6, [jugadorA, jugadorB, jugadorC]);
let masajista2: Masajista = new Masajista ("Teresa", 7, [jugadorD, jugadorE, jugadorF]);

let DT : Entrenador = new Entrenador ("Polero", 8, [jugadorB, jugadorC, jugadorD, jugadorE, jugadorF], [jugadorA], 20000);

console.log(jugadorA.getName());
console.log(jugadorA.getSueldo());
jugadorA.setGoles(1)
console.log(jugadorA.getSueldo());

console.log(masajista1.getGrupo());
masajista1.removeFutbolista(1)
console.log(masajista1.getGrupo());
console.log(masajista1.getSueldo());
masajista1.darBono()
console.log(masajista1.getSueldo());


console.log("mostrando valores originales")
console.log(DT.getTitulares());
console.log(DT.getSuplentes());
DT.gestionarTitulares();
console.log("mostrando valores modificados")
console.log(DT.getTitulares());
console.log(DT.getSuplentes());



