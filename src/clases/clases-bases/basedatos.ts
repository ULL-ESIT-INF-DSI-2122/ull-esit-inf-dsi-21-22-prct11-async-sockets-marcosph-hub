import { Album } from "../clases-bases/album";
import { Artistas } from "../clases-bases/artistas";
import { Cancion } from "../clases-bases/cancion";
import { GenerosMusicales } from "../clases-bases/generosMusicales";
import { Grupos } from "../clases-bases/grupos";
import { Playlist } from "../clases-bases/playlist";
import  lowdb  =  require ( "lowdb" ) ; 
import  FileSync  =  require ( "lowdb/adapters/FileSync" ) ;

import LocalStorage from 'lowdb/adapters/LocalStorage';

/**
 * @type dbtype con los datos y sus tipos que se introducen en
 * la base de datos
 */
type dbtype = {
    canciones: {
        nombre: string;
        autor: string;
        duracion: string;
        genero: GenerosMusicales[];
        single: boolean;
        numReproducciones: number;
    }[],
    generosmusicales: {
        nombreGenero: string;
	    grupos: string[];
	    artistas: string[];
	    albumes: string[];
	    canciones: string[];
    }[],
    
    albumes: {
        nombreAlbum: string;
	    autores: Grupos | Artistas;
	    genero: GenerosMusicales[];
	    yearPublicacion: number;
	    canciones: Cancion[];
    }[],
    artistas: {
        nombreArtista: string;
	    grupos: string[];
        generos: GenerosMusicales[];
        albumes: string[];
        canciones: Cancion[];
        oyentes: number;
    }[],
    grupos: {
        nombreGrupo: string;
	    artistas: Artistas[];
	    yearGrupo: number;
	    genero: GenerosMusicales[];
	    albumes: Album[];
	    oyentes: number;
    }[];
    playlist: {
        nombrePlaylist: string;
	    canciones: Cancion[];
	    duracion: string;
	    generos: GenerosMusicales[];
    }[];
    playlistUsuario: {
        nombrePlaylist: string;
	    canciones: Cancion[];
	    duracion: string;
	    generos: GenerosMusicales[];
    }[];
};

/**
 * @class BaseDatos que almacenará los valores en una base de datos de tipo lowdb
 */
export class BaseDatos{
    private basedatos: lowdb.LowdbSync<dbtype>
   // lowdb.LowSync<dbtype>;
    //lowdb.JSONFile<dbtype>;
  
    
    public generosArrayLista: GenerosMusicales[];
    public cancionesArrayLista: Cancion[];
    public albumesArrayLista: Album[];
    public artistasArrayLista: Artistas[];
    public gruposArrayLista: Grupos[];
    public playArrayLista: Playlist[];
    public playUsuarioArrayLista: Playlist[];

    constructor(generosArray: GenerosMusicales[] = [], cancionesArray: Cancion[] = [], albumesArray: Album[] = [], artistasArray: Artistas[] = [], gruposArray: Grupos[] = [], playlistArray: Playlist[] = []) {
        this.basedatos = lowdb(new FileSync("data.json"));
        this.generosArrayLista = generosArray;
        this.cancionesArrayLista = cancionesArray;
        this.albumesArrayLista = albumesArray;
        this.artistasArrayLista = artistasArray;
        this.gruposArrayLista = gruposArray;
        this.playArrayLista = playlistArray;
        this.playUsuarioArrayLista = [];
        this.guardarBaseDatos();
    }

    /**
     * @method guardarBaseDatos que guarda en la base de datos los
     * géneros musicales, canciones, álbumes, artistas y grupos de la app
     */
    guardarBaseDatos() {
        this.basedatos.set("generosmusicales", [this.generosArrayLista]).write();
        this.basedatos.set("canciones", [this.cancionesArrayLista]).write();
        this.basedatos.set("albumes", [this.albumesArrayLista]).write();
        this.basedatos.set("artistas", [this.artistasArrayLista]).write();
        this.basedatos.set("grupos", [this.gruposArrayLista]).write();
        this.basedatos.set("playlist", [this.playArrayLista]).write();
        this.basedatos.set("playlistUsuario", [this.playUsuarioArrayLista]).write();
    }

    /**
     * Método público para añadir el nuevo género musical en la base de datos
     * @param nuevoGenero a añadir
     */
    addNuevoGenero(nuevoGenero: GenerosMusicales) {
        this.generosArrayLista.push(nuevoGenero);
        this.guardarBaseDatos();
    }

    /**
     * Método público para añadir la nueva cancion en la base de datos
     * @param nuevaCancion a añadir
     */
    addNuevaCancion(nuevaCancion: Cancion) {
        this.cancionesArrayLista.push(nuevaCancion);
        this.guardarBaseDatos();
    }

    /**
     * Método público para añadir el nuevo álbum en la base de datos
     * @param nuevoAlbum a añadir
     */
    addNuevoAlbum(nuevoAlbum: Album) {
        this.albumesArrayLista.push(nuevoAlbum);
        this.guardarBaseDatos();
    }

    /**
     * Método público para añadir el nuevo artista en la base de datos
     * @param nuevoArtista a añadir
     */
    addNuevoArtista(nuevoArtista: Artistas) {
        this.artistasArrayLista.push(nuevoArtista);
        this.guardarBaseDatos();
    }

    /**
     * Método público para añadir el nuevo grupo en la base de datos
     * @param nuevoGrupo a añadir
     */
    addNuevoGrupo(nuevoGrupo: Grupos) {
        this.gruposArrayLista.push(nuevoGrupo);
        this.guardarBaseDatos();
    }
    /**
     * Método para añadir nueva playlist
     * @param nuevoPlay añade nueva playlist
     */
    addNuevoPlay(nuevoPlay: Playlist) {
        this.playUsuarioArrayLista.push(nuevoPlay);
        this.guardarBaseDatos();
    }
    /**
     * Método para borrar álbum del array de álbumes
     * @param numeroAlbum número del álbum a eliminar
     */
    delAlbum(numeroAlbum: number) {
        this.albumesArrayLista.splice(numeroAlbum, 1);
        this.guardarBaseDatos();
    }
    /**
     * Método para eliminar artistas del array artistas
     * @param numeroArtista numero del artista a eliminar
     */
    delArtista(numeroArtista: number) {
        this.artistasArrayLista.splice(numeroArtista, 1);
        this.guardarBaseDatos();
    }
    /**
     * Método para eliminar canciones del array de canciones
     * @param numeroCancion a eliminar
     */
    delCancion(numeroCancion: number) {
        this.cancionesArrayLista.splice(numeroCancion, 1);
        this.guardarBaseDatos();
    }
    /**
     * Método para eliminar grupos del array grupos
     * @param numeroGrupos a eliminar
     */
    delGrupos(numeroGrupos: number) {
        this.gruposArrayLista.splice(numeroGrupos, 1);
        this.guardarBaseDatos();
    }
    /**
     * Método para eliminar un género del array de géneros
     * @param numeroGenero a eliminar
     */
    delGenero(numeroGenero: number) {
        this.generosArrayLista.splice(numeroGenero, 1);
        this.guardarBaseDatos();
    }
    /**
     * 
     * @param numero 
     */
    delPlay(numero: number) {
        this.playArrayLista.splice(numero, 1);
        this.guardarBaseDatos();
    }
    /**
     * Getter de playlist del usuario
     * @returns playlist del usuario
     */
    getPlayLista(){
        return this.playUsuarioArrayLista;
    }
    /**
     * Setter de playlist del usuario
     * @param lista a modificar
     */
    setPlayLista(lista: Playlist[]){
        this.playUsuarioArrayLista = lista;
       this.guardarBaseDatos();
    }
}
