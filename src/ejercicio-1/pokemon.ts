import { Fighter } from "./fighter";

/**
 * EJERCICIO 1.
 * @class Pokemon extiende de la clase abstracta Fighter, tiene las especificaciones correspondientes a los pokemon
 * @param nombre tiene el nombre del pokemon (string)
 * @param peso tiene el peso del pokemon, Kg (number)
 * @param altura tiene la altura del pokemon, m (number)
 * @param tipo tiene el tipo de pokemon (string)
 * @param estadisticas tiene un array del ataque, defensa, velocidad y daño máximo del pokemon (number [])
 */
export class Pokemon extends Fighter{

    constructor(nombre: string, protected peso: number,
      protected altura: number, protected tipo: string, estadisticas: number []) {
        super(nombre, estadisticas);
    }

    /**
     * Getter del peso del pokemon
     * @returns peso del pokemon
     */
    public getPeso(){
        return this.peso;
    }

    /**
     * Getter de la altura del pokemon
     * @returns altura del pokemon
     */
    public getAltura(){
        return this.altura;
    }

    /**
     * Getter del tipo del pokemon
     * @returns tipo del pokemon
     */
    public getTipo(){
        return this.tipo;
    }

}


/**
 * Salidas por pantalla
 */
let pokemon1 = new Pokemon('Flareon', 25, 0.9, 'Fuego', [130, 60, 65, 65]);
console.log(pokemon1.getPeso());
console.log(pokemon1.getAltura());
console.log(pokemon1.getTipo());
console.log(pokemon1.getEstadisticas());