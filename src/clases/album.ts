import { Cancion } from "./cancion";
import { Grupos } from "./grupos";
import { Artistas } from "./artistas";
import { GenerosMusicales } from "./generosMusicales";

export class Album {
  private nombreAlbum: string;
	private grupos: Grupos[];
	private artistas: Artistas[];
	private genero: GenerosMusicales[]
	private yearPublicacion: number;
	private canciones: Cancion[];
	constructor(){}
	getNombreAlbum(){
		return this.nombreAlbum;
	}
	getGrupos(){
		return this.grupos;
	}
	getArtistas(){
		return this.artistas;
	}
	getGenero(){
		return this.genero;
	}
	getYear(){
		return this.yearPublicacion;
	}
	getCanciones(){
		return this.canciones;
	}
	setNombreAlbum(nombre: string){
		this.nombreAlbum = nombre;
	}
	setGrupos(grupo: Grupos){
		this.grupos.push(grupo);
	}
	setArtistas(artista: Artistas){
		this.artistas.push(artista);
	}
	setGenero(genero: GenerosMusicales){
		this.genero.push(genero);
	}
	setYear(year: number){
		this.yearPublicacion = year;
	}
	setCanciones(cancion: Cancion){
		this.canciones.push(cancion);
	}
}