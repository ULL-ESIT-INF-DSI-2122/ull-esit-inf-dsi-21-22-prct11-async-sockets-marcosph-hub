import { GenerosMusicales } from "./generosMusicales";

/**
 * TRABAJO GRUPO L
 * @class Cancion contiene las especificaciones de las
 * distintas canciones
 * @param nombre nombre de la canción
 * @param autor nombre del autor de la canción 
 * @param duracion duración de la canción
 * @param genero tipo GenerosMusicales de la canción
 * @param single boolean si es single o no
 * @param numReproducciones número de reproducciones de la canción
 */
export class Cancion{
    /*private nombre: string;
    private autor: string;
    private duracion: number;
    private genero: GenerosMusicales;
    private single: boolean;
    private numReproducciones: number;*/
    constructor(private nombre: string, private autor: string, private duracion: number, 
    private genero: GenerosMusicales[], private single: boolean, private numReproducciones: number){
        genero.forEach(element => {
			element.setCanciones(this);
		});
    }

    /**
     * Getter del nombre de la canción
     * @returns nombre de la canción
     */
    getNombreCancion(){
        return this.nombre;
    }

    /**
     * Getter del autor de la canción
     * @returns autor de la canción
     */
    getAutorCancion(){
        return this.autor;
    }

    /**
     * Getter de la duración de la canción
     * @returns duración de la canción
     */
    getDuracionCancion(){
        return this.duracion;
    }
    getGenero(){
        return this.genero;
    }
    /**
     * Getter de los géneros musicales
     * @returns géneros musicales
     */
    getGeneroMusical(){
        let generos: string[] = [];
        this.genero.forEach(element => {
            generos.push(element.getNombreGenero());
        });
        return generos;
    }

    /**
     * Getter de si una canción es un single o no
     * @returns si es un single o no
     */
    getSingle(){
        return this.single;
    }

    /**
     * Getter número de reproducciones de una canción
     * @returns número de reproducciones de una canción
     */
    getNumReproducciones(){
        return this.numReproducciones;
    }

    /**
     * Setter del nombre de la canción
     * @param nombre de la canción
     */
    setNombreCancion(nombre: string){
        this.nombre = nombre;
    }

    /**
     * Setter del nombre del autor de la canción
     * @param autor de la canción
     */
    setAutorCancion(autor: string){
        this.autor = autor;
    }

    /**
     * Setter de la duración de la canción
     * @param duracion de la canción
     */
    setDuracionCancion(duracion: number){
        this.duracion = duracion;
    }

    /**
     * Setter de los géneros musicales
     * @param genero array de generos musicales
     */
    setGeneroMusical(genero: GenerosMusicales[]){
       this.genero = [];
        this.genero = genero;
    }

    /**
     * Setter de si la canción es un single o no
     * @param single o no
     */
    setSingle(single: boolean){
        this.single = single;
    }

    /**
     * Setter del número de reproducciones de una canción
     * @param reproducciones de una canción
     */
    setNumReproducciones(reproducciones: number){
        this.numReproducciones = reproducciones;
    }
}

/**
 * let hour = Math.floor(duracion / 3600);
 * let min = Math.floor(duracion / 60);
 * let secs = duracion - min * 60;
 * duracion = duracion - hour * 3600;
 */
