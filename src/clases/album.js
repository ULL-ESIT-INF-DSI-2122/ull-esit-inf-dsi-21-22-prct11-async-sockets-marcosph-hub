"use strict";
exports.__esModule = true;
exports.Album = void 0;
var grupos_1 = require("./grupos");
var artistas_1 = require("./artistas");
/**
 * TRABAJO GRUPO L
 * @class Album contiene las especificaciones de los
 * distintos álbumes
 * @param nombreAlbum del album
 * @param autores autor del album (artista o grupo)
 * @param genero array de GenerosMusicales
 * @param yearPublicacion año de publicación del album
 * @param canciones array de Cancion
 */
var Album = /** @class */ (function () {
    function Album(nombreAlbum, autores, genero, yearPublicacion, canciones) {
        var _this = this;
        this.nombreAlbum = nombreAlbum;
        this.autores = autores;
        this.genero = genero;
        this.yearPublicacion = yearPublicacion;
        this.canciones = canciones;
        if (autores instanceof artistas_1.Artistas) {
            autores.autoSetAlbumes(this);
        }
        genero.forEach(function (element) {
            element.autoSetAlbumes(_this);
        });
    }
    /**
     * Getter del nombre del album
     * @returns nombre del album
     */
    Album.prototype.getNombreAlbum = function () {
        return this.nombreAlbum;
    };
    /**
     * Getter de autor del album
     * @returns el nombre del grupo o el nombre del artista
     */
    Album.prototype.getAutores = function () {
        if (this.autores instanceof grupos_1.Grupos) {
            return this.autores.getNombreGrupo();
        }
        else {
            return this.autores.getNombreArtista();
        }
    };
    /**
     * Getter de los géneros musicales del album
     * @returns géneros musicales del album
     */
    Album.prototype.getGenero = function () {
        var generos = [];
        this.genero.forEach(function (element) {
            generos.push(element.getNombreGenero());
        });
        return generos;
    };
    /**
     * Getter del año de publicación del album
     * @returns año de publicación
     */
    Album.prototype.getYear = function () {
        return this.yearPublicacion;
    };
    /**
     * Getter del nombre de las canciones del album
     * @returns nombre de las canciones
     */
    Album.prototype.getCanciones = function () {
        return this.canciones;
    };
    /**
     * Setter del nombre del album
     * @param nombre del album
     */
    Album.prototype.setNombreAlbum = function (nombre) {
        this.nombreAlbum = nombre;
    };
    /**
     * Setter del autor del album
     * @param autor del album que puede ser un grupo o un artista
     */
    Album.prototype.setAutores = function (autor) {
        if (autor instanceof grupos_1.Grupos) {
            this.autores = autor;
        }
        else {
            this.autores = autor;
        }
    };
    /**
     * Setter de los géneros musicales del album
     * @param genero musicales del album
     */
    Album.prototype.setGenero = function (genero) {
        this.genero = [];
        this.genero = genero;
    };
    /**
     * Setter del año de publicación del album
     * @param year de publicación
     */
    Album.prototype.setYear = function (year) {
        this.yearPublicacion = year;
    };
    /**
     * Setter de las canciones del album
     * @param cancion del (album array de canciones)
     */
    Album.prototype.setCanciones = function (cancion) {
        this.canciones = [];
        this.canciones = cancion;
    };
    return Album;
}());
exports.Album = Album;
