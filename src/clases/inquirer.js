"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.menuPrincipal = exports.menuMod = exports.menuModCancion = exports.modCancion = exports.menuDel = exports.menuAdd = exports.addCancion = exports.addCancionGenero = exports.CommandsPartesCancion = exports.CommandsGenerosCanciones = exports.CommandsSingle = exports.CommandsClases = exports.Commands = void 0;
var inquirer_1 = require("inquirer");
var cancion_1 = require("../clases/cancion");
var index = require("../index");
/**
 * @enum Commands con los comandos de añadir, borrar, modificar y salir
 */
var Commands;
(function (Commands) {
    Commands["Add"] = "A\u00F1adir";
    Commands["Borrar"] = "Borrar";
    Commands["Modificar"] = "Modificar";
    Commands["Salir"] = "Salir";
})(Commands = exports.Commands || (exports.Commands = {}));
/**
 * @enum CommandsClases con la clase que se quiere añadir, borrar o modificar
 */
var CommandsClases;
(function (CommandsClases) {
    CommandsClases["Cancion"] = "Canci\u00F3n";
    CommandsClases["GeneroMusical"] = "G\u00E9nero musical";
    CommandsClases["Album"] = "Album";
    CommandsClases["Artista"] = "Artista";
    CommandsClases["Grupo"] = "Grupo";
})(CommandsClases = exports.CommandsClases || (exports.CommandsClases = {}));
var CommandsSingle;
(function (CommandsSingle) {
    CommandsSingle["Si"] = "Si";
    CommandsSingle["No"] = "No";
})(CommandsSingle = exports.CommandsSingle || (exports.CommandsSingle = {}));
var CommandsGenerosCanciones;
(function (CommandsGenerosCanciones) {
    CommandsGenerosCanciones["Rock"] = "Rock";
    CommandsGenerosCanciones["Pop"] = "Pop";
    CommandsGenerosCanciones["Rap"] = "Rap";
    CommandsGenerosCanciones["Electronica"] = "Electronica";
    CommandsGenerosCanciones["Regueton"] = "Regueton";
    CommandsGenerosCanciones["Hip_Hop"] = "Hip_Hop";
    CommandsGenerosCanciones["Metal"] = "Metal";
    CommandsGenerosCanciones["Flamenco"] = "Flamenco";
    CommandsGenerosCanciones["RyB"] = "RyB";
    CommandsGenerosCanciones["Soul"] = "Soul";
    CommandsGenerosCanciones["Salir"] = "Salir";
})(CommandsGenerosCanciones = exports.CommandsGenerosCanciones || (exports.CommandsGenerosCanciones = {}));
var CommandsPartesCancion;
(function (CommandsPartesCancion) {
    CommandsPartesCancion["Nombre"] = "Nombre";
    CommandsPartesCancion["Autor"] = "Autor";
    CommandsPartesCancion["GeneroMusical"] = "G\u00E9nero musical";
    CommandsPartesCancion["Duracion"] = "Duracion";
    CommandsPartesCancion["Single"] = "Single";
    CommandsPartesCancion["Reproducciones"] = "N\u00FAmero de reproducciones";
    CommandsPartesCancion["Salir"] = "Salir al men\u00FA principal";
})(CommandsPartesCancion = exports.CommandsPartesCancion || (exports.CommandsPartesCancion = {}));
function addCancionGenero(genero) {
    return __awaiter(this, void 0, void 0, function () {
        var generoCancion, _a, generoCancion1, _b, generoCancion2, _c, generoCancion3, _d, generoCancion4, _e, generoCancion5, _f, generoCancion6, _g, generoCancion7, _h, generoCancion8, _j, generoCancion9, _k, generoCancion10, _l;
        return __generator(this, function (_m) {
            switch (_m.label) {
                case 0: return [4 /*yield*/, inquirer_1["default"].prompt({
                        type: "list",
                        name: "generoCancion",
                        message: "Introduce el/los generos musicales: ",
                        choices: Object.values(CommandsGenerosCanciones)
                    })];
                case 1:
                    generoCancion = _m.sent();
                    _a = generoCancion["generoCancion"];
                    switch (_a) {
                        case CommandsGenerosCanciones.Electronica: return [3 /*break*/, 2];
                        case CommandsGenerosCanciones.Pop: return [3 /*break*/, 8];
                        case CommandsGenerosCanciones.Metal: return [3 /*break*/, 14];
                        case CommandsGenerosCanciones.Flamenco: return [3 /*break*/, 20];
                        case CommandsGenerosCanciones.Rap: return [3 /*break*/, 26];
                        case CommandsGenerosCanciones.Regueton: return [3 /*break*/, 32];
                        case CommandsGenerosCanciones.Hip_Hop: return [3 /*break*/, 38];
                        case CommandsGenerosCanciones.RyB: return [3 /*break*/, 44];
                        case CommandsGenerosCanciones.Rock: return [3 /*break*/, 50];
                        case CommandsGenerosCanciones.Soul: return [3 /*break*/, 56];
                    }
                    return [3 /*break*/, 62];
                case 2:
                    genero.push(index.Electronica);
                    return [4 /*yield*/, inquirer_1["default"].prompt({
                            type: "list",
                            name: "generoCanciones",
                            message: "La canción tiene más generos?: ",
                            choices: Object.values(CommandsSingle)
                        })];
                case 3:
                    generoCancion1 = _m.sent();
                    _b = generoCancion1["generoCanciones"];
                    switch (_b) {
                        case CommandsSingle.Si: return [3 /*break*/, 4];
                        case CommandsSingle.No: return [3 /*break*/, 6];
                    }
                    return [3 /*break*/, 7];
                case 4: return [4 /*yield*/, addCancionGenero(genero)];
                case 5:
                    _m.sent();
                    return [3 /*break*/, 7];
                case 6: return [3 /*break*/, 7];
                case 7: return [3 /*break*/, 62];
                case 8:
                    genero.push(index.Pop);
                    return [4 /*yield*/, inquirer_1["default"].prompt({
                            type: "list",
                            name: "generoCanciones",
                            message: "La canción tiene más generos?: ",
                            choices: Object.values(CommandsSingle)
                        })];
                case 9:
                    generoCancion2 = _m.sent();
                    _c = generoCancion2["generoCanciones"];
                    switch (_c) {
                        case CommandsSingle.Si: return [3 /*break*/, 10];
                        case CommandsSingle.No: return [3 /*break*/, 12];
                    }
                    return [3 /*break*/, 13];
                case 10: return [4 /*yield*/, addCancionGenero(genero)];
                case 11:
                    _m.sent();
                    return [3 /*break*/, 13];
                case 12: return [3 /*break*/, 13];
                case 13: return [3 /*break*/, 62];
                case 14:
                    genero.push(index.Metal);
                    return [4 /*yield*/, inquirer_1["default"].prompt({
                            type: "list",
                            name: "generoCanciones",
                            message: "La canción tiene más generos?: ",
                            choices: Object.values(CommandsSingle)
                        })];
                case 15:
                    generoCancion3 = _m.sent();
                    _d = generoCancion3["generoCanciones"];
                    switch (_d) {
                        case CommandsSingle.Si: return [3 /*break*/, 16];
                        case CommandsSingle.No: return [3 /*break*/, 18];
                    }
                    return [3 /*break*/, 19];
                case 16: return [4 /*yield*/, addCancionGenero(genero)];
                case 17:
                    _m.sent();
                    return [3 /*break*/, 19];
                case 18: return [3 /*break*/, 19];
                case 19: return [3 /*break*/, 62];
                case 20:
                    genero.push(index.Flamenco);
                    return [4 /*yield*/, inquirer_1["default"].prompt({
                            type: "list",
                            name: "generoCanciones",
                            message: "La canción tiene más generos?: ",
                            choices: Object.values(CommandsSingle)
                        })];
                case 21:
                    generoCancion4 = _m.sent();
                    _e = generoCancion4["generoCanciones"];
                    switch (_e) {
                        case CommandsSingle.Si: return [3 /*break*/, 22];
                        case CommandsSingle.No: return [3 /*break*/, 24];
                    }
                    return [3 /*break*/, 25];
                case 22: return [4 /*yield*/, addCancionGenero(genero)];
                case 23:
                    _m.sent();
                    return [3 /*break*/, 25];
                case 24: return [3 /*break*/, 25];
                case 25: return [3 /*break*/, 62];
                case 26:
                    genero.push(index.Rap);
                    return [4 /*yield*/, inquirer_1["default"].prompt({
                            type: "list",
                            name: "generoCanciones",
                            message: "La canción tiene más generos?: ",
                            choices: Object.values(CommandsSingle)
                        })];
                case 27:
                    generoCancion5 = _m.sent();
                    _f = generoCancion5["generoCanciones"];
                    switch (_f) {
                        case CommandsSingle.Si: return [3 /*break*/, 28];
                        case CommandsSingle.No: return [3 /*break*/, 30];
                    }
                    return [3 /*break*/, 31];
                case 28: return [4 /*yield*/, addCancionGenero(genero)];
                case 29:
                    _m.sent();
                    return [3 /*break*/, 31];
                case 30: return [3 /*break*/, 31];
                case 31: return [3 /*break*/, 62];
                case 32:
                    genero.push(index.Regueton);
                    return [4 /*yield*/, inquirer_1["default"].prompt({
                            type: "list",
                            name: "generoCanciones",
                            message: "La canción tiene más generos?: ",
                            choices: Object.values(CommandsSingle)
                        })];
                case 33:
                    generoCancion6 = _m.sent();
                    _g = generoCancion6["generoCanciones"];
                    switch (_g) {
                        case CommandsSingle.Si: return [3 /*break*/, 34];
                        case CommandsSingle.No: return [3 /*break*/, 36];
                    }
                    return [3 /*break*/, 37];
                case 34: return [4 /*yield*/, addCancionGenero(genero)];
                case 35:
                    _m.sent();
                    return [3 /*break*/, 37];
                case 36: return [3 /*break*/, 37];
                case 37: return [3 /*break*/, 62];
                case 38:
                    genero.push(index.Hip_Hop);
                    return [4 /*yield*/, inquirer_1["default"].prompt({
                            type: "list",
                            name: "generoCanciones",
                            message: "La canción tiene más generos?: ",
                            choices: Object.values(CommandsSingle)
                        })];
                case 39:
                    generoCancion7 = _m.sent();
                    _h = generoCancion7["generoCanciones"];
                    switch (_h) {
                        case CommandsSingle.Si: return [3 /*break*/, 40];
                        case CommandsSingle.No: return [3 /*break*/, 42];
                    }
                    return [3 /*break*/, 43];
                case 40: return [4 /*yield*/, addCancionGenero(genero)];
                case 41:
                    _m.sent();
                    return [3 /*break*/, 43];
                case 42: return [3 /*break*/, 43];
                case 43: return [3 /*break*/, 62];
                case 44:
                    genero.push(index.RyB);
                    return [4 /*yield*/, inquirer_1["default"].prompt({
                            type: "list",
                            name: "generoCanciones",
                            message: "La canción tiene más generos?: ",
                            choices: Object.values(CommandsSingle)
                        })];
                case 45:
                    generoCancion8 = _m.sent();
                    _j = generoCancion8["generoCanciones"];
                    switch (_j) {
                        case CommandsSingle.Si: return [3 /*break*/, 46];
                        case CommandsSingle.No: return [3 /*break*/, 48];
                    }
                    return [3 /*break*/, 49];
                case 46: return [4 /*yield*/, addCancionGenero(genero)];
                case 47:
                    _m.sent();
                    return [3 /*break*/, 49];
                case 48: return [3 /*break*/, 49];
                case 49: return [3 /*break*/, 62];
                case 50:
                    genero.push(index.Rock);
                    return [4 /*yield*/, inquirer_1["default"].prompt({
                            type: "list",
                            name: "generoCanciones",
                            message: "La canción tiene más generos?: ",
                            choices: Object.values(CommandsSingle)
                        })];
                case 51:
                    generoCancion9 = _m.sent();
                    _k = generoCancion9["generoCanciones"];
                    switch (_k) {
                        case CommandsSingle.Si: return [3 /*break*/, 52];
                        case CommandsSingle.No: return [3 /*break*/, 54];
                    }
                    return [3 /*break*/, 55];
                case 52: return [4 /*yield*/, addCancionGenero(genero)];
                case 53:
                    _m.sent();
                    return [3 /*break*/, 55];
                case 54: return [3 /*break*/, 55];
                case 55: return [3 /*break*/, 62];
                case 56:
                    genero.push(index.Soul);
                    return [4 /*yield*/, inquirer_1["default"].prompt({
                            type: "list",
                            name: "generoCanciones",
                            message: "La canción tiene más generos?: ",
                            choices: Object.values(CommandsSingle)
                        })];
                case 57:
                    generoCancion10 = _m.sent();
                    _l = generoCancion10["generoCanciones"];
                    switch (_l) {
                        case CommandsSingle.Si: return [3 /*break*/, 58];
                        case CommandsSingle.No: return [3 /*break*/, 60];
                    }
                    return [3 /*break*/, 61];
                case 58: return [4 /*yield*/, addCancionGenero(genero)];
                case 59:
                    _m.sent();
                    return [3 /*break*/, 61];
                case 60: return [3 /*break*/, 61];
                case 61: return [3 /*break*/, 62];
                case 62: 
                //console.log(`dentro`, genero);
                return [2 /*return*/, genero];
            }
        });
    });
}
exports.addCancionGenero = addCancionGenero;
/**
 * @function addcancion encar
 */
function addCancion() {
    return __awaiter(this, void 0, void 0, function () {
        var nombreCancion, nombreAutor, duracionCancion, genero_, single_, singleCancion, numReproducciones, nombre_, autor_, duracion_, reprod_, cancion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1["default"].prompt({
                        type: "input",
                        name: "nombreCancion",
                        message: "Introduce el nombre de la cancion: "
                    })];
                case 1:
                    nombreCancion = _a.sent();
                    return [4 /*yield*/, inquirer_1["default"].prompt({
                            type: "input",
                            name: "nombreAutor",
                            message: "Introduce el nombre del autor: "
                        })];
                case 2:
                    nombreAutor = _a.sent();
                    return [4 /*yield*/, inquirer_1["default"].prompt({
                            type: "input",
                            name: "duracionCancion",
                            message: "Introduce la duracion en el formato \"min:seg\" : "
                        })];
                case 3:
                    duracionCancion = _a.sent();
                    genero_ = [];
                    //genero_= await addCancionGenero();
                    return [4 /*yield*/, addCancionGenero(genero_)];
                case 4:
                    //genero_= await addCancionGenero();
                    _a.sent();
                    single_ = false;
                    return [4 /*yield*/, inquirer_1["default"].prompt({
                            type: "list",
                            name: "singleCancion",
                            message: "¿Es un single?: ",
                            choices: Object.values(CommandsSingle)
                        })];
                case 5:
                    singleCancion = _a.sent();
                    switch (singleCancion["singleCancion"]) {
                        case CommandsSingle.Si:
                            single_ = true;
                            break;
                        case CommandsSingle.No:
                            single_ = false;
                            break;
                    }
                    return [4 /*yield*/, inquirer_1["default"].prompt({
                            type: "number",
                            name: "numReproducciones",
                            message: "Introduce el numero de reproducciones: "
                        })];
                case 6:
                    numReproducciones = _a.sent();
                    nombre_ = nombreCancion["nombreCancion"];
                    autor_ = nombreAutor["nombreAutor"];
                    duracion_ = duracionCancion["duracionCancion"];
                    reprod_ = numReproducciones["numReproducciones"];
                    cancion = new cancion_1.Cancion(nombre_, autor_, duracion_, genero_, single_, reprod_);
                    console.clear();
                    menuPrincipal();
                    return [2 /*return*/];
            }
        });
    });
}
exports.addCancion = addCancion;
/**
 * @function menuAdd menu para añadir cancion, género, álbum, artista o grupo
 */
function menuAdd() {
    return __awaiter(this, void 0, void 0, function () {
        var respuestaAdd;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1["default"].prompt({
                        type: 'list',
                        name: "command",
                        message: "Elige que quieres a\u00F1adir",
                        choices: Object.values(CommandsClases)
                    })];
                case 1:
                    respuestaAdd = _a.sent();
                    switch (respuestaAdd["command"]) {
                        case CommandsClases.Cancion:
                            addCancion();
                            break;
                        case CommandsClases.GeneroMusical:
                            //addGeneroMusical();
                            console.log("a\u00F1adiendo una genero musical");
                            break;
                        case CommandsClases.Album:
                            //addAlbum();
                            console.log("a\u00F1adiendo una album");
                            break;
                        case CommandsClases.Artista:
                            //addArtista();
                            console.log("a\u00F1adiendo una artista");
                            break;
                        case CommandsClases.Grupo:
                            //addGrupo();
                            console.log("a\u00F1adiendo una grupo");
                            break;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.menuAdd = menuAdd;
/**
 * @function menuDel menu para borrar cancion, género, álbum, artista o grupo
 */
function menuDel() {
    return __awaiter(this, void 0, void 0, function () {
        var respuestaDel;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1["default"].prompt({
                        type: 'list',
                        name: "command",
                        message: "Elige que quieres eliminar",
                        choices: Object.values(CommandsClases)
                    })];
                case 1:
                    respuestaDel = _a.sent();
                    switch (respuestaDel["command"]) {
                        case CommandsClases.Cancion:
                            //delCancion();
                            console.log("eliminndo una cancion");
                            break;
                        case CommandsClases.GeneroMusical:
                            //delGeneroMusical();
                            console.log("eliminndo una genero musical");
                            break;
                        case CommandsClases.Album:
                            //delAlbum();
                            console.log("eliminndo una album");
                            break;
                        case CommandsClases.Artista:
                            //delArtista();
                            console.log("eliminndo una artista");
                            break;
                        case CommandsClases.Grupo:
                            //delGrupo();
                            console.log("eliminndo una grupo");
                            break;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.menuDel = menuDel;
function modCancion(numero) {
    return __awaiter(this, void 0, void 0, function () {
        var cancionModificar, _a, nombreCancion, nombreCancion_, nombreAutor, nombreAutor_, duracionCancion, duracion_, genero_, single_, singleCancion, numReproducciones, reprod_;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, inquirer_1["default"].prompt({
                        type: 'list',
                        name: "modificar",
                        message: "\u00BFQu\u00E9 quieres modificar de la cancion?",
                        choices: Object.values(CommandsPartesCancion)
                    })];
                case 1:
                    cancionModificar = _b.sent();
                    _a = cancionModificar["modificar"];
                    switch (_a) {
                        case CommandsPartesCancion.Nombre: return [3 /*break*/, 2];
                        case CommandsPartesCancion.Autor: return [3 /*break*/, 5];
                        case CommandsPartesCancion.Duracion: return [3 /*break*/, 8];
                        case CommandsPartesCancion.GeneroMusical: return [3 /*break*/, 11];
                        case CommandsPartesCancion.Single: return [3 /*break*/, 14];
                        case CommandsPartesCancion.Reproducciones: return [3 /*break*/, 17];
                    }
                    return [3 /*break*/, 20];
                case 2: return [4 /*yield*/, inquirer_1["default"].prompt({
                        type: "input",
                        name: "nombreCancion",
                        message: "Introduce el nombre de la cancion: "
                    })];
                case 3:
                    nombreCancion = _b.sent();
                    nombreCancion_ = nombreCancion["nombreCancion"];
                    index.canciones[numero].setNombreCancion(nombreCancion_);
                    return [4 /*yield*/, modCancion(numero)];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 20];
                case 5: return [4 /*yield*/, inquirer_1["default"].prompt({
                        type: "input",
                        name: "nombreAutor",
                        message: "Introduce el nombre del autor: "
                    })];
                case 6:
                    nombreAutor = _b.sent();
                    nombreAutor_ = nombreAutor["nombreAutor"];
                    index.canciones[numero].setAutorCancion(nombreAutor_);
                    return [4 /*yield*/, modCancion(numero)];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 20];
                case 8: return [4 /*yield*/, inquirer_1["default"].prompt({
                        type: "input",
                        name: "duracionCancion",
                        message: "Introduce la duracion en el formato \"min:seg\" : "
                    })];
                case 9:
                    duracionCancion = _b.sent();
                    duracion_ = duracionCancion["duracionCancion"];
                    index.canciones[numero].setDuracionCancion(duracion_);
                    return [4 /*yield*/, modCancion(numero)];
                case 10:
                    _b.sent();
                    return [3 /*break*/, 20];
                case 11:
                    genero_ = [];
                    return [4 /*yield*/, addCancionGenero(genero_)];
                case 12:
                    _b.sent();
                    index.canciones[numero].setGeneroMusical(genero_);
                    return [4 /*yield*/, modCancion(numero)];
                case 13:
                    _b.sent();
                    return [3 /*break*/, 20];
                case 14:
                    single_ = false;
                    return [4 /*yield*/, inquirer_1["default"].prompt({
                            type: "list",
                            name: "singleCancion",
                            message: "¿Es un single?: ",
                            choices: Object.values(CommandsSingle)
                        })];
                case 15:
                    singleCancion = _b.sent();
                    switch (singleCancion["singleCancion"]) {
                        case CommandsSingle.Si:
                            single_ = true;
                            break;
                        case CommandsSingle.No:
                            single_ = false;
                            break;
                    }
                    index.canciones[numero].setSingle(single_);
                    return [4 /*yield*/, modCancion(numero)];
                case 16:
                    _b.sent();
                    return [3 /*break*/, 20];
                case 17: return [4 /*yield*/, inquirer_1["default"].prompt({
                        type: "number",
                        name: "numReproducciones",
                        message: "Introduce el numero de reproducciones: "
                    })];
                case 18:
                    numReproducciones = _b.sent();
                    reprod_ = numReproducciones["numReproducciones"];
                    index.canciones[numero].setNumReproducciones(reprod_);
                    return [4 /*yield*/, modCancion(numero)];
                case 19:
                    _b.sent();
                    return [3 /*break*/, 20];
                case 20:
                    console.clear();
                    menuPrincipal();
                    return [2 /*return*/];
            }
        });
    });
}
exports.modCancion = modCancion;
function menuModCancion() {
    return __awaiter(this, void 0, void 0, function () {
        var cancionModificada, nombreCancionModificar, numeroCancion, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1["default"].prompt({
                        type: 'input',
                        name: "modificar",
                        message: "Introduce el nombre de la canci\u00F3n que quieres modificar"
                    })];
                case 1:
                    cancionModificada = _a.sent();
                    nombreCancionModificar = cancionModificada["modificar"];
                    numeroCancion = -1;
                    for (i = 0; i < index.canciones.length; i++) {
                        if (index.canciones[i].getNombreCancion() === nombreCancionModificar) {
                            numeroCancion = i;
                            break;
                        }
                    }
                    if (numeroCancion === -1) {
                        console.log("No existe una cancion con ese nombre");
                        menuPrincipal();
                    }
                    else {
                        modCancion(numeroCancion);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.menuModCancion = menuModCancion;
/**
 * @function menuMod menu para modificar cancion, género, álbum, artista o grupo
 */
function menuMod() {
    return __awaiter(this, void 0, void 0, function () {
        var respuestaMod;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1["default"].prompt({
                        type: 'list',
                        name: "command",
                        message: "Elige que quieres modificar",
                        choices: Object.values(CommandsClases)
                    })];
                case 1:
                    respuestaMod = _a.sent();
                    switch (respuestaMod["command"]) {
                        case CommandsClases.Cancion:
                            menuModCancion();
                            break;
                        case CommandsClases.GeneroMusical:
                            //modGeneroMusical();
                            console.log("modificando una genero musical");
                            break;
                        case CommandsClases.Album:
                            //modAlbum();
                            console.log("modificando una album");
                            break;
                        case CommandsClases.Artista:
                            console.log("modificando una artista");
                            //modArtista();
                            break;
                        case CommandsClases.Grupo:
                            console.log("modificando una grupo");
                            //modGrupo();
                            break;
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.menuMod = menuMod;
/**
 * @function menuPrincipal menu principal donde se manejan los submenus y los comandos
 * @returns
 */
function menuPrincipal() {
    return __awaiter(this, void 0, void 0, function () {
        var respuesta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, inquirer_1["default"].prompt({
                        type: 'list',
                        name: "command",
                        message: "Elige opci\u00F3n",
                        choices: Object.values(Commands)
                    })];
                case 1:
                    respuesta = _a.sent();
                    switch (respuesta["command"]) {
                        case Commands.Add:
                            menuAdd();
                            break;
                        case Commands.Borrar:
                            menuDel();
                            break;
                        case Commands.Modificar:
                            menuMod();
                            break;
                        case Commands.Salir:
                            return [2 /*return*/];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.menuPrincipal = menuPrincipal;
menuPrincipal();
