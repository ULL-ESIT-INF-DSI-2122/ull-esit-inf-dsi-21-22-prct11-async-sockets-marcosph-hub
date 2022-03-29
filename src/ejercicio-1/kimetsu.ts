import { Fighter } from "./fighter";

/**
 * EJERCICIO 1.
 * @class KimetsuNoYaiba extiende de la clase abstracta Fighter, tiene las especificaciones correspondientes 
 * a los personajes del mundo anime de Kimetsu no Yaiba (cazadores de demonios)
 * @param nombre tiene el nombre del cazador de demonios (string)
 * @param respiracion es el poder que domina el cazador de demonios (string) que lleva una katana
 * @param estadisticas tiene un array del ataque, defensa, velocidad y daño máximo del personaje de Kimetsu no Yaiba (number [])
 */
export class KimetsuNoYaiba extends Fighter{
    
    constructor(nombre: string, protected respiracion: string, estadisticas: number []) {
        super(nombre, estadisticas);
    }

    /**
     * Getter del poder(respiración) del cazador de demonios
     * @returns respiración del cazador de demonios
     */
    public getRespiracion(){
        return this.respiracion;
    }
}