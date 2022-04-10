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
	private grupos: Grupos[] = [];
	private generos: GenerosMusicales[] = [];
	private albumes: Album[] = [];
	private canciones: Cancion[] = [];
	private oyentes: number;

	constructor(nombreArtista: string){
		this.nombreArtista = nombreArtista;
	}
	/**
/**
	 * @function construirArtista Método para inicializar las propiedades restantes de
	 * la clase Artista
	 * @param canciones canciones del artista
	 * @param oyentes oyentes del artista
	 */
	construirArtista( canciones: Cancion[], oyentes: number){
	
		this.canciones = canciones;
		this.setOyentes(oyentes);
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
		this.generos.forEach(element => {
			element.autoSetArtistas(this);
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
	 * Getter de los nombres grupos del artista
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
	 * Getter de los grupos del artista
	 * @returns grupos del artista
	 */
		 getGruposObject(){
			let grupos_: Grupos[] = [];
					this.grupos.forEach(element => {
							grupos_.push(element);
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
	 * Getter de los nombres de los albumes del artista
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
	 * Getter de los albumes del artista
	 * @returns albumes
	 */
	 getAlbumesObject(){
		let albumes_: Album[] = [];
    this.albumes.forEach(element => {
      albumes_.push(element);
    });   
		return albumes_;
	}

	/**
	 * Getter de los nombres de las canciones del artista
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
	 * Getter de las canciones del artista
	 * @returns canciones del artista
	 */
		getCancionesObject(){
		let canciones_: Cancion[] = [];
		this.canciones.forEach(element => {
			canciones_.push(element);
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
	 * Setter del grupo que invoca al artista
	 * @param grupo del artista
	 */
		 autoSetGrupos(grupo: Grupos){
			this.grupos.push(grupo);
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
	this.canciones = [];
		this.canciones = cancion;
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
	 * Setter de los albumes del artista que rellenan a un artista en la clase album
	 * @param album del artista
	 */
		 autoSetAlbumes(album: Album){
			this.albumes.push(album);
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