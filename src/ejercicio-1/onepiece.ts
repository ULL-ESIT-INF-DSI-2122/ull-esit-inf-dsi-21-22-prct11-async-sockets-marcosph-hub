import { Fighter } from "./fighter";

/**
 * EJERCICIO 1.
 * @class OnePiece extiende de la clase abstracta Fighter, tiene las especificaciones correspondientes 
 * a los personajes del mundo anime de One Piece (son piratas)
 * @param nombre tiene el nombre del pirata (string)
 * @param fruta tiene la fruta del diablo que le da su habilidad al pirata(string)
 * @param habilidad tiene la habilidad del pirata (string)
 * @param estadisticas tiene un array del ataque, defensa, velocidad y daño máximo del pirata (number [])
 */
export class OnePiece extends Fighter{

    constructor(nombre: string, protected fruta: string, protected habilidad: string, estadisticas: number []) {
        super(nombre, estadisticas);
    }

    /**
     * Getter del nombre de la fruta que le otorga las habilidades del pirata 
     * @returns nombre de la fruta que le otorga las habilidades del pirata
     */
    public getFruta(){
        return this.fruta;
    }

    /**
     * Getter del nombre de la habilidad del pirata 
     * @returns nombre de la habilidad del pirata
     */
    public getHabilidad(){
        return this.habilidad;
    }
}