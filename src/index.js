"use strict";
exports.__esModule = true;
exports.playlists = exports.playlist1 = exports.albumes = exports.album1 = exports.grupos = exports.grupo1 = exports.artistas = exports.artista1 = exports.canciones = exports.cancion2 = exports.cancion1 = exports.generos = exports.Soul = exports.RyB = exports.Flamenco = exports.Metal = exports.Hip_Hop = exports.Regueton = exports.Electronica = exports.Rap = exports.Pop = exports.Rock = void 0;
var album_1 = require("./clases/album");
var artistas_1 = require("./clases/artistas");
var cancion_1 = require("./clases/cancion");
var generosMusicales_1 = require("./clases/generosMusicales");
var grupos_1 = require("./clases/grupos");
var playlist_1 = require("./clases/playlist");
//10 generos musicales
exports.Rock = new generosMusicales_1.GenerosMusicales("Rock"); //6
exports.Pop = new generosMusicales_1.GenerosMusicales("Pop"); //6
exports.Rap = new generosMusicales_1.GenerosMusicales("Rap"); //6
exports.Electronica = new generosMusicales_1.GenerosMusicales("Electronica"); //6
exports.Regueton = new generosMusicales_1.GenerosMusicales("Regueton"); //6
exports.Hip_Hop = new generosMusicales_1.GenerosMusicales("Hip Hop"); //8
exports.Metal = new generosMusicales_1.GenerosMusicales("Metal"); //6
exports.Flamenco = new generosMusicales_1.GenerosMusicales("Flamenco"); //6
exports.RyB = new generosMusicales_1.GenerosMusicales("RyB"); //8
exports.Soul = new generosMusicales_1.GenerosMusicales("Soul"); //7
exports.generos = [exports.Rock, exports.Pop, exports.Rap, exports.Electronica, exports.Regueton, exports.Hip_Hop, exports.Metal, exports.Flamenco, exports.RyB, exports.Soul];
// 50 canciones, aprox. 5 de cada genero
exports.cancion1 = new cancion_1.Cancion('Pulling Teeth', 'Alan Ryker', '4:23', [exports.Metal], false, 2100000);
exports.cancion2 = new cancion_1.Cancion('Thriller', 'Michael Jackson', '5:58', [exports.Pop], false, 825000000);
var cancion3 = new cancion_1.Cancion('Billie Jean', 'Michael Jackson', '4:55', [exports.Rock], false, 1154580120);
var cancion4 = new cancion_1.Cancion("Wanna Be Startin' Something", 'Michael Jackson', '6:06', [exports.RyB, exports.Soul], false, 10850000);
var cancion5 = new cancion_1.Cancion('Baby Be Mine', 'Michael Jackson', '4:37', [exports.RyB, exports.Soul], false, 4580000);
var cancion6 = new cancion_1.Cancion('The Girl Is Mine', 'Michael Jackson', '4:10', [exports.RyB, exports.Soul], false, 120000000);
var cancion7 = new cancion_1.Cancion('Beat It', 'Michael Jackson', '4:00', [exports.RyB, exports.Soul], false, 1811000000);
var cancion8 = new cancion_1.Cancion('Human Nature', 'Michael Jackson', '4:59', [exports.RyB, exports.Soul], false, 810959778);
var cancion9 = new cancion_1.Cancion('Pretty Young Thing', 'Michael Jackson', '4:07', [exports.RyB, exports.Soul], false, 136723704);
var cancion10 = new cancion_1.Cancion('The Lady in My Life', 'Michael Jackson', '5:02', [exports.RyB, exports.Soul], false, 15000000);
var cancion11 = new cancion_1.Cancion('Malamente', 'Rosalía', '2:49', [exports.Flamenco, exports.Pop], false, 156000000);
var cancion12 = new cancion_1.Cancion('Preso', 'Rosalía', '2:48', [exports.Pop], false, 165000000);
var cancion13 = new cancion_1.Cancion('Di mi nombre', 'Rosalía', '3:01', [exports.Rap], false, 81000000);
var cancion14 = new cancion_1.Cancion('Mother Love', 'Queen', '4:50', [exports.Rock], false, 3300000);
var cancion15 = new cancion_1.Cancion('Its A Beautiful Day', 'Queen', '3:19', [exports.Rock, exports.Metal], false, 3000000);
var cancion16 = new cancion_1.Cancion('I Was Born To Love You', 'Queen', '4:56', [exports.Rock, exports.Metal], false, 64000000);
var cancion17 = new cancion_1.Cancion('Living on my own', 'Freddie Mercury', '3:08', [exports.Rock, exports.Pop], false, 32000000);
var cancion18 = new cancion_1.Cancion('Ojalá', 'Beret', '3:43', [exports.Rap, exports.Pop], false, 197000000);
var cancion19 = new cancion_1.Cancion('Master Of Puppets', 'Metallica', '8:36', [exports.Metal], false, 29000000);
var cancion20 = new cancion_1.Cancion('Battery', 'Metallica', '5:13', [exports.Metal], false, 1500000);
var cancion21 = new cancion_1.Cancion('Disposable Heroes', 'Metallica', '8:17', [exports.Metal], false, 191000);
var cancion22 = new cancion_1.Cancion('Rumba en el cielo', 'Los Chunguitos', '4:33', [exports.Flamenco], false, 684000);
var cancion23 = new cancion_1.Cancion('Yo me lo tengo que beber', 'Los Chunguitos', '3:45', [exports.Flamenco], false, 231000);
var cancion24 = new cancion_1.Cancion('Tinto de verano', 'Los Chunguitos', '3:24', [exports.Flamenco], false, 141000);
var cancion25 = new cancion_1.Cancion('Borriquito', 'Peret', '3:23', [exports.Flamenco], false, 2200000);
var cancion26 = new cancion_1.Cancion('El muerto vivo', 'Peret', '4:51', [exports.Flamenco], false, 8000000);
var cancion27 = new cancion_1.Cancion('The Prodigy', 'The Prodigy', '2:53', [exports.Electronica], false, 2100000);
var cancion28 = new cancion_1.Cancion('Nasty', 'The Prodigy', '3:42', [exports.Electronica], false, 15217880);
var cancion29 = new cancion_1.Cancion('Rebel Radio', 'The Prodigy', '3:53', [exports.Electronica], false, 1000000);
var cancion30 = new cancion_1.Cancion('Diez mil porqués', 'Beret', '3:32', [exports.Rap], false, 40000000);
var cancion31 = new cancion_1.Cancion('Esencial', 'Beret', '2:40', [exports.Rap, exports.Pop], false, 23000000);
var cancion32 = new cancion_1.Cancion('Yo te esperaré', 'Cali y El Dandee', '4:14', [exports.Regueton], false, 469000000);
var cancion33 = new cancion_1.Cancion('Te doy mi corazón', 'Cali y El Dandee', '4:01', [exports.Regueton], false, 4600000);
var cancion34 = new cancion_1.Cancion('La playa', 'Cali y El Dandee', '3:43', [exports.Regueton], false, 5600000);
var cancion35 = new cancion_1.Cancion('Many Men', '50Cent', '4:58', [exports.Hip_Hop], false, 388000000);
var cancion36 = new cancion_1.Cancion("Don't Push me", '50Cent', '4:09', [exports.Hip_Hop], false, 2100000);
var cancion37 = new cancion_1.Cancion('Almas Gemelas', 'Myke Towers', '4:49', [exports.Regueton], false, 61000000);
var cancion38 = new cancion_1.Cancion('Rutina', 'Myke Towers', '3:38', [exports.Regueton], false, 44641453);
var cancion39 = new cancion_1.Cancion('Culture', 'Migos', '4:45', [exports.Hip_Hop], false, 1300000);
var cancion40 = new cancion_1.Cancion('T-Shirt', 'Migos', '4:53', [exports.Hip_Hop], false, 327000000);
var cancion41 = new cancion_1.Cancion('Get Right Witcha', 'Migos', '4:18', [exports.Hip_Hop], false, 160000000);
// Singles
var cancion42 = new cancion_1.Cancion('Cóseme', 'Beret', '3:22', [exports.Rap], true, 64000000);
var cancion43 = new cancion_1.Cancion('Plan A', 'Paulo Londra', '3:06', [exports.Rock], true, 63000000);
var cancion44 = new cancion_1.Cancion('Face My Fears', 'Skrillex', '3:38', [exports.Electronica], true, 19943008);
var cancion45 = new cancion_1.Cancion('Tubular Bells', 'Mike Oldfield', '5:33', [exports.Electronica], true, 116000);
var cancion46 = new cancion_1.Cancion('Outkast', 'BoB', '4:25', [exports.Hip_Hop], true, 20011803);
var cancion47 = new cancion_1.Cancion('Lose Yourself', 'Eminem', '5:24', [exports.Hip_Hop, exports.Rap], true, 1200000000000);
var cancion48 = new cancion_1.Cancion('Solita', 'Ozuna', '5:50', [exports.Electronica], false, 609000000);
var cancion49 = new cancion_1.Cancion('Rumbatón', 'Daddy Yankee', '4:15', [exports.Regueton], false, 1154580120);
var cancion50 = new cancion_1.Cancion('Bad', 'Michael Jackson', '4:20', [exports.RyB, exports.Hip_Hop], true, 401000000);
exports.canciones = [exports.cancion1, exports.cancion2, cancion3, cancion4, cancion5, cancion6, cancion7, cancion8, cancion9, cancion10, cancion11, cancion12, cancion13, cancion14, cancion15, cancion16, cancion17, cancion18, cancion19, cancion20, cancion21, cancion22, cancion23, cancion24, cancion25, cancion26, cancion27, cancion28, cancion29, cancion30, cancion31, cancion32, cancion33, cancion34, cancion35, cancion36, cancion37, cancion38, cancion39, cancion40, cancion41, cancion42, cancion43, cancion44, cancion45, cancion46, cancion47, cancion48, cancion49, cancion50];
// Artistas construidos con el nombre solo
exports.artista1 = new artistas_1.Artistas('Michael Jackson');
var artista2 = new artistas_1.Artistas('Freddie Mercury');
var artista3 = new artistas_1.Artistas('Alan Ryker');
var artista4 = new artistas_1.Artistas('Rosalía');
var artista5 = new artistas_1.Artistas('Beret');
var artista6 = new artistas_1.Artistas('Peret');
var artista7 = new artistas_1.Artistas('Myke Towers');
var artista8 = new artistas_1.Artistas('Paulo Londra');
var artista9 = new artistas_1.Artistas('Skrillex');
var artista10 = new artistas_1.Artistas('Mike Oldfield');
var artista11 = new artistas_1.Artistas('BoB');
var artista12 = new artistas_1.Artistas('Eminem');
var artista13 = new artistas_1.Artistas('Ozuna');
var artista14 = new artistas_1.Artistas('Daddy Yankee');
var artista15 = new artistas_1.Artistas('50Cent');
// Metallica componentes
var artista16 = new artistas_1.Artistas('James Heltfield');
var artista17 = new artistas_1.Artistas('Cliff Burton');
var artista18 = new artistas_1.Artistas('Lars Ulrich');
var artista19 = new artistas_1.Artistas('Dave Mustaine');
var artista20 = new artistas_1.Artistas('Kirk Hammett');
var artista21 = new artistas_1.Artistas('Jason Newsted');
var artista22 = new artistas_1.Artistas('Robert Trujillo');
var artista23 = new artistas_1.Artistas('Ron McGovney');
// Queen componentes
var artista24 = new artistas_1.Artistas('Brian May');
var artista25 = new artistas_1.Artistas('John Deacon');
var artista26 = new artistas_1.Artistas('Roger Taylor');
var artista27 = new artistas_1.Artistas('Mike Grose');
var artista28 = new artistas_1.Artistas('Doug Bogie');
var artista29 = new artistas_1.Artistas('Queen Barry Mitchell');
//Los Chunguitos componentes
var artista30 = new artistas_1.Artistas('Enrique Salazar');
var artista31 = new artistas_1.Artistas('Juan Salazar');
var artista32 = new artistas_1.Artistas('José Salazar');
//The Prodigy componentes
var artista33 = new artistas_1.Artistas('Keith Flint');
var artista34 = new artistas_1.Artistas('Liam Howlett');
var artista35 = new artistas_1.Artistas('Maxim Reality');
var artista36 = new artistas_1.Artistas('Sharky');
//Cali y El Dandee componentes
var artista37 = new artistas_1.Artistas('Alejandro Rengifo');
var artista38 = new artistas_1.Artistas('Mauricio Rengifo');
//Migos componentes
var artista39 = new artistas_1.Artistas('Quavo');
var artista40 = new artistas_1.Artistas('Offset');
var artista41 = new artistas_1.Artistas('Takeoff');
exports.artistas = [exports.artista1, artista2, artista3, artista4, artista5, artista6, artista7, artista8, artista9, artista10, artista11, artista12, artista13, artista14, artista15, artista16, artista17, artista18, artista19, artista20, artista21, artista22, artista23, artista24, artista25, artista26, artista27, artista28, artista29, artista30, artista31, artista32, artista33, artista34, artista35, artista36, artista37, artista38, artista39, artista40, artista41];
// Grupos construidos con el nombre solo
exports.grupo1 = new grupos_1.Grupos("Metallica");
var grupo2 = new grupos_1.Grupos("Queen");
var grupo3 = new grupos_1.Grupos("Los Chunguitos");
var grupo4 = new grupos_1.Grupos("The Prodigy");
var grupo5 = new grupos_1.Grupos("Cali y El Dandee");
var grupo6 = new grupos_1.Grupos("Migos");
exports.grupos = [exports.grupo1, grupo2, grupo3, grupo4, grupo5, grupo6];
// Album puede construirse con todo 
exports.album1 = new album_1.Album("Thriller", exports.artista1, [exports.Rock, exports.RyB, exports.Soul, exports.Pop], 1982, [exports.cancion2, cancion3, cancion4, cancion5, cancion6, cancion7, cancion8, cancion9, cancion10]);
var album2 = new album_1.Album("The Day Is My Enemy", grupo4, [exports.Electronica], 2015, [cancion27, cancion28, cancion29]);
var album3 = new album_1.Album("El Mal Querer", artista4, [exports.Flamenco, exports.Pop, exports.Rap], 2018, [cancion11, cancion12, cancion13]);
var album4 = new album_1.Album("Made in Heaven", grupo2, [exports.Rock, exports.Metal], 1995, [cancion14, cancion15, cancion16]);
var album5 = new album_1.Album("Prisma", artista5, [exports.Rap, exports.Pop], 2019, [cancion18, cancion30, cancion31]);
var album6 = new album_1.Album("Master Of Puppets", exports.grupo1, [exports.Metal], 1986, [cancion19, cancion20, cancion21]);
var album7 = new album_1.Album("Morir de amor", grupo3, [exports.Flamenco], 2003, [cancion22, cancion23, cancion24]);
var album8 = new album_1.Album("Borriquito", artista6, [exports.Flamenco], 1972, [cancion25, cancion26]);
var album9 = new album_1.Album("3a.m.", grupo5, [exports.Regueton], 2012, [cancion32, cancion33, cancion34]);
var album10 = new album_1.Album("Get Rich or Die Tryin'", artista15, [exports.Hip_Hop], 2003, [cancion35, cancion36]);
var album11 = new album_1.Album("ALMAS GEMELAS", artista7, [exports.Hip_Hop], 2021, [cancion37, cancion38]);
var album12 = new album_1.Album("Culture", grupo6, [exports.Hip_Hop], 2017, [cancion39, cancion40, cancion41]);
exports.albumes = [exports.album1, album2, album3, album4, album5, album6, album7, album8, album9, album10, album11, album12];
// rellenar grupos
exports.grupo1.construirGrupo([artista16, artista17, artista18, artista19, artista20, artista21, artista22, artista23], 1983, [exports.Metal], [exports.album1], 8000000);
grupo2.construirGrupo([artista2, artista24, artista25, artista26, artista27, artista28, artista29], 1970, [exports.Rock, exports.Pop, exports.Metal], [album4], 49000000);
grupo3.construirGrupo([artista30, artista31, artista32], 1973, [exports.Flamenco], [album7], 137000);
grupo4.construirGrupo([artista33, artista34, artista35, artista36], 1990, [exports.Electronica], [album2], 241000);
grupo5.construirGrupo([artista37, artista38], 2011, [exports.Regueton], [album9], 1200000);
grupo6.construirGrupo([artista39, artista40, artista41], 2009, [exports.Hip_Hop], [album12], 12400000);
//console.log(artista16.getGrupos());
// rellenar artistas 
exports.artista1.construirArtista([exports.cancion2, cancion3, cancion4, cancion5, cancion6, cancion7, cancion8, cancion9, cancion10], 28125943);
artista2.construirArtista([cancion14, cancion15, cancion16, cancion17], 2539164);
artista3.construirArtista([exports.cancion1], 13552);
artista4.construirArtista([cancion11, cancion12, cancion13], 1000000);
artista5.construirArtista([cancion18, cancion30, cancion31], 5439541);
artista6.construirArtista([cancion25, cancion26], 234051);
artista7.construirArtista([cancion37, cancion38], 27889188);
artista8.construirArtista([cancion43], 17259897);
artista9.construirArtista([cancion44], 20139441);
artista10.construirArtista([cancion45], 2068481);
artista11.construirArtista([cancion46], 11153307);
artista12.construirArtista([cancion47], 52950475);
artista13.construirArtista([cancion48], 35251309);
artista14.construirArtista([cancion49], 2068741);
artista15.construirArtista([cancion35, cancion36], 1585307);
// Metallica artistas
artista16.construirArtista([cancion19, cancion20, cancion21], 17965468);
artista17.construirArtista([cancion19, cancion20, cancion21], 17965468);
artista18.construirArtista([cancion19, cancion20, cancion21], 17965468);
artista19.construirArtista([cancion19, cancion20, cancion21], 17965468);
artista20.construirArtista([cancion19, cancion20, cancion21], 17965468);
artista21.construirArtista([cancion19, cancion20, cancion21], 17965468);
artista22.construirArtista([cancion19, cancion20, cancion21], 17965468);
artista23.construirArtista([cancion19, cancion20, cancion21], 17965468);
// Queen artistas
artista24.construirArtista([cancion14, cancion15, cancion16], 1585307);
artista25.construirArtista([cancion14, cancion15, cancion16], 1585307);
artista26.construirArtista([cancion14, cancion15, cancion16], 1585307);
artista27.construirArtista([cancion14, cancion15, cancion16], 1585307);
artista28.construirArtista([cancion14, cancion15, cancion16], 1585307);
artista29.construirArtista([cancion14, cancion15, cancion16], 1585307);
// Los Chunguitos artistas
artista30.construirArtista([cancion22, cancion23, cancion24], 314980);
artista31.construirArtista([cancion22, cancion23, cancion24], 314980);
artista32.construirArtista([cancion22, cancion23, cancion24], 314980);
// The Prodigy artistas
artista33.construirArtista([cancion27, cancion28, cancion29], 3378893);
artista34.construirArtista([cancion27, cancion28, cancion29], 3378893);
artista35.construirArtista([cancion27, cancion28, cancion29], 3378893);
artista36.construirArtista([cancion27, cancion28, cancion29], 3378893);
// Cali y el Dandee artistas
artista37.construirArtista([cancion32, cancion33, cancion34], 8907725);
artista38.construirArtista([cancion32, cancion33, cancion34], 8907725);
// Migos artistas
artista39.construirArtista([cancion39, cancion40, cancion41], 17644273);
artista40.construirArtista([cancion39, cancion40, cancion41], 17644273);
artista41.construirArtista([cancion39, cancion40, cancion41], 17644273);
/*
export let artistas: Artistas[] = [artista1, artista2, artista3, artista4, artista5, artista6, artista7, artista8, artista9, artista10, artista11, artista12, artista13, artista14, artista15, artista16, artista17, artista18, artista19, artista20, artista21, artista22, artista23, artista24, artista25, artista26, artista27, artista28, artista29, artista30, artista31, artista32, artista33, artista34, artista35, artista36, artista37, artista38, artista39, artista40, artista41];
export let grupos: Grupos[] = [grupo1, grupo2, grupo3, grupo4, grupo5, grupo6];
*/
// Playlists
exports.playlist1 = new playlist_1.Playlist("Regueton a Full", [cancion37, cancion38, cancion49, cancion32, cancion34, cancion33]);
var playlist2 = new playlist_1.Playlist("Rock For Ever", [cancion3, cancion14, cancion43]);
var playlist3 = new playlist_1.Playlist("Flamencos de coraz\u00F3h", [cancion11, cancion24, cancion26]);
exports.playlists = [exports.playlist1, playlist2, playlist3];
//console.log(playlist1.getGeneros());
// Llamadas a métodos
//console.log(cancion1.getGeneroMusical());
//console.log(Pop.getGrupos());
//console.log(Rock);
//console.log(cancion1.getGeneroMusical());
//console.log(cancion1);
//console.log(artista1);
//console.log(grupo1.dame());
console.log(exports.artistas[3].getCanciones());
