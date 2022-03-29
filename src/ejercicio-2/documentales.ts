/**
 * EJERCICIO 2 DSIFlix
 * @class Documentales contiene los documentales de la plataforma
 * @param nombre del documental
 * @param director del documental
 * @param generos del documental array de strings
 * @param anio de publicación
 */
 export class Documentales{
    constructor(protected nombre: string, protected director: string, protected generos: string[] = [], protected anio: number){}

    /**
     * Getter del nombre del documental
     * @returns nombre del documental
     */
    public getNombre(){
        return this.nombre;
    }

    /**
     * Getter del nombre del director del documental
     * @returns nombre del director del documental
     */
    public getDirector(){
        return this.director;
    }

    /**
     * Getter del género/s del documental
     * @returns género/s del documental
     */
    public getGenero(){
        for(let i: number = 0; i < this.generos.length; i++) {
            return this.generos;
        }
        return -1;
    }

    /**
     * Getter del año del documental
     * @returns año del documental
     */
    public getAnio(){
        return this.anio;
    }
}