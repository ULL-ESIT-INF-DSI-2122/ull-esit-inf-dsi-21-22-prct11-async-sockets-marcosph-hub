"use strict";
exports.__esModule = true;
exports.Grupos = void 0;
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
var Grupos = /** @class */ (function () {
    function Grupos(nombreGrupo) {
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
    Grupos.prototype.construirGrupo = function (artistas, yearGrupo, genero, albumes, oyentes) {
        var _this = this;
        this.artistas = artistas;
        this.yearGrupo = yearGrupo;
        this.genero = genero;
        this.albumes = albumes;
        this.oyentes = oyentes;
        genero.forEach(function (element) {
            element.autoSetGrupos(_this);
        });
        artistas.forEach(function (element) {
            element.autoSetGrupos(_this);
        });
    };
    /**
     * Getter del nombre de los grupos
     * @returns nombre del grupo
     */
    Grupos.prototype.getNombreGrupo = function () {
        return this.nombreGrupo;
    };
    /**
     * Getter de los artistas
     * @returns artistas
     */
    Grupos.prototype.getArtistas = function () {
        var artistas_ = [];
        this.artistas.forEach(function (element) {
            artistas_.push(element.getNombreArtista());
        });
        return artistas_;
    };
    /**
     * Getter del año de creación del grupo
     * @returns año del grupo
     */
    Grupos.prototype.getYearGrupo = function () {
        return this.yearGrupo;
    };
    /**
     * Getter de los géneros musicales
     * @returns géneros
     */
    Grupos.prototype.getGenero = function () {
        var generos = [];
        this.genero.forEach(function (element) {
            generos.push(element.getNombreGenero());
        });
        return generos;
    };
    /**
     * Getter de los albumes
     * @returns albumes
     */
    Grupos.prototype.getAlbumes = function () {
        return this.albumes;
    };
    /**
     * Getter de los oyentes mensuales
     * @returns oyentes mensuales
     */
    Grupos.prototype.getOyentes = function () {
        return this.oyentes;
    };
    /**
     * Setter del nombre del grupos
     * @param nombre del grupo
     */
    Grupos.prototype.setNombreGrupo = function (nombre) {
        this.nombreGrupo = nombre;
    };
    /**
     * Setter de los artistas
     * @param artista del grupo
     */
    Grupos.prototype.setArtistas = function (artistas) {
        this.artistas = [];
        this.artistas = artistas;
    };
    /**
     * Setter del año de creación del grupo
     * @param year del grupo
     */
    Grupos.prototype.setYearGrupo = function (year) {
        this.yearGrupo = year;
    };
    /**
     * Setter de los géneros del grupo
     * @param genero musicales
     */
    Grupos.prototype.setGenero = function (genero) {
        this.genero = [];
        this.genero = genero;
    };
    /**
     * Setter de los albumes del grupo
     * @param album del grupo
     */
    Grupos.prototype.setAlbumes = function (album) {
        this.albumes = [];
        this.albumes = album;
    };
    /**
     * Setter de los oyentes mensuales
     * @param oyente mensuales
     */
    Grupos.prototype.setOyentes = function (oyente) {
        this.oyentes = oyente;
    };
    return Grupos;
}());
exports.Grupos = Grupos;
