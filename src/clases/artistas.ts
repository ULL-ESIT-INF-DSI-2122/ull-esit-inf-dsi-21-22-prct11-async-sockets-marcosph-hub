import { Cancion } from "./cancion";
import { Grupos } from "./grupos";
import { Album } from "./album";
import { GenerosMusicales } from "./generosMusicales";

export class Artistas {
 private nombreArtista: string;
 private grupos: Grupos[];
 private generos: GenerosMusicales[];
 private albumes: Album[];
 private canciones: Cancion[];
 private oyentes: number;
 constructor(){}
 getNombreArtista(){
	 return this.nombreArtista;
 }
 getGrupos(){
	 return this.grupos;
 }
 getGeneros(){
	 return this.generos;
 }
 getAlbumes(){
	 return this.albumes;
 }
 getCanciones(){
	 return this.canciones;
 }
 getOyentes(){
	 return this.oyentes;
 }
 setNombreArtista(nombre: string){
	 this.nombreArtista = nombre;
 }
 setGrupos(grupo: Grupos){
	 this.grupos.push(grupo);
 }
 setGeneros(genero: GenerosMusicales){
	 this.generos.push(genero);
 }
 setCanciones(cancion: Cancion){
	 this.canciones.push(cancion);
 }
 setOyentes(oyentes: number){
	 this.oyentes = oyentes;
 }
}