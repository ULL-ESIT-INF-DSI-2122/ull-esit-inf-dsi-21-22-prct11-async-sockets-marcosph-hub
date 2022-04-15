import { Album, AlbumInterface } from "./album";
import { Artistas, ArtistasInterface } from "./artistas";
import { GenerosMusicales, GenerosMusicalesInterface } from "./generosMusicales";

/**
 * TRABAJO GRUPO L
 * @class Grupos contiene las especificaciones de los
 * distintos grupos
 * @param nombreGrupo nombre del grupo
 * @param artistas Array que almacena a varios artistas
 * @param yearGrupo Entero que representa el año de creación del grupo
 * @param genero Array que almacena varios Generos Musicales distintos
 * @param albumes Array que almacena distintos álbumes
 * @param oyentes Entero que representa el número de oyentes mensuales
 */
 export interface GruposInterface{
	nombreGrupo: string,
	artistas: ArtistasInterface[],
	yearGrupo: number,
	genero: GenerosMusicalesInterface[],
	albumes: AlbumInterface[],
	oyentes: number
}
export class Grupos {
  private nombreGrupo: string;
	private artistas: Artistas[];
	private yearGrupo: number;
	private genero: GenerosMusicales[];
	private albumes: Album[];
	private oyentes: number;

	constructor(nombreGrupo: string){
		this.nombreGrupo = nombreGrupo;
	}

	/**
	 * @function construirGrupo Método para incializar las propiedades restantes de
	 * la clase Grupos
	 * @param artistas Array que almacena a varios artistas
	 * @param yearGrupo Entero que representa el año de creación del grupo
	 * @param genero Array que almacena varios Generos Musicales distintos
	 * @param albumes Array que almacena distintos álbumes
	 * @param oyentes Entero que representa el número de oyentes mensuales
	 */
	construirGrupo(artistas: Artistas[], yearGrupo: number, genero: GenerosMusicales[], albumes: Album[], oyentes: number){
		this.artistas = artistas;
		this.yearGrupo = yearGrupo;
		this.genero = genero;
		this.albumes = albumes;
		this.oyentes = oyentes;
		genero.forEach(element => {
			element.autoSetGrupos(this.nombreGrupo);
		});
		artistas.forEach(element => {
			element.autoSetGrupos(this.nombreGrupo, this.oyentes);
		});
		
	}


	/**
	 * Getter del nombre de los grupos
	 * @returns nombre del grupo
	 */
	getNombreGrupo(){
		return this.nombreGrupo;
	}


	
	/**
	 * Getter de los artistas
	 * @returns artistas
	 */
	 getArtistas_(){
		return this.artistas
	}

	/**
	 * Getter del año de creación del grupo
	 * @returns año del grupo
	 */
	getYearGrupo(){
		return this.yearGrupo;
	}

	/**
	 * Getter de los géneros musicales
	 * @returns géneros
	 */
	getGenero(){
		let generos: string[] = [];
        this.genero.forEach(element => {
            generos.push(element.getNombreGenero());
        });
        return generos;
	}

	/**
	 * Getter de los albumes
	 * @returns albumes
	 */
	getAlbumes(){
		return this.albumes;
	}

	/**
	 * Getter de los oyentes mensuales
	 * @returns oyentes mensuales
	 */
	getOyentes(){
		return this.oyentes;
	}
	
	/**
	 * Setter del nombre del grupos
	 * @param nombre del grupo
	 */
	setNombreGrupo(nombre: string){
		this.nombreGrupo = nombre;
	}

	/**
	 * Setter de los artistas
	 * @param artista del grupo
	 */
	
	setArtistas(artistas: Artistas[]){
		this.artistas = [];
    this.artistas = artistas;
	}

	/**
	 * Setter del año de creación del grupo
	 * @param year del grupo
	 */
	setYearGrupo(year: number){
		this.yearGrupo = year;
	}

	/**
	 * Setter de los géneros del grupo
	 * @param genero musicales
	 */
	
	setGenero(genero: GenerosMusicales[]){
		this.genero = [];
    this.genero = genero;
	}
	

	/**
	 * Setter de los albumes del grupo
	 * @param album del grupo
	 */
	setAlbumes(album: Album[]){
		this.albumes = [];
		this.albumes = album;
	}

	/**
	 * Setter de los oyentes mensuales
	 * @param oyente mensuales
	 */
	setOyentes(oyente: number){
		this.oyentes = oyente;
	}
	/*public static deserialize(cancion: Grupos[]){
		const myCanciones: Grupos[] = [];

		cancion.forEach((element) => {
				const myCancion = new Grupos(element.getNombreGrupo());
				myCancion.setAlbumes(element.getAlbumes());
				myCancion.setArtistas(element.getArtistas_());
				myCancion.setGenero(element.genero);
				myCancion.setOyentes(element.oyentes);
				myCancion.setYearGrupo(element.yearGrupo)
				myCanciones.push(myCancion);
		});

		return myCanciones;
}*/
}