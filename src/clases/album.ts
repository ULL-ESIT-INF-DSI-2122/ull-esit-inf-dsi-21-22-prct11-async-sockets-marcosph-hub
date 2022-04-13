import { Cancion, CancionInterface } from "./cancion";
import { Grupos } from "./grupos";
import { Artistas, ArtistasInterface } from "./artistas";
import { GenerosMusicales } from "./generosMusicales";
import {albumes} from "../index";

/**
 * TRABAJO GRUPO L
 * @class Album contiene las especificaciones de los
 * distintos álbumes
 * @param nombreAlbum del album
 * @param autores autor del album (artista o grupo)
 * @param genero array de GenerosMusicales
 * @param yearPublicacion año de publicación del album
 * @param canciones array de Cancion
 */

export interface AlbumInterface {
	nombreAlbum: string,
	autores: string | ArtistasInterface,
	genero: GenerosMusicales[],
	yearPublicacion: number,
	canciones: CancionInterface[]
}
export class Album {
  private nombreAlbum: string;
	private autores: string | Artistas;
	private genero: GenerosMusicales[];
	private yearPublicacion: number;
	private canciones: Cancion[];
	//public anioGrupo: number[] = []

	constructor(nombreAlbum: string, autores: string | Artistas, genero: GenerosMusicales[],
		yearPublicacion: number, canciones: Cancion[]){
			this.nombreAlbum = nombreAlbum;
			this.autores = autores;
			this.genero = genero;
			this.yearPublicacion = yearPublicacion;
			this.canciones = canciones;
			if(autores instanceof Artistas){
				autores.autoSetAlbumes(this.nombreAlbum);
			}
			genero.forEach(element => {
				element.autoSetAlbumes(nombreAlbum);
			});
		}



	/**
	 * Getter del nombre del album
	 * @returns nombre del album
	 */
	getNombreAlbum(){
		return this.nombreAlbum;
	}
	/**
	 * Getter de autor del album
	 * @returns el nombre del grupo o el nombre del artista
	 */
	getAutores(){
		if (this.autores instanceof Artistas){
			return this.autores.getNombreArtista();
		} else {
			return this.autores;
		}
	}
	/**
	 * Getter de los géneros musicales del album
	 * @returns géneros musicales del album
	 */
	getGenero(){
		let generos: string[] = [];
		this.genero.forEach(element => {
			generos.push(element.getNombreGenero());
		});
		return generos;
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
	 * Setter del autor del album
	 * @param autor del album que puede ser un grupo o un artista
	 */
	setAutores(autor: string | Artistas){
		if (autor instanceof Artistas){
			this.autores = autor;
		} else {
			this.autores = autor;
		}
		
	}

	/**
	 * Setter de los géneros musicales del album
	 * @param genero musicales del album
	 */
	setGenero(genero: GenerosMusicales[]){
		this.genero = [];
    this.genero = genero;
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
	 * @param cancion del (album array de canciones)
	 */
	setCanciones(cancion: Cancion[]){
		this.canciones = [];
		this.canciones = cancion;
	}
	
}