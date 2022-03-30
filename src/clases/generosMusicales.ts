import { Cancion } from "./cancion";
import { Grupos } from "./grupos";
import { Artistas } from "./artistas";
import { Album } from "./album";

export class GenerosMusicales {
	private nombreGenero: string;
	private grupos: Grupos[];
	private artistas: Artistas[];
	private albumes: Album[];
	private canciones: Cancion[];
	constructor(){}
	getNombreGenero(){
		return this.nombreGenero;
	}
	getGrupos(){
		return this.grupos;
	}
	getArtistas(){
		return this.artistas;
	}
	getAlbumes(){
		return this.albumes;
	}
	getCanciones(){
		return this.canciones;
	}
	setNombreGenero(nombre: string){
		this.nombreGenero = nombre;
	}
	setGrupos(grupo: Grupos){
		this.grupos.push(grupo);
	}
	setArtistas(artista: Artistas){
		this.artistas.push(artista);
	}
	setAlbumes(album: Album){
		this.albumes.push(album);
	}
	setCanciones(cancion: Cancion){
		this.canciones.push(cancion);
	}
}