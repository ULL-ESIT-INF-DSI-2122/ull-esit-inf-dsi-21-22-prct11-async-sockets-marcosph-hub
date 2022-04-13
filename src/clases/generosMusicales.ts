import { Cancion, CancionInterface } from "./cancion";
import { Grupos, GruposInterface } from "./grupos";
import { Artistas, ArtistasInterface } from "./artistas";
import { Album, AlbumInterface } from "./album";

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
 export interface GenerosMusicalesInterface{
	nombreGenero: string,
	grupos: GruposInterface[],
	artistas: ArtistasInterface[],
	albumes: AlbumInterface[],
	canciones: string[]
}
export class GenerosMusicales {
	private nombreGenero: string;
	private grupos: string[] = [];
	private artistas: string[] = [];
	private albumes: string[] = [];
	private canciones: string[] = [];

	constructor(nombreGenero: string){
		this.nombreGenero = nombreGenero;
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
	 setGrupos(grupo: string[]){
		this.grupos = [];
		this.grupos = grupo;
	}
	/**
	 * Setter de los grupos
	 * @param grupo asociado a los géneros
	 */
	autoSetGrupos(grupo: string){
		this.grupos.push(grupo);
	}

	/**
	 * Setter de los artistas
	 * @param artista de los géneros
	 */
	setArtistas(artista: string[]){
		this.artistas = [];
		this.artistas = artista;
	}
	/**
	 * Setter de los artistas
	 * @param artista de los géneros
	 */
	 autoSetArtistas(artista: string){
		this.artistas.push(artista);
	}

	/**
	 * Setter de los álbumes
	 * @param album de los géneros
	 */
	setAlbumes(album: string[]){
		this.albumes = [];
		this.albumes = album;
	}
	/**
	 * Setter de los álbumes
	 * @param album de los géneros
	 */
	 autoSetAlbumes(album: string){
		this.albumes.push(album);
	}

	/**
	 * Setter de las canciones
	 * @param cancion de los géneros
	 */
	setCanciones(cancion: string[]){
		this.canciones = [];
		this.canciones = cancion;
	}
		/**
	 * Setter de las canciones
	 * @param cancion de los géneros
	 */
		 autoSetCanciones(cancion: string){
			this.canciones.push(cancion);
		}
		
		/*public static deserialize(generos: GenerosMusicales[]): GenerosMusicales[]{
			const mySongs: GenerosMusicales[] = [];

	generos.forEach((genero_) => {
		const mySong = new GenerosMusicales(genero_.nombreGenero);
		mySong.setAlbumes(genero_.getAlbumes());
		mySong.setArtistas(genero_.getArtistas());
	const canciones = genero_.canciones;
	canciones.forEach((cancion) =>{
		mySong.autoSetCanciones(cancion);
	})
		mySong.setCanciones(genero_.getCanciones());
		mySong.setGrupos(genero_.getGrupos());
		mySongs.push(mySong);
	});

	return mySongs;
}*/
}