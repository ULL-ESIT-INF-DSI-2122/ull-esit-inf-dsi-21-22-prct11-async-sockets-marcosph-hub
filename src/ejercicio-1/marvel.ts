import { Fighter } from "./fighter";

/**
 * EJERCICIO 1.
 * @class Marvel extiende de la clase abstracta Fighter, tiene las especificaciones correspondientes 
 * a los personajes del mundo Marvel
 * @param nombre tiene el nombre del superhéroe (string)
 * @param superpoder tiene la habilidad del personaje (string)
 * @param debilidad tiene la debilidad del personaje (string)
 * @param estadisticas tiene un array del ataque, defensa, velocidad y daño máximo del personaje marvel (number [])
 */
export class Marvel extends Fighter{

    constructor(nombre: string, protected superpoder: string, protected debilidad: string, estadisticas: number []) {
        super(nombre, estadisticas);
    }

    /**
     * Getter del superpoder del superhéroe
     * @returns superpoder del superhéroe
     */
    public getSuperPoder(){
        return this.superpoder;
    }

    /**
     * Getter de la debilidad del superhéroe
     * @returns debilidad del superhéroe
     */
    public getDebilidad(){
        return this.debilidad;
    }

}