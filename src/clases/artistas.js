"use strict";
exports.__esModule = true;
exports.Artistas = void 0;
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
var Artistas = /** @class */ (function () {
    function Artistas(nombreArtista) {
        this.grupos = [];
        this.generos = [];
        this.albumes = [];
        this.canciones = [];
        this.nombreArtista = nombreArtista;
    }
    /**
/**
     * @function construirArtista Método para inicializar las propiedades restantes de
     * la clase Artista
     * @param canciones canciones del artista
     * @param oyentes oyentes del artista
     */
    Artistas.prototype.construirArtista = function (canciones, oyentes) {
        var _this = this;
        this.canciones = canciones;
        this.setOyentes(oyentes);
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
        this.generos.forEach(function (element) {
            element.autoSetArtistas(_this);
        });
    };
    /**
     * Getter del nombre del artista
     * @returns nombre del artista
     */
    Artistas.prototype.getNombreArtista = function () {
        return this.nombreArtista;
    };
    /**
     * Getter de los grupos del artista
     * @returns grupos del artista
     */
    Artistas.prototype.getGrupos = function () {
        var grupos_ = [];
        this.grupos.forEach(function (element) {
            grupos_.push(element.getNombreGrupo());
        });
        return grupos_;
    };
    /**
     * Getter de los géneros musicales
     * @returns géneros musicales
     */
    Artistas.prototype.getGeneros = function () {
        var generos_ = [];
        this.generos.forEach(function (element) {
            generos_.push(element.getNombreGenero());
        });
        return generos_;
    };
    /**
     * Getter de los albumes del artista
     * @returns albumes
     */
    Artistas.prototype.getAlbumes = function () {
        var albumes_ = [];
        this.albumes.forEach(function (element) {
            albumes_.push(element.getNombreAlbum());
        });
        return albumes_;
    };
    /**
     * Getter de las canciones del artista
     * @returns canciones del artista
     */
    Artistas.prototype.getCanciones = function () {
        var canciones_ = [];
        this.canciones.forEach(function (element) {
            canciones_.push(element.getNombreCancion());
        });
        return canciones_;
    };
    /**
     * Getter del número de oyentes del artista
     * @returns oyentes del artista
     */
    Artistas.prototype.getOyentes = function () {
        return this.oyentes;
    };
    /**
     * Getter del numero de grupos al que pertenece el artista
     * @returns el tamaño del atributo grupo
     */
    Artistas.prototype.getGrupoSize = function () {
        return this.grupos.length;
    };
    /**
     * Setter del nombre del artista
     * @param nombre del artista
     */
    Artistas.prototype.setNombreArtista = function (nombre) {
        this.nombreArtista = nombre;
    };
    /**
     * Setter del nombre del grupo
     * @param grupo del artista
     */
    Artistas.prototype.setGrupos = function (grupo) {
        this.grupos = [];
        this.grupos = grupo;
    };
    /**
 * Setter del grupo que invoca al artista
 * @param grupo del artista
 */
    Artistas.prototype.autoSetGrupos = function (grupo) {
        this.grupos.push(grupo);
    };
    /**
     * Setter del genero del artista
     * @param genero del artista
     */
    Artistas.prototype.setGeneros = function (genero) {
        this.generos = [];
        this.generos = genero;
    };
    /**
     * Setter de las canciones del artista
     * @param cancion del artista
     */
    Artistas.prototype.setCanciones = function (cancion) {
        this.canciones = [];
        this.canciones = cancion;
    };
    /**
     * Setter de los albumes del artista
     * @param album del artista
     */
    Artistas.prototype.setAlbumes = function (album) {
        var _this = this;
        this.albumes.forEach(function (element) {
            _this.albumes.pop();
        });
        album.forEach(function (element) {
            _this.albumes.push(element);
        });
    };
    /**
 * Setter de los albumes del artista que rellenan a un artista en la clase album
 * @param album del artista
 */
    Artistas.prototype.autoSetAlbumes = function (album) {
        this.albumes.push(album);
    };
    /**
     * Setter de los oyentes
     * @param oyentes mensuales
     */
    Artistas.prototype.setOyentes = function (oyentes) {
        var oyentesgrupales = 0;
        for (var i = 0; i < this.getGrupoSize(); i++) {
            oyentesgrupales = oyentesgrupales + this.grupos[i].getOyentes();
        }
        this.oyentes = oyentes + oyentesgrupales;
    };
    return Artistas;
}());
exports.Artistas = Artistas;
