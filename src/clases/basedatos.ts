import inquirer from 'inquirer';
import { Album } from "../clases/album";
import { Artistas } from "../clases/artistas";
import { Cancion } from "../clases/cancion";
import { GenerosMusicales } from "../clases/generosMusicales";
import { Grupos } from "../clases/grupos";
import { Playlist } from "../clases/playlist";
import * as index from "../index";
import * as inGrupos from "../clases/inquirer-Grupos";
import * as inArtista from "../clases/inquirer_artista";
import { addAlbum } from '../clases/inquirer-Album';
import * as lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";


type dbtype = {
    generosmusicales: {
        nombreGenero: string;
	    grupos: Grupos[];
	    artistas: Artistas[];
	    albumes: Album[];
	    canciones: Cancion[];
    }[],
    canciones: {
        nombre: string;
        autor: string;
        duracion: string;
        genero: GenerosMusicales[];
        single: boolean;
        numReproducciones: number;
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
	    grupos: Grupos[];
        generos: GenerosMusicales[];
        albumes: Album[];
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
};

export class BaseDatos{
    private basedatos: lowdb.LowSync<dbtype>;
    public generosArray: GenerosMusicales[];
    public cancionesArray: Cancion[];
    public albumesArray: Album[];
    public artistasArray: Artistas[];
    public gruposArray: Grupos[];

    constructor(generosArray: GenerosMusicales[] = [], cancionesArray: Cancion[] = [], albumesArray: Album[] = [], artistasArray: Artistas[] = [], gruposArray: Grupos[] = []) {
        this.basedatos = lowdb(new FileSync("index.json"));
        this.generosArray = generosArray;
        this.cancionesArray = cancionesArray;
        this.albumesArray = albumesArray;
        this.artistasArray = artistasArray;
        this.gruposArray = gruposArray;
    }

    // Guardar en la base de datos
    guardarBaseDatos() {
        this.basedatos.set("generosmusicales", [...this.generosArray]).write();
        this.basedatos.set("canciones", [...this.cancionesArray]).write();
        this.basedatos.set("albumes", [...this.albumesArray]).write();
        this.basedatos.set("artistas", [...this.artistasArray]).write();
        this.basedatos.set("grupos", [...this.gruposArray]).write();
    }

    /**
     * Método público para añadir el nuevo género musical en la base de datos
     * @param nuevoGenero a añadir
     */
    addNuevoGenero(nuevoGenero: GenerosMusicales) {
        this.generosArray.push(nuevoGenero);
        this.guardarBaseDatos();
    }

    /**
     * Método público para añadir la nueva cancion en la base de datos
     * @param nuevaCancion a añadir
     */
    addNuevaCancion(nuevaCancion: Cancion) {
        this.cancionesArray.push(nuevaCancion);
        this.guardarBaseDatos();
    }

    /**
     * Método público para añadir el nuevo álbum en la base de datos
     * @param nuevoAlbum a añadir
     */
    addNuevoAlbum(nuevoAlbum: Album) {
        this.albumesArray.push(nuevoAlbum);
        this.guardarBaseDatos();
    }

    /**
     * Método público para añadir el nuevo artista en la base de datos
     * @param nuevoArtista a añadir
     */
    addNuevoArtista(nuevoArtista: Artistas) {
        this.artistasArray.push(nuevoArtista);
        this.guardarBaseDatos();
    }

    /**
     * Método público para añadir el nuevo grupo en la base de datos
     * @param nuevoGrupo a añadir
     */
    addNuevoGrupo(nuevoGrupo: Grupos) {
        this.gruposArray.push(nuevoGrupo);
        this.guardarBaseDatos();
    }
}