import { Cancion } from "./cancion";
import { GenerosMusicales } from "./generosMusicales";

export class Playlist {
	private nombrePlaylist: string;
	private canciones: Cancion[];
	private duracion: string;
	private generos: GenerosMusicales[] = [];
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

	getNombrePlaylist(){
		return this.nombrePlaylist;
	}
	getCanciones(){
		return this.canciones;
	}
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
	getGeneros(){
		let nombreGenero: string[] = [];
		this.generos.forEach(element => {
			nombreGenero.push(element.getNombreGenero()); 
		});
		return nombreGenero; 
	}

	setNombrePlaylist(nombre: string){
		this.nombrePlaylist = nombre;
	}

	setCanciones(canciones: Cancion[]){
		this.canciones = [];
		this.canciones = canciones;
	}

	setDuracion(duracion: string){
		this.duracion = duracion;
	}

	setGeneros(generos: GenerosMusicales[]){
		this.generos = generos;
		
	}
}