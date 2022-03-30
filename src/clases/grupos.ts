
import { Album } from "./album";
import { Artistas } from "./artistas";
import { GenerosMusicales } from "./generosMusicales";
export class Grupos {
  private nombreGrupo: string;
	private artistas: Artistas[];
	private yearGrupo: number;
	private genero: GenerosMusicales[];
	private albumes: Album[];
	private oyentes: number;
	constructor(){}

	getNombreGrupo(){
		return this.nombreGrupo;
	}
	getArtistas(){
		return this.artistas;
	}
	getYearGrupo(){
		return this.yearGrupo;
	}
	getGenero(){
		return this.genero;
	}
	getAlbumes(){
		return this.albumes;
	}
	getOyentes(){
		return this.oyentes;
	}
	setNombreGrupo(nombre: string){
		this.nombreGrupo = nombre;
	}
	setArtistas(artista: Artistas){
		this.artistas.push(artista);
	}
	setYearGrupo(year: number){
		this.yearGrupo = year;
	}
	setGenero(genero: GenerosMusicales){
		this.genero.push(genero);
	}
	setAlbumes(album: Album){
		this.albumes.push(album);
	}
	setOyentes(oyente: number){
		this.oyentes = oyente;
	}
}