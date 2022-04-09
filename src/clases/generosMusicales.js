"use strict";
exports.__esModule = true;
exports.GenerosMusicales = void 0;
/**
 * TRABAJO GRUPO L
 * @class GenerosMusicales contiene las especificaciones de los
 * distintos géneros musicales
 * @param nombreGenero nombre del género musical
 * @param grupos array de Grupos
 * @param artistas array de Artistas
 * @param albumes array de Album
 * @param canciones array de Cancion
 */
var GenerosMusicales = /** @class */ (function () {
    function GenerosMusicales(nombreGenero) {
        this.grupos = [];
        this.artistas = [];
        this.albumes = [];
        this.canciones = [];
        this.nombreGenero = nombreGenero;
    }
    /**
     * Getter nombre del género musical
     * @returns género musical
     */
    GenerosMusicales.prototype.getNombreGenero = function () {
        return this.nombreGenero;
    };
    /**
     * Getter de los grupos
     * @returns grupos
     */
    GenerosMusicales.prototype.getGrupos = function () {
        return this.grupos;
    };
    /**
     * Getter de los artistas
     * @returns artistas
     */
    GenerosMusicales.prototype.getArtistas = function () {
        return this.artistas;
    };
    /**
     * Getter de los albumes
     * @returns albumes
     */
    GenerosMusicales.prototype.getAlbumes = function () {
        return this.albumes;
    };
    /**
     * Getter de las canciones
     * @returns canciones
     */
    GenerosMusicales.prototype.getCanciones = function () {
        return this.canciones;
    };
    /**
     * Setter del nombre de los géneros musicales
     * @param nombre de los géneros musicales
     */
    GenerosMusicales.prototype.setNombreGenero = function (nombre) {
        this.nombreGenero = nombre;
    };
    /**
     * Setter de los grupos
     * @param grupo asociado a los géneros
     */
    GenerosMusicales.prototype.setGrupos = function (grupo) {
        this.grupos = [];
        this.grupos = grupo;
    };
    /**
     * Setter de los grupos
     * @param grupo asociado a los géneros
     */
    GenerosMusicales.prototype.autoSetGrupos = function (grupo) {
        this.grupos.push(grupo);
    };
    /**
     * Setter de los artistas
     * @param artista de los géneros
     */
    GenerosMusicales.prototype.setArtistas = function (artista) {
        this.artistas = [];
        this.artistas = artista;
    };
    /**
     * Setter de los artistas
     * @param artista de los géneros
     */
    GenerosMusicales.prototype.autoSetArtistas = function (artista) {
        this.artistas.push(artista);
    };
    /**
     * Setter de los álbumes
     * @param album de los géneros
     */
    GenerosMusicales.prototype.setAlbumes = function (album) {
        this.albumes = [];
        this.albumes = album;
    };
    /**
     * Setter de los álbumes
     * @param album de los géneros
     */
    GenerosMusicales.prototype.autoSetAlbumes = function (album) {
        this.albumes.push(album);
    };
    /**
     * Setter de las canciones
     * @param cancion de los géneros
     */
    GenerosMusicales.prototype.setCanciones = function (cancion) {
        this.canciones = [];
        this.canciones = cancion;
    };
    /**
 * Setter de las canciones
 * @param cancion de los géneros
 */
    GenerosMusicales.prototype.autoSetCanciones = function (cancion) {
        this.canciones.push(cancion);
        ;
    };
    return GenerosMusicales;
}());
exports.GenerosMusicales = GenerosMusicales;
