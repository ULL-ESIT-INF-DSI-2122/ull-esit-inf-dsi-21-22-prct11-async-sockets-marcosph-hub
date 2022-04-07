import { Cancion } from "./cancion";
import { Grupos } from "./grupos";
import { Artistas } from "./artistas";
import { Album } from "./album";

/**
 * TRABAJO GRUPO L
 * @class GenerosMusicales contiene las especificaciones de los
 * distintos géneros musicales
 * @param nombreGenero nombre del género musical
 * @param grupos array de Grupos 
 * @param artistas array de Artistas
 * @param albumes array de Album
 * @param canciones array de Cancion
 */
export class GenerosMusicales {
	private nombreGenero: string;
	private grupos: Grupos[] = [];
	private artistas: Artistas[] = [];
	private albumes: Album[] = [];
	private canciones: Cancion[] = [];

	constructor(nombreGenero: string){
		this.nombreGenero = nombreGenero;
	}

	/**
	 * 
	 * @function construirGenero Método para inicializar las propiedades restantes de
	 * la clase GenerosMusicales
	 * @param grupos 
	 * @param artistas 
	 * @param albumes 
	 * @param canciones 
	 */
	construirGenero(grupos: Grupos[], artistas: Artistas[], albumes: Album[], canciones: Cancion[]){
		this.grupos = grupos;
		this.artistas = artistas;
		this.albumes = albumes;
		this.canciones = canciones;
	}

	/**
	 * Getter nombre del género musical
	 * @returns género musical
	 */
	getNombreGenero(){
		return this.nombreGenero;
	}

	/**
	 * Getter de los grupos 
	 * @returns grupos
	 */
	getGrupos(){
		return this.grupos;
	}

	/**
	 * Getter de los artistas
	 * @returns artistas
	 */
	getArtistas(){
		return this.artistas;
	}

	/**
	 * Getter de los albumes
	 * @returns albumes
	 */
	getAlbumes(){
		return this.albumes;
	}

	/**
	 * Getter de las canciones
	 * @returns canciones
	 */
	getCanciones(){
		return this.canciones;
	}

	/**
	 * Setter del nombre de los géneros musicales
	 * @param nombre de los géneros musicales
	 */
	setNombreGenero(nombre: string){
		this.nombreGenero = nombre;
	}

	/**
	 * Setter de los grupos
	 * @param grupo asociado a los géneros
	 */
	setGrupos(grupo: Grupos){
		this.grupos.push(grupo);
	}

	/**
	 * Setter de los artistas
	 * @param artista de los géneros
	 */
	setArtistas(artista: Artistas){
		this.artistas.push(artista);
	}

	/**
	 * Setter de los álbumes
	 * @param album de los géneros
	 */
	setAlbumes(album: Album){
		this.albumes.push(album);
	}

	/**
	 * Setter de las canciones
	 * @param cancion de los géneros
	 */
	setCanciones(cancion: Cancion){
		this.canciones.push(cancion);
	}
}