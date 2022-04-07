import { Cancion } from "./cancion";
import { GenerosMusicales } from "./generosMusicales";

/**
 * @class Playlist Clase que representa una Playlist de varias canciones de distintos géneros.
 */
export class Playlist {
	private nombrePlaylist: string;
	private canciones: Cancion[];
	private duracion: string;
	private generos: GenerosMusicales[] = [];
	
	/**
	 * 
	 * @param nombrePlaylist Nombre que se le añadirá a la Playlist
	 * @param canciones Conjunto de canciones que serán reproducidas en la playlist
	 */
	constructor(nombrePlaylist: string, canciones: Cancion[]){
		this.nombrePlaylist = nombrePlaylist;
		this.canciones = canciones;
		this.duracion = ``;
		let auxGeneroCanciones: GenerosMusicales[];
		this.canciones.forEach(element => {
			
			auxGeneroCanciones = element.getGenero();
			auxGeneroCanciones.forEach(elemento => {
				let contador: number = 0;
				for(let i = 0; i < this.generos.length; i++){
					if (elemento === this.generos[i]){
						contador++;
					}
				}
				if (contador === 0){
					this.generos.push(elemento);					
					contador = 0;
				}	
				contador = 0;
			});
		});
	}
	/**
	 * Getter para el nombre de la Playlist
	 * @returns string con el nombre de la playlist
	 */
	getNombrePlaylist(){
		return this.nombrePlaylist;
	}

	/**
	 * Getter para el Conjunto de canciones
	 * @returns Array de Canciones
	 */
	getCanciones(){
		return this.canciones;
	}

	/**
	 * Getter para la duración de una Cancion
	 * @returns String con la duración de la playlist en formato HH:MM:SS
	 */
	getDuracion(){
		let aux: number = 0;
		this.canciones.forEach(element => {
			aux = aux + element.getDuracionCancionSecs()
		});
		let hour = Math.floor(aux / 3600);
		let min = Math.floor(aux / 60);
		let secs = aux - min * 60;
		aux = aux - hour * 3600;
		let result: string = `${hour}h ${min}min ${secs}secs`;
		this.duracion = result;

		return this.duracion;
	}

	/**
	 * Getter para el conjunto de Generos 
	 * @returns Array de Generos Musicales
	 */
	getGeneros(){
		let nombreGenero: string[] = [];
		this.generos.forEach(element => {
			nombreGenero.push(element.getNombreGenero()); 
		});
		return nombreGenero; 
	}

	/**
	 * Setter para añadir el nombre de la playlist
	 * @param nombre Nuevo nombre de la playlist 
	 */
	setNombrePlaylist(nombre: string){
		this.nombrePlaylist = nombre;
	}

	/**
	 * Setter para añadir un conjunto de Canciones de la Playlist
	 * @param canciones Conjunto de canciones a añadir
	 */
	setCanciones(canciones: Cancion[]){
		this.canciones = [];
		this.canciones = canciones;
	}
/**
 * Setter para añadir la duración de la playlist
 * @param duracion Nuevo string con el valor de la duracion de la playlist
 */
	setDuracion(duracion: string){
		this.duracion = duracion;
	}

	/**
	 * Setter para añadir el conjunto de GenerosMusicales
	 * @param generos Conjunto de generos a añadir.
	 */
	setGeneros(generos: GenerosMusicales[]){
		this.generos = generos;
		
	}
}