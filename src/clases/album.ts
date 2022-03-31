import { Cancion } from "./cancion";
import { Grupos } from "./grupos";
import { Artistas } from "./artistas";
import { GenerosMusicales } from "./generosMusicales";

/**
 * TRABAJO GRUPO L
 * @class Album contiene las especificaciones de los
 * distintos álbumes
 * @param nombreAlbum del album
 * @param grupos array de Grupos 
 * @param artistas array de Artistas
 * @param genero array de GenerosMusicales
 * @param yearPublicacion año de publicación del album
 * @param canciones array de Cancion
 */
export class Album {
  	private nombreAlbum: string;
	private grupos: Grupos[];
	private artistas: Artistas[];
	private genero: GenerosMusicales[]
	private yearPublicacion: number;
	private canciones: Cancion[];
	constructor(){}
	/**
	 * Getter del nombre del album
	 * @returns nombre del album
	 */
	getNombreAlbum(){
		return this.nombreAlbum;
	}

	/**
	 * Getter de los grupos del album
	 * @returns nombre de los grupos
	 */
	getGrupos(){
		return this.grupos;
	}

	/**
	 * Getter del nombre de los artistas del album
	 * @returns nombre de los artistas
	 */
	getArtistas(){
		return this.artistas;
	}

	/**
	 * Getter de los géneros musicales del album
	 * @returns géneros musicales del album
	 */
	getGenero(){
		return this.genero;
	}

	/**
	 * Getter del año de publicación del album
	 * @returns año de publicación
	 */
	getYear(){
		return this.yearPublicacion;
	}

	/**
	 * Getter del nombre de las canciones del album
	 * @returns nombre de las canciones
	 */
	getCanciones(){
		return this.canciones;
	}

	/**
	 * Setter del nombre del album
	 * @param nombre del album
	 */
	setNombreAlbum(nombre: string){
		this.nombreAlbum = nombre;
	}

	/**
	 * Setter de los grupos del album
	 * @param grupo del album
	 */
	setGrupos(grupo: Grupos){
		this.grupos.push(grupo);
	}

	/**
	 * Setter de los artistas del album
	 * @param artista del album
	 */
	setArtistas(artista: Artistas){
		this.artistas.push(artista);
	}

	/**
	 * Setter de los géneros musicales del album
	 * @param genero musicales del album
	 */
	setGenero(genero: GenerosMusicales){
		this.genero.push(genero);
	}

	/**
	 * Setter del año de publicación del album
	 * @param year de publicación
	 */
	setYear(year: number){
		this.yearPublicacion = year;
	}

	/**
	 * Setter de las canciones del album
	 * @param cancion del album
	 */
	setCanciones(cancion: Cancion){
		this.canciones.push(cancion);
	}
}