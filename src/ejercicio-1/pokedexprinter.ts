import { KimetsuNoYaiba } from "./kimetsu";
import { Marvel } from "./marvel";
import { OnePiece } from "./onepiece";
import { Pokedex } from "./pokedex";
import { Pokemon } from "./pokemon";

/**
 * EJERCICIO 1.
 * @class PokedexPrinter, tiene los luchadores impresos, respetando el principio Single responsibility principle
 * @param luchador tiene el array con los luchadores que lo componen tipo Pokeex
 */
export class PokedexPrinter{
    constructor(private pokedex: Pokedex) {
    }

    /**
     * Método print que imprime las características del luchador
     */
    print() {
        console.log('\n¡BIENVENIDO A TU POKEDEX!')
        for (let i: number = 1; i <= this.pokedex.getNumeroLuchadores(); i++) {
            console.log('\nLuchador número: '+i);
            console.log('\nNombre: '+this.pokedex.getLuchadores(i).getNombreLuchador());
            console.log('\nEstadísticas: Ataque: '+this.pokedex.getLuchadores(i).getAtaque()+', Defensa'+this.pokedex.getLuchadores(i).getDefensa()+', Velocidad: '+this.pokedex.getLuchadores(i).getVelocidad()+', HP: '+this.pokedex.getLuchadores(i).getHP());
        }
    }
}

let pokemon1 = new Pokemon('Flareon', 25, 0.9, 'Fuego', [130, 60, 65, 65]);
let marvel2 = new Marvel('Superman', 'Super fuerza', 'Criptonita', [75, 95, 113, 75]);
let zenitsu = new KimetsuNoYaiba('Zenitsu', 'Rayo', [112, 75, 143, 88]);
let luffy = new OnePiece('Monkey D. Luffy', 'Paramecia', 'Goma', [120, 100, 90, 100]);
let sanji = new OnePiece('Sanji', 'Ninguna', 'Patadas', [95, 67, 122, 72]);

let pokedex = new Pokedex([pokemon1, marvel2, zenitsu, luffy, sanji]);
let pokedex2 = new PokedexPrinter(pokedex);

pokedex2.print();