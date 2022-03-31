import { Cancion } from "./cancion";
import { Grupos } from "./grupos";
import { Album } from "./album";
import { GenerosMusicales } from "./generosMusicales";

/**
 * TRABAJO GRUPO L
 * @class Artistas contiene las especificaciones de los
 * distintos artistas
 * @param nombreArtista nombre del artista
 * @param grupos array de Grupos 
 * @param genero array de GenerosMusicales
 * @param albumes array de Album
 * @param canciones array de Cancion
 * @param oyentes número de oyentes 
 */
export class Artistas {
	private nombreArtista: string;
	private grupos: Grupos[];
	private generos: GenerosMusicales[];
	private albumes: Album[];
	private canciones: Cancion[];
	private oyentes: number;
	constructor(){}

	/**
	 * Getter del nombre del artista
	 * @returns nombre del artista
	 */
	getNombreArtista(){
		return this.nombreArtista;
	}

	/**
	 * Getter de los grupos del artista
	 * @returns grupos del artista
	 */
	getGrupos(){
		return this.grupos;
	}

	/**
	 * Getter de los géneros musicales 
	 * @returns géneros musicales
	 */
	getGeneros(){
		return this.generos;
	}

	/**
	 * Getter de los albumes del artista
	 * @returns albumes
	 */
	getAlbumes(){
		return this.albumes;
	}

	/**
	 * Getter de las canciones del artista
	 * @returns canciones del artista
	 */
	getCanciones(){
		return this.canciones;
	}

	/**
	 * Getter del número de oyentes del artista
	 * @returns oyentes del artista
	 */
	getOyentes(){
		return this.oyentes;
	}

	/**
	 * Setter del nombre del artista
	 * @param nombre del artista
	 */
	setNombreArtista(nombre: string){
		this.nombreArtista = nombre;
	}

	/**
	 * Setter de los grupos del artista
	 * @param grupo del artista
	 */
	setGrupos(grupo: Grupos){
		this.grupos.push(grupo);
	}

	/**
	 * Setter de los géneros musicales del artista
	 * @param genero musicales
	 */
	setGeneros(genero: GenerosMusicales){
		this.generos.push(genero);
	}

	/**
	 * Setter de las canciones del artista
	 * @param cancion del artista
	 */
	setCanciones(cancion: Cancion){
		this.canciones.push(cancion);
	}

	/**
	 * Setter de los oyentes 
	 * @param oyentes mensuales
	 */
	setOyentes(oyentes: number){
		this.oyentes = oyentes;
	}
}