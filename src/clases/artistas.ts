import { Cancion } from "./cancion";
import { Grupos } from "./grupos";
import { Album } from "./album";
import { GenerosMusicales } from "./generosMusicales";

/**
 * TRABAJO GRUPO L
 * @class Artistas contiene las especificaciones de los
 * distintos artistas
 * @param nombreArtista nombre del artista
 * @param grupos array de Grupos 
 * @param generos array de GenerosMusicales
 * @param albumes array de Album
 * @param canciones array de Cancion
 * @param oyentes número de oyentes 
 */
export class Artistas {
	private nombreArtista: string;
	private grupos: Grupos[];
	private generos: GenerosMusicales[];
	private albumes: Album[];
	private canciones: Cancion[];
	private oyentes: number;
	constructor(nombreArtista: string){
		this.nombreArtista = nombreArtista;
	}
	/**
	 * Método para construir el artista despues de haber construido ya el objeto
	 * @param grupos grupos del artista
	 * @param generos generos del artista
	 * @param albumes albumes del artista
	 * @param canciones canciones del artista
	 * @param oyentes oyentes del artista
	 */
	construirArtista(grupos: Grupos[], generos: GenerosMusicales[], albumes: Album[], canciones: Cancion[], oyentes: number){
		this.grupos = grupos;
		this.generos = generos;
		this.albumes = albumes;
		this.canciones = canciones;
		this.setOyentes(oyentes);
		generos.forEach(element => {
			element.setArtistas(this);
		});
	}
	/**
	 * Getter del nombre del artista
	 * @returns nombre del artista
	 */
	getNombreArtista(){
		return this.nombreArtista;
	}

	/**
	 * Getter de los grupos del artista
	 * @returns grupos del artista
	 */
	getGrupos(){
		let grupos_: string[] = [];
        this.grupos.forEach(element => {
            grupos_.push(element.getNombreGrupo());
        });
		return grupos_;
	}

	/**
	 * Getter de los géneros musicales 
	 * @returns géneros musicales
	 */
	getGeneros(){
		let generos_: string[] = [];
        this.generos.forEach(element => {
            generos_.push(element.getNombreGenero());
        });
        return generos_;
	}

	/**
	 * Getter de los albumes del artista
	 * @returns albumes
	 */
	getAlbumes(){
		let albumes_: string[] = [];
    this.albumes.forEach(element => {
      albumes_.push(element.getNombreAlbum());
    });   
		return albumes_;
	}

	/**
	 * Getter de las canciones del artista
	 * @returns canciones del artista
	 */
	getCanciones(){
		let canciones_: string[] = [];
    this.canciones.forEach(element => {
      canciones_.push(element.getNombreCancion());
    }); 
		return canciones_;
	}

	/**
	 * Getter del número de oyentes del artista
	 * @returns oyentes del artista
	 */
	getOyentes(){
		return this.oyentes;
	}

	/**
	 * Getter del numero de grupos al que pertenece el artista
	 * @returns el tamaño del atributo grupo
	 */
	getGrupoSize(){
		return this.grupos.length;
	}

	/**
	 * Setter del nombre del artista
	 * @param nombre del artista
	 */
	setNombreArtista(nombre: string){
		this.nombreArtista = nombre;
	}

	/**
	 * Setter del nombre del grupo
	 * @param grupo del artista
	 */
	setGrupos(grupo: Grupos[]){
		this.grupos = []
		this.grupos = grupo;
	}


	/**
	 * Setter del genero del artista
	 * @param genero del artista
	 */
	setGeneros(genero: GenerosMusicales[]){
		this.generos = [];
    this.generos = genero;
	}

	/**
	 * Setter de las canciones del artista
	 * @param cancion del artista
	 */
	setCanciones(cancion: Cancion[]){
	for(let i: number = 0; i <= this.canciones.length; i++){
			this.canciones.pop();
		}
		cancion.forEach(element => {
			this.canciones.push(element);
		});
	}
	/**
	 * Setter de los albumes del artista
	 * @param album del artista
	 */
	 setAlbumes(album: Album[]){
		this.albumes.forEach(element => {
			this.albumes.pop();
		});
		album.forEach(element => {
			this.albumes.push(element);
		});
	}

	/**
	 * Setter de los oyentes 
	 * @param oyentes mensuales
	 */
	setOyentes(oyentes: number){
		let oyentesgrupales: number = 0;
		for(let i: number = 0; i < this.getGrupoSize(); i++){
			oyentesgrupales = oyentesgrupales + this.grupos[i].getOyentes();
		}
		this.oyentes = oyentes + oyentesgrupales;
	}
}