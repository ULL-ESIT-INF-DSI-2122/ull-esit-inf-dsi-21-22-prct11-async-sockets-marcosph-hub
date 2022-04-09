"use strict";
exports.__esModule = true;
exports.Playlist = void 0;
/**
 * @class Playlist Clase que representa una Playlist de varias canciones de distintos géneros.
 */
var Playlist = /** @class */ (function () {
    /**
     *
     * @param nombrePlaylist Nombre que se le añadirá a la Playlist
     * @param canciones Conjunto de canciones que serán reproducidas en la playlist
     */
    function Playlist(nombrePlaylist, canciones) {
        var _this = this;
        this.generos = [];
        this.nombrePlaylist = nombrePlaylist;
        this.canciones = canciones;
        this.duracion = "";
        var auxGeneroCanciones;
        this.canciones.forEach(function (element) {
            auxGeneroCanciones = element.getGenero();
            auxGeneroCanciones.forEach(function (elemento) {
                var contador = 0;
                for (var i = 0; i < _this.generos.length; i++) {
                    if (elemento === _this.generos[i]) {
                        contador++;
                    }
                }
                if (contador === 0) {
                    _this.generos.push(elemento);
                    contador = 0;
                }
                contador = 0;
            });
        });
    }
    /**
     * Getter para el nombre de la Playlist
     * @returns string con el nombre de la playlist
     */
    Playlist.prototype.getNombrePlaylist = function () {
        return this.nombrePlaylist;
    };
    /**
     * Getter para el Conjunto de canciones
     * @returns Array de Canciones
     */
    Playlist.prototype.getCanciones = function () {
        return this.canciones;
    };
    /**
     * Getter para la duración de una Cancion
     * @returns String con la duración de la playlist en formato HH:MM:SS
     */
    Playlist.prototype.getDuracion = function () {
        var aux = 0;
        this.canciones.forEach(function (element) {
            aux = aux + element.getDuracionCancionSecs();
        });
        var hour = Math.floor(aux / 3600);
        var min = Math.floor(aux / 60);
        var secs = aux - min * 60;
        aux = aux - hour * 3600;
        var result = "".concat(hour, "h ").concat(min, "min ").concat(secs, "secs");
        this.duracion = result;
        return this.duracion;
    };
    /**
     * Getter para el conjunto de Generos
     * @returns Array de Generos Musicales
     */
    Playlist.prototype.getGeneros = function () {
        var nombreGenero = [];
        this.generos.forEach(function (element) {
            nombreGenero.push(element.getNombreGenero());
        });
        return nombreGenero;
    };
    /**
     * Setter para añadir el nombre de la playlist
     * @param nombre Nuevo nombre de la playlist
     */
    Playlist.prototype.setNombrePlaylist = function (nombre) {
        this.nombrePlaylist = nombre;
    };
    /**
     * Setter para añadir un conjunto de Canciones de la Playlist
     * @param canciones Conjunto de canciones a añadir
     */
    Playlist.prototype.setCanciones = function (canciones) {
        this.canciones = [];
        this.canciones = canciones;
    };
    /**
     * Setter para añadir la duración de la playlist
     * @param duracion Nuevo string con el valor de la duracion de la playlist
     */
    Playlist.prototype.setDuracion = function (duracion) {
        this.duracion = duracion;
    };
    /**
     * Setter para añadir el conjunto de GenerosMusicales
     * @param generos Conjunto de generos a añadir.
     */
    Playlist.prototype.setGeneros = function (generos) {
        this.generos = [];
        this.generos = generos;
    };
    return Playlist;
}());
exports.Playlist = Playlist;
