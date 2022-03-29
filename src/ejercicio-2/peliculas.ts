/**
 * EJERCICIO 2 DSIFlix
 * @class Peliculas contiene las peliculas de la plataforma
 * @param nombre de la peliculas
 * @param director de la peliculas
 * @param actores de la peliculas
 * @param generos de la pelicula array de strings
 * @param anio de publicación
 */
 export class Peliculas{
    constructor(protected nombre: string, protected director: string, protected actores: string[] = [], protected generos: string[] = [], protected anio: number){}

    /**
     * Getter del nombre de la pelicula
     * @returns nombre de la pelicula
     */
    public getNombre(){
        return this.nombre;
    }

    /**
     * Getter del nombre del director de la pelicula
     * @returns nombre del director de la pelicula
     */
    public getDirector(){
        return this.director;
    }

    /**
     * Getter de los actores y actrices de la película
     * @returns actores y actrices de la película
     */
     public getActores(){
        for(let i: number = 0; i < this.actores.length; i++) {
            return this.actores;
        }
        return -1;
    }

    /**
     * Getter del género/s de la pelicula
     * @returns género/s de la pelicula
     */
    public getGenero(){
        for(let i: number = 0; i < this.generos.length; i++) {
            return this.generos;
        }
        return -1;
    }

    /**
     * Getter del año de la pelicula
     * @returns año de la pelicula
     */
    public getAnio(){
        return this.anio;
    }
}