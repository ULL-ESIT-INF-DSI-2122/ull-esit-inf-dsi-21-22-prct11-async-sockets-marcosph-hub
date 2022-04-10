import inquirer from 'inquirer';
import { Album } from "../clases/album";
import { Artistas } from "../clases/artistas";
import { Cancion } from "../clases/cancion";
import { GenerosMusicales } from "../clases/generosMusicales";
import { Grupos } from "../clases/grupos";
import { Playlist } from "../clases/playlist";
import * as index from "../index";
import * as inGrupos from "../clases/inquirer-Grupos";
import { addAlbum } from '../clases/inquirer-Album';
import { addCancion,addCancionGenero, menuModCancion } from './inquirer-Cancion';
import { addArtista, menumodArtista } from '../clases/inquirer_artista';
import { BaseDatos } from './basedatos';


/**
 * @enum Commands con los comandos de añadir, borrar, modificar y salir
 */
export enum Commands {
    Add = `Añadir`,
    Borrar = `Borrar`,
    Modificar = `Modificar`,
    OpcionesAvanzadas = `Opciones Avanzadas`,
    Salir = `Salir`
}
  
/**
 * @enum CommandsClases con la clase que se quiere añadir, borrar o modificar
 */
export enum CommandsClases {
    Cancion = `Canción`,
    GeneroMusical = `Género musical`,
    Album = `Album`,
    Artista = `Artista`,
    Grupo = `Grupo`
}

/**
 * @enum CommandsSingle si es un sí o no
 */
export enum CommandsSingle {
  Si = `Si`,
  No = `No`
}

/**
 * @enum CommandsGenerosCnciones con los géneros de las canciones
 */
export enum CommandsGenerosCanciones {
  Rock = `Rock`,
  Pop = `Pop`,
  Rap = `Rap`,
  Electronica = `Electronica`,
  Regueton = `Regueton`,
  Hip_Hop = `Hip_Hop`,
  Metal = `Metal`,
  Flamenco = `Flamenco`,
  RyB = `RyB`,
  Soul = `Soul`,
  Salir = `Salir`
}

/**
 * @enum CommandsPartesCancion partes de la clase Canción
 */
export enum CommandsPartesCancion {
  Nombre = `Nombre`,
  Autor = `Autor`,
  GeneroMusical = `Género musical`,
  Duracion = `Duracion`,
  Single = `Single`,
  Reproducciones = `Número de reproducciones`,
  Salir = `Salir al menú principal`
}

/**
 * @enum CommandsGrupoArtista si es un grupo o un artista
 */
export enum CommandsGrupoArtista {
  Grupo = `Grupo`,
  Artista = `Artista`
}
/**
 * @enum CommandsGestionAvanzada de las opciones de visualizacion
 * de la información de los grupos o artistas
 */
export enum CommandsGestionAvanzada {
  AlfTitCancionAsc = `Alfabeticamente título Canción (Ascendente)`,
  AlfTitCancionDesc = `Alfabeticamente título Canción (Descendente)`,
  AlfNombAlbumAsc = `Alfabeticamente nombre Álbum (Ascendente)`,
  AlfNombAlbumDesc = `Alfabeticamente nombre Álbum (Descendente)`,
  AlfNombPlaylistAsc = `Alfabeticamente nombre Playlist (Ascendente)`,
  AlfNombPlaylistDesc = `Alfabeticamente nombre Playlist (Descendente)`,
  AnioLanzAlbumAsc = `Año de Lanzamiento de Álbum (Ascendente)`,
  AnioLanzAlbumDesc = `Año de Lanzamiento de Álbum (Descendente)`,
  NumRepTotalAsc = `Número de reproducciones totales (Ascendente)`,
  NumRepTotalDesc = `Número de reproducciones totales (Descendente)`,
  MostrarSingles = `Filtrar para mostrar únicamente los singles lanzados`,
}

// Menús
/**
 * @function menuAdd menu para añadir cancion, género, álbum, artista o grupo
 */
export async function menuAdd(){
    const respuestaAdd = await inquirer.prompt({
      type: 'list',
      name: `command`, 
      message: `Elige que quieres añadir`,
      choices: Object.values(CommandsClases)
    })
    switch(respuestaAdd["command"]) {
      case CommandsClases.Cancion:
        addCancion();
        break;
      case CommandsClases.GeneroMusical:
        
        break;
      case CommandsClases.Album:
        addAlbum();
        break;
      case CommandsClases.Artista:
        addArtista();
        break;
      case CommandsClases.Grupo:
        //addGrupo();
        inGrupos.addGrupo();
        //console.log(`añadiendo una grupo`);
        break;
    }
}

/**
 * @function menuDel menu para borrar cancion, género, álbum, artista o grupo
 */
 export async function menuDel(){
    const respuestaDel = await inquirer.prompt({
      type: 'list',
      name: `command`, 
      message: `Elige que quieres eliminar`,
      choices: Object.values(CommandsClases)
    })
    switch(respuestaDel["command"]) {
      case CommandsClases.Cancion:
        //delCancion();
       console.log(`eliminndo una cancion`);
        break;
      case CommandsClases.GeneroMusical:
        //delGeneroMusical();
        console.log(`eliminndo una genero musical`);
        break;
      case CommandsClases.Album:
        //delAlbum();
        console.log(`eliminndo una album`);
        break;
      case CommandsClases.Artista:
        //delArtista();
        console.log(`eliminndo una artista`);
        break;
      case CommandsClases.Grupo:
        //delGrupo();
        console.log(`eliminndo una grupo`);
        break;
    } 
}

/**
 * @function menuMod menu para modificar cancion, género, álbum, artista o grupo
 */
 export async function menuMod(){
    const respuestaMod = await inquirer.prompt({
      type: 'list',
      name: `command`, 
      message: `Elige que quieres modificar`,
      choices: Object.values(CommandsClases)
    })
    switch(respuestaMod["command"]) {
      case CommandsClases.Cancion:
        menuModCancion();
        break;
      case CommandsClases.GeneroMusical:
        //modGeneroMusical();
        console.log(`modificando una genero musical`);
        break;
      case CommandsClases.Album:
        //modAlbum();
        console.log(`modificando una album`);
        break;
      case CommandsClases.Artista:
        menumodArtista();
        break;
      case CommandsClases.Grupo:
        console.log(`modificando una grupo`);
        //modGrupo();
        break;
    }
    
}

/**
 * @function menuOpAvGrupo comprobar que el grupo existe
 */
export async function menuOpAvGrupo() {
  const grupocomprobar = await inquirer.prompt({
    type: 'input',
    name: `comprobar`,
    message: `Introduce el nombre del grupo que ver la información`,
  })
  let nombreGrupoComprobar: string = grupocomprobar["comprobar"];
  let numeroGrupo: number = -1;
  for(let i: number = 0; i < index.grupos.length; i++){
    if(index.grupos[i].getNombreGrupo() === nombreGrupoComprobar){
      numeroGrupo = i;
      break;
    }
  }
  if(numeroGrupo === -1){
    console.log(`No existe un grupo con ese nombre`);
    menuPrincipal();
  } else {
    menuOpcionesAvanzadas2()
  }
  
}

/**
 * @function menuOpAvArtista comprobar si el artista existe
 */
export async function menuOpAvArtista() {
  const artistacomprobar = await inquirer.prompt({
    type: 'input',
    name: `comprobar`,
    message: `Introduce el nombre del artista que ver la información`,
  })
  let nombreArtistaComprobar: string = artistacomprobar["comprobar"];
  let numeroArtista: number = -1;
  for(let i: number = 0; i < index.artistas.length; i++){
    if(index.artistas[i].getNombreArtista() === nombreArtistaComprobar){
      numeroArtista = i;
      break;
    }
  }
  if(numeroArtista === -1){
    console.log(`No existe un artista con ese nombre`);
    menuPrincipal();
  } else {
    menuOpcionesAvanzadas2()
  }
}

export async function AlfTitCancionAsc() {
  console.log('ordenar 1');
}

/**
 * @function menuOpcionesAvanzadas2 menu para visualizar de los grupos y artistas de distintas maneras 
 * (alfabeticamente por titulo de canción, años de lanzamiento, número de reproducciones, etc)
 */
export async function menuOpcionesAvanzadas2() {
  const respuestaOpAvanzadas = await inquirer.prompt({
    type: 'list',
    name: `command`, 
    message: `Elige cómo visualizar la información del grupo`,
    choices: Object.values(CommandsGestionAvanzada)
  })
  switch(respuestaOpAvanzadas["command"]) {
    case CommandsGestionAvanzada.AlfTitCancionAsc:
      AlfTitCancionAsc();
      break;
    case CommandsGestionAvanzada.AlfTitCancionDesc:
      //AlfTitCancionDesc();
      break;
    case CommandsGestionAvanzada.AlfNombAlbumAsc:
      //AlfNombAlbumAsc();
      break;
    case CommandsGestionAvanzada.AlfNombAlbumDesc:
      //AlfNombAlbumDesc();
      break;
    case CommandsGestionAvanzada.AlfNombPlaylistAsc:
      //AlfNombPlaylistAsc();
      break;
    case CommandsGestionAvanzada.AlfNombPlaylistDesc:
      //AlfNombPlaylistDesc();
      break;
    case CommandsGestionAvanzada.AnioLanzAlbumAsc:
      //AnioLanzAlbumAsc();
      break;
    case CommandsGestionAvanzada.AnioLanzAlbumDesc:
      //AnioLanzAlbumDesc();
      break;
    case CommandsGestionAvanzada.NumRepTotalAsc:
      //NumRepTotalAsc();
      break;
    case CommandsGestionAvanzada.NumRepTotalDesc:
      //NumRepTotalDesc();
      break;
    case CommandsGestionAvanzada.MostrarSingles:
      //MostrarSingles();
      break;
  }
}


/**
 * @function menuOpcionesAvanzadas menu para visualizar de los grupos y artistas de distintas maneras
 */
 export async function menuOpcionesAvanzadas(){
  const respuestaOpAvanzadas = await inquirer.prompt({
    type: 'list',
    name: `command`, 
    message: `Elige si quieres visualizar la información de grupos y artistas`,
    choices: Object.values(CommandsGrupoArtista)
  })
  switch(respuestaOpAvanzadas["command"]) {
    case CommandsGrupoArtista.Grupo:
      menuOpAvGrupo();
      break;
    case CommandsGrupoArtista.Artista:
      menuOpAvArtista();
      break;
  }
}


/**
 * @function menuPrincipal menu principal donde se manejan los submenus y los comandos
 * @returns 
 */
export async function menuPrincipal(){
    const respuesta = await inquirer.prompt({
      type: 'list',
      name: `command`, 
      message: `Elige opción`,
      choices: Object.values(Commands)
    })
    switch(respuesta["command"]) {
      case Commands.Add:
        menuAdd();
        break;
      case Commands.Borrar:
        menuDel();
        break;
      case Commands.Modificar:
        menuMod();
        break;
      case Commands.OpcionesAvanzadas:
        menuOpcionesAvanzadas();
        break;
      case Commands.Salir:
        return;
    }
}

menuPrincipal();


// Crear base de datos
let db = new BaseDatos(index.generos, index.canciones, index.albumes, index.artistas, index.grupos);