import { Album } from "./clases/album";
import { Artistas } from "./clases/artistas";
import { Cancion } from "./clases/cancion";
import { GenerosMusicales } from "./clases/generosMusicales";
import { Grupos } from "./clases/grupos";
//10 generos musicales
const Rock = new GenerosMusicales(`Rock`);
const Pop = new GenerosMusicales(`Pop`);
const generoMusical3 = new GenerosMusicales(`a`);
const generoMusical4 = new GenerosMusicales(`a`);
const generoMusical5 = new GenerosMusicales(`a`);
const generoMusical6 = new GenerosMusicales(`a`);
const generoMusical7 = new GenerosMusicales(`a`);
const generoMusical8 = new GenerosMusicales(`a`);
const generoMusical9 = new GenerosMusicales(`a`);
const generoMusical10 = new GenerosMusicales(`a`);

// 50 canciones , 5 de cada genero
const cancion1 = new Cancion('Pulling Teeth', 'Alan Ryker',  254, [Rock,Pop], false, 2100000);
const cancion2 = new Cancion('Thriller', 'Michael Jackson',  358, [Pop], false, 825000000);
const cancion3 = new Cancion('Billie Jean', 'Michael Jackson',  294, [generoMusical3], false, 1154580120);
const cancion4 = new Cancion('Beat It', 'Michael Jackson',  258, [generoMusical4], false, 810000000);

const cancion5 = new Cancion('Pulling Teeth', 'Alan Ryker',  254, [generoMusical5], false, 2100000);
const cancion6 = new Cancion('Pulling Teeth', 'Alan Ryker',  254, [generoMusical6], false, 2100000);
const cancion7 = new Cancion('Pulling Teeth', 'Alan Ryker',  254, [generoMusical7], false, 2100000);
const cancion8 = new Cancion('Pulling Teeth', 'Alan Ryker',  254, [generoMusical8], false, 2100000);
const cancion9 = new Cancion('Pulling Teeth', 'Alan Ryker',  254, [generoMusical9], false, 2100000);
const cancion10 = new Cancion('Pulling Teeth', 'Alan Ryker',  254, [generoMusical10], false, 2100000);
// Artistas construidos con el nombre solo
const artista1 = new Artistas('Michael Jackson');
// Grupos construidos con el nombre solo
const grupo1 = new Grupos(`The Beatles`);
// album puede construirse con todo 
const album1 = new Album(`Nombre de album de prueba`, artista1, [Rock], 1990, [cancion1]);
// rellenar grupos
grupo1.construirGrupo([artista1], 1991, [Pop], [album1], 2000);
// rellenar artistas 
artista1.construirArtista([grupo1],[Rock, Pop],[album1], [cancion1, cancion2], 10);
// rellenar generosmusicales NO HACE FALTA RELLENARLA AHORA MISMO, PORQUE CREEMOS QUE SE PUEDE AUTOGENERAR AÑADIENDO MÉTODOS A LA CLASE GRUPOSMUSICALES
Pop.construirGenero([grupo1], [artista1], [album1], [cancion1, cancion2]);



// llamadas a métodos
//console.log(cancion1.getGeneroMusical());
cancion1.setGeneroMusical([Pop]);
console.log(Pop.getGrupos());
console.log(Rock);
//console.log(cancion1.getGeneroMusical());
//console.log(cancion1);
//console.log(artista1);

//console.log(grupo1.dame());