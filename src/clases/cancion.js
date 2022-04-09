"use strict";
exports.__esModule = true;
exports.Cancion = void 0;
/**
 * TRABAJO GRUPO L
 * @class Cancion contiene las especificaciones de las
 * distintas canciones
 * @param nombre nombre de la canción
 * @param autor nombre del autor de la canción
 * @param duracion duración de la canción
 * @param genero tipo GenerosMusicales de la canción
 * @param single boolean si es single o no
 * @param numReproducciones número de reproducciones de la canción
 */
var Cancion = /** @class */ (function () {
    /*private nombre: string;
    private autor: string;
    private duracion: number;
    private genero: GenerosMusicales;
    private single: boolean;
    private numReproducciones: number;*/
    function Cancion(nombre, autor, duracion, genero, single, numReproducciones) {
        var _this = this;
        this.nombre = nombre;
        this.autor = autor;
        this.duracion = duracion;
        this.genero = genero;
        this.single = single;
        this.numReproducciones = numReproducciones;
        genero.forEach(function (element) {
            element.autoSetCanciones(_this);
        });
    }
    /**
     * Getter del nombre de la canción
     * @returns nombre de la canción
     */
    Cancion.prototype.getNombreCancion = function () {
        return this.nombre;
    };
    /**
     * Getter del autor de la canción
     * @returns autor de la canción
     */
    Cancion.prototype.getAutorCancion = function () {
        return this.autor;
    };
    /**
     * Getter de la duración de la canción
     * @returns duración de la canción
     */
    Cancion.prototype.getDuracionCancion = function () {
        return this.duracion;
    };
    /**
     * Getter de la duración de la canción en segundos
     * @returns segundos de la duración en Number
     */
    Cancion.prototype.getDuracionCancionSecs = function () {
        var auxm = this.duracion.slice(0, this.duracion.search(':'));
        var auxs = this.duracion.slice(this.duracion.search(":") + 1, this.duracion.length);
        return (Number(auxs) + Number(auxm) * 60);
    };
    Cancion.prototype.getGenero = function () {
        return this.genero;
    };
    /**
     * Getter de los géneros musicales
     * @returns géneros musicales
     */
    Cancion.prototype.getGeneroMusical = function () {
        var generos = [];
        this.genero.forEach(function (element) {
            generos.push(element.getNombreGenero());
        });
        return generos;
    };
    /**
     * Getter de si una canción es un single o no
     * @returns si es un single o no
     */
    Cancion.prototype.getSingle = function () {
        return this.single;
    };
    /**
     * Getter número de reproducciones de una canción
     * @returns número de reproducciones de una canción
     */
    Cancion.prototype.getNumReproducciones = function () {
        return this.numReproducciones;
    };
    /**
     * Setter del nombre de la canción
     * @param nombre de la canción
     */
    Cancion.prototype.setNombreCancion = function (nombre) {
        this.nombre = nombre;
    };
    /**
     * Setter del nombre del autor de la canción
     * @param autor de la canción
     */
    Cancion.prototype.setAutorCancion = function (autor) {
        this.autor = autor;
    };
    /**
     * Setter de la duración de la canción
     * @param duracion de la canción
     */
    Cancion.prototype.setDuracionCancion = function (duracion) {
        this.duracion = duracion;
    };
    /**
     * Setter de los géneros musicales
     * @param genero array de generos musicales
     */
    Cancion.prototype.setGeneroMusical = function (genero) {
        this.genero = [];
        this.genero = genero;
    };
    /**
     * Setter de si la canción es un single o no
     * @param single o no
     */
    Cancion.prototype.setSingle = function (single) {
        this.single = single;
    };
    /**
     * Setter del número de reproducciones de una canción
     * @param reproducciones de una canción
     */
    Cancion.prototype.setNumReproducciones = function (reproducciones) {
        this.numReproducciones = reproducciones;
    };
    return Cancion;
}());
exports.Cancion = Cancion;
