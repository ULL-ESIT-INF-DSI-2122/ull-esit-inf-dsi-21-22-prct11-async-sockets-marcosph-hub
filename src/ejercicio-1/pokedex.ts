import { Fighter } from "./fighter";

/**
 * EJERCICIO 1.
 * @class Pokedex, tiene los luchadores
 * @param luchador tiene el array con los luchadores que lo componen
 */
export class Pokedex{
    constructor(private luchadores: Fighter [] = []) {
    }

    /**
     * Getter de los luchadores de la Pokedex
     * @returns los luchadores
     */
    public getLuchadores(indice: number){
        return this.luchadores[indice];
    }

    /**
     * Getter de cuantos luchadores hay en la Pokedex
     * @returns el número de luchadores
     */
    public getNumeroLuchadores(){
        return this.luchadores.length;
    }
}

/**
 * Salidas por pantalla
 */
/*let pokemon1 = new Pokemon('Flareon', 25, 0.9, 'Fuego', [130, 60, 65, 65]);
let pokedex = new Pokedex([pokemon1]);

pokedex.setPokemons(pokemon1);
console.log(pokedex);
console.log(pokedex.getPokemons());*/