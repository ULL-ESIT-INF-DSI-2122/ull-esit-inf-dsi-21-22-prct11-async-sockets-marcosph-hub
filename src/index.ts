import { Album } from "./clases/album";
import { Artistas } from "./clases/artistas";
import { Cancion } from "./clases/cancion";
import { GenerosMusicales } from "./clases/generosMusicales";
import { Grupos } from "./clases/grupos";
import { Playlist } from "./clases/playlist";

//10 generos musicales
const Rock = new GenerosMusicales(`Rock`); //6
const Pop = new GenerosMusicales(`Pop`); //6
const Rap = new GenerosMusicales(`Rap`);  //6
const Electronica = new GenerosMusicales(`Electronica`); //6
const Regueton = new GenerosMusicales(`Regueton`); //6
const Hip_Hop = new GenerosMusicales(`Hip Hop`); //8
const Metal = new GenerosMusicales(`Metal`); //6
const Flamenco = new GenerosMusicales(`Flamenco`); //6
const RyB = new GenerosMusicales(`RyB`); //8
const Soul = new GenerosMusicales(`Soul`); //7

// 50 canciones, aprox. 5 de cada genero
const cancion1 = new Cancion('Pulling Teeth', 'Alan Ryker',  254, [Metal], false, 2100000); // 4:23
const cancion2 = new Cancion('Thriller', 'Michael Jackson',  358, [Pop], false, 825000000); // 5:58
const cancion3 = new Cancion('Billie Jean', 'Michael Jackson',  294, [Rock], false, 1154580120); // 4:55
const cancion4 = new Cancion(`Wanna Be Startin' Something`, 'Michael Jackson',  364, [RyB, Soul], false, 10850000); // 6:06
const cancion5 = new Cancion('Baby Be Mine', 'Michael Jackson',  262, [RyB, Soul], false, 4580000); // 4:37
const cancion6 = new Cancion('The Girl Is Mine', 'Michael Jackson',  222, [RyB, Soul], false, 120000000);
const cancion7 = new Cancion('Beat It', 'Michael Jackson',  298, [RyB, Soul], false, 1811000000);// 4:00
const cancion8 = new Cancion('Human Nature', 'Michael Jackson',  3247, [RyB, Soul], false, 810959778);// 4:59
const cancion9 = new Cancion('Pretty Young Thing', 'Michael Jackson',  224, [RyB, Soul], false, 136723704);// 4:07
const cancion10 = new Cancion('The Lady in My Life', 'Michael Jackson',  231, [RyB, Soul], false, 15000000); // 5:02
const cancion11 = new Cancion('Malamente', 'Rosalía',  294, [Flamenco, Pop], false, 156000000); // 2:49
const cancion12 = new Cancion('Preso', 'Rosalía',  294, [Pop], false, 165000000); // 2:48
const cancion13 = new Cancion('Di mi nombre', 'Rosalía',  294, [Rap], false, 81000000); // 3:01
const cancion14 = new Cancion('Mother Love', 'Queen',  294, [Rock], false, 3300000); // 4:50
const cancion15 = new Cancion('Its A Beautiful Day', 'Queen',  294, [Rock, Metal], false, 3000000); // 3:19
const cancion16 = new Cancion('I Was Born To Love You', 'Queen',  294, [Rock, Metal], false, 64000000); // 4:56
const cancion17 = new Cancion('Living on my own', 'Freddie Mercury',  294, [Rock, Pop], false, 32000000); // 3:08
const cancion18 = new Cancion('Ojalá', 'Beret',  294, [Rap, Pop], false, 197000000); // 3:43
const cancion19 = new Cancion('Master Of Puppets', 'Metallica',  294, [Metal], false, 29000000); // 8:36
const cancion20 = new Cancion('Battery', 'Metallica',  294, [Metal], false, 1500000); // 5:13
const cancion21 = new Cancion('Disposable Heroes', 'Metallica',  294, [Metal], false, 191000); // 8:17
const cancion22 = new Cancion('Rumba en el cielo', 'Los Chunguitos',  294, [Flamenco], false, 684000); // 4:33
const cancion23 = new Cancion('Yo me lo tengo que beber', 'Los Chunguitos', 294, [Flamenco], false, 231000); // 3:45
const cancion24 = new Cancion('Tinto de verano', 'Los Chunguitos', 294, [Flamenco], false, 141000); // 3:24
const cancion25 = new Cancion('Borriquito', 'Peret', 294, [Flamenco], false, 2200000); // 3:23
const cancion26 = new Cancion('El muerto vivo', 'Peret', 294, [Flamenco], false, 8000000); // 4:51
const cancion27 = new Cancion('The Prodigy', 'The Prodigy', 294, [Electronica], false, 2100000); // 2:53
const cancion28 = new Cancion('Nasty', 'The Prodigy', 294, [Electronica], false, 15217880); // 3:42
const cancion29 = new Cancion('Rebel Radio', 'The Prodigy', 294, [Electronica], false, 1000000); //3:53
const cancion30 = new Cancion('Diez mil porqués', 'Beret', 294, [Rap], false, 40000000); // 3:32
const cancion31 = new Cancion('Esencial', 'Beret', 294, [Rap, Pop], false, 23000000); // 2:40
const cancion32 = new Cancion('Yo te esperaré', 'Cali y El Dandee', 294, [Regueton], false, 469000000); // 4:14 
const cancion33 = new Cancion('Te doy mi corazón', 'Cali y El Dandee', 294, [Regueton], false, 4600000); // 4:01
const cancion34 = new Cancion('La playa', 'Cali y El Dandee', 294, [Regueton], false, 5600000); // 3:43 
const cancion35 = new Cancion('Many Men', '50Cent', 294, [Hip_Hop], false, 388000000); // 4:58
const cancion36 = new Cancion(`Don't Push me`, '50Cent', 249, [Hip_Hop], false, 2100000); // 4:09
const cancion37 = new Cancion('Almas Gemelas', 'Myke Towers', 294, [Regueton], false, 61000000); // 4:49
const cancion38 = new Cancion('Rutina', 'Myke Towers', 217, [Regueton], false, 44641453); // 3:38
const cancion39 = new Cancion('Culture', 'Migos', 294, [Hip_Hop], false, 1300000); // 4:45
const cancion40 = new Cancion('T-Shirt', 'Migos', 294, [Hip_Hop], false, 327000000); // 4:53
const cancion41 = new Cancion('Get Right Witcha', 'Migos', 294, [Hip_Hop], false, 160000000); // 4:18


// Singles
const cancion42 = new Cancion('Cóseme', 'Beret', 294, [Rap], true, 64000000); // 3:22
const cancion43 = new Cancion('Plan A', 'Paulo Londra', 185, [Rock], true, 63000000); // 3:06
const cancion44 = new Cancion('Face My Fears', 'Skrillex', 217, [Electronica], true, 19943008); // 3:38
const cancion45 = new Cancion('Tubular Bells', 'Mike Oldfield', 294, [Electronica], true, 116000); // 5:33
const cancion46 = new Cancion('Outkast', 'BoB',  264, [Hip_Hop], true, 20011803); // 4:25
const cancion47 = new Cancion('Lose Yourself', 'Eminem',  322, [Hip_Hop, Rap], true, 1200000000000); // 5:24
const cancion48 = new Cancion('Solita', 'Ozuna', 294, [Electronica], false, 609000000); // 5:50
const cancion49 = new Cancion('Rumbatón', 'Daddy Yankee', 294, [Regueton], false, 1154580120); // 4:15
const cancion50 = new Cancion('Bad', 'Michael Jackson',  259, [RyB, Hip_Hop], true, 401000000); // 4:20

// Artistas construidos con el nombre solo
const artista1 = new Artistas('Michael Jackson');
const artista2 = new Artistas('Freddie Mercury');
const artista3 = new Artistas('Alan Ryker');
const artista4 = new Artistas('Rosalía');
const artista5 = new Artistas('Beret');
const artista6 = new Artistas('Peret');
const artista7 = new Artistas('Myke Towers');
const artista8 = new Artistas('Paulo Londra');
const artista9 = new Artistas('Skrillex');
const artista10 = new Artistas('Mike Oldfield');
const artista11 = new Artistas('BoB');
const artista12 = new Artistas('Eminem');
const artista13 = new Artistas('Ozuna');
const artista14 = new Artistas('Daddy Yankee');
const artista15 = new Artistas('50Cent');
// Metallica componentes
const artista16 = new Artistas('James Heltfield');
const artista17 = new Artistas('Cliff Burton');
const artista18 = new Artistas('Lars Ulrich');
const artista19 = new Artistas('Dave Mustaine');
const artista20 = new Artistas('Kirk Hammett');
const artista21 = new Artistas('Jason Newsted');
const artista22 = new Artistas('Robert Trujillo');
const artista23 = new Artistas('Ron McGovney');
// Queen componentes
const artista24 = new Artistas('Brian May');
const artista25 = new Artistas('John Deacon');
const artista26 = new Artistas('Roger Taylor');
const artista27 = new Artistas('Mike Grose');
const artista28 = new Artistas('Doug Bogie');
const artista29 = new Artistas('Queen Barry Mitchell');
//Los Chunguitos componentes
const artista30 = new Artistas('Enrique Salazar');
const artista31 = new Artistas('Juan Salazar');
const artista32 = new Artistas('José Salazar');
//The Prodigy componentes
const artista33 = new Artistas('Keith Flint');
const artista34 = new Artistas('Liam Howlett');
const artista35 = new Artistas('Maxim Reality');
const artista36 = new Artistas('Sharky');
//Cali y El Dandee componentes
const artista37 = new Artistas('Alejandro Rengifo');
const artista38 = new Artistas('Mauricio Rengifo');
//Migos componentes
const artista39 = new Artistas('Quavo');
const artista40 = new Artistas('Offset');
const artista41 = new Artistas('Takeoff');

// Grupos construidos con el nombre solo
const grupo1 = new Grupos(`Metallica`);
const grupo2 = new Grupos(`Queen`);
const grupo3 = new Grupos(`Los Chunguitos`);
const grupo4 = new Grupos(`The Prodigy`);
const grupo5 = new Grupos(`Cali y El Dandee`);
const grupo6 = new Grupos(`Migos`);

// Album puede construirse con todo 
const album1 = new Album(`Thriller`, artista1, [Rock, RyB, Soul, Pop], 11982,[cancion2, cancion3, cancion4, cancion5, cancion6, cancion7, cancion8, cancion9, cancion10]);
const album2 = new Album(`The Day Is My Enemy`, grupo4, [Electronica], 2015, [cancion27, cancion28, cancion29]);
const album3 = new Album(`El Mal Querer`, artista4, [Flamenco, Pop, Rap], 2018, [cancion11, cancion12, cancion13]);
const album4 = new Album(`Made in Heaven`, grupo2, [Rock, Metal], 1995, [cancion14, cancion15, cancion16]);
const album5 = new Album(`Prisma`, artista5, [Rap, Pop], 2019, [cancion18, cancion30, cancion31]);
const album6 = new Album(`Master Of Puppets`, grupo1, [Metal], 1986, [cancion19, cancion20, cancion21]);
const album7 = new Album(`Morir de amor`, grupo3, [Flamenco], 2003, [cancion22, cancion23, cancion24]);
const album8 = new Album(`Borriquito`, artista6, [Flamenco], 1972, [cancion25, cancion26]);
const album9 = new Album(`3a.m.`, grupo5, [Regueton], 2012, [cancion32, cancion33, cancion34]);
const album10 = new Album(`Get Rich or Die Tryin'`, artista15, [Hip_Hop], 2003, [cancion35, cancion36]); 
const album11 = new Album(`ALMAS GEMELAS`, artista7, [Hip_Hop], 2021, [cancion37, cancion38]);
const album12 = new Album(`Culture`, grupo6, [Hip_Hop], 2017, [cancion39, cancion40, cancion41]);

// rellenar grupos
grupo1.construirGrupo([artista16, artista17, artista18, artista19, artista20, artista21, artista22, artista23], 1983, [Metal], [album1], 8000000);
grupo2.construirGrupo([artista2, artista24, artista25, artista26, artista27, artista28, artista29], 1970, [Rock, Pop, Metal], [album4], 49000000);
grupo3.construirGrupo([artista30, artista31, artista32], 1973, [Flamenco], [album7], 137000);
grupo4.construirGrupo([artista33, artista34, artista35, artista36], 1990, [Electronica], [album2], 241000);
grupo5.construirGrupo([artista37, artista38], 2011, [Regueton], [album9], 1200000);
grupo6.construirGrupo([artista39, artista40, artista41], 2009, [Hip_Hop], [album12], 12400000);

// rellenar artistas 
artista1.construirArtista([grupo1],[Rock, Pop],[album1], [cancion1, cancion2], 10); 
artista4.construirArtista([], [Flamenco, Pop, Rap], [album3], [cancion11, cancion12, cancion13], 1000000);
artista2.construirArtista([grupo2], [Rock, Pop, Metal], [], [cancion17], 500000);

/**
 * michael jackson 1
rosalia 4
freddie mercury 2
peret 6
beret 5
50Cent 15
Myke Towers 7
Paulo Londra 8
Skrillex 9
Jean Michel Jarre 10
Eminem 12
Ozuna 13
Daddy Yankee 14

 */

// rellenar generosmusicales NO HACE FALTA RELLENARLA AHORA MISMO, PORQUE CREEMOS QUE SE PUEDE AUTOGENERAR AÑADIENDO MÉTODOS A LA CLASE GRUPOSMUSICALES
Pop.construirGenero([grupo1], [artista1], [album1], [cancion1, cancion2]);
// Playlists
const playlist1 = new Playlist(`Regueton a Full`, [cancion37, cancion38, cancion49, cancion32, cancion34, cancion33]);
console.log(playlist1.getGeneros());
// llamadas a métodos
//console.log(cancion1.getGeneroMusical());
cancion1.setGeneroMusical([Pop]);
//console.log(Pop.getGrupos());
//console.log(Rock);
//console.log(cancion1.getGeneroMusical());
//console.log(cancion1);
//console.log(artista1);

//console.log(grupo1.dame());