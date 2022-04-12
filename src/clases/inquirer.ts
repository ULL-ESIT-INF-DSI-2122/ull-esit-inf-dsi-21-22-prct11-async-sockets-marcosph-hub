import inquirer from 'inquirer';
import { Album } from "../clases/album";
import { Artistas } from "../clases/artistas";
import { Cancion } from "../clases/cancion";
import { GenerosMusicales } from "../clases/generosMusicales";
import { Grupos } from "../clases/grupos";
import { Playlist } from "../clases/playlist";
import * as index from "../index";
import * as inGrupos from "../clases/inquirer-Grupos";
import * as inGenero from "../clases/inquirer-Generos";
import { addAlbum, menuModAlbum, delAlbum } from '../clases/inquirer-Album';
import { addCancion,addCancionGenero, menuModCancion } from './inquirer-Cancion';
import { addArtista, menumodArtista } from '../clases/inquirer_artista';
import * as InquirerFiltrado from '../clases/inquirer-filtrado';
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
    Grupo = `Grupo`,
    Salir = `Salir`
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
  Artista = `Artista`,
  Salir = `Salir`
}
/**
 * @enum CommandsGestionAvanzada de las opciones de visualizacion
 * de la información de los grupos o artistas
 */
export enum CommandsGestionAvanzada {
  AlfTitCancionAsc = `Canción alfabeticamente por título (Ascendente)`,
  AlfTitCancionDesc = `Canción alfabeticamente por título  (Descendente)`,
  AlfNombAlbumAsc = `Álbum alfabeticamente por nombre  (Ascendente)`,
  AlfNombAlbumDesc = `Álbum alfabeticamente por nombre  (Descendente)`,
  AlfNombPlaylistAsc = `Playlist ordenada por nombre alfabeticamente (Ascendente)`,
  AlfNombPlaylistDesc = `Playlist ordenada por nombre alfabeticamentet (Descendente)`,
  AnioLanzAlbumAsc = `Año de Lanzamiento de Álbum (Ascendente)`,
  AnioLanzAlbumDesc = `Año de Lanzamiento de Álbum (Descendente)`,
  NumRepTotalAsc = `Número de reproducciones totales (Ascendente)`,
  NumRepTotalDesc = `Número de reproducciones totales (Descendente)`,
  MostrarSingles = `Mostrar Singles lanzados`,
  Salir = `Salir al menú principal`
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
        await addCancion();
        break;
      case CommandsClases.GeneroMusical:
        await inGenero.addGenero();
        break;
      case CommandsClases.Album:
        await addAlbum();
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
        delAlbum();
        break;
      case CommandsClases.Artista:
        //delArtista();
        console.log(`eliminndo una artista`);
        break;
      case CommandsClases.Grupo:
        //delGrupo();
        console.log(`eliminnndo una grupo`);
        break;
        case CommandsClases.Salir:
          await menuPrincipal();
          return 0;
          break;
    } 
}

/**
 * @function menuMod menu para modificar cancion, género, álbum, artista o grupo
 */
 export async function menuMod(){
   console.clear();
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
        inGenero.menuModGenero();
        break;
      case CommandsClases.Album:
         menuModAlbum();
        break;
      case CommandsClases.Artista:
         menumodArtista();
        break;
      case CommandsClases.Grupo:
        //console.log(`modificando una grupo`);
        inGrupos.menuModificarGrupo();
        break;
      case CommandsClases.Salir:
           menuPrincipal();
      
      break;
    }
}

/**
 * @function menuNombreGrupo compruea si existe el grupo a visualizar
 */
export async function menuNombreGrupo() {
  const nombreGrupo = await inquirer.prompt({
    type: 'input',
    name: `command`, 
    message: `Introduce el nombre del grupo que quieres visualizar la información:`
  })
  let nombre: string = nombreGrupo["command"];
  
  let numeroGrupo: number = -1;
  for(let i: number = 0; i < index.grupos.length; i++){
    if(index.grupos[i].getNombreGrupo() === nombre){
      numeroGrupo = i;
      break;
    }
  }
  if(numeroGrupo === -1){
    console.log(`No existe un grupo con ese nombre`);
    menuNombreGrupo();
  } else {
    menuOpcionesAvanzadas(index.grupos[numeroGrupo]);
  }
}

/**
 * @function menuNombreArtista comprueba si existe el artista a visualizar
 */
export async function menuNombreArtista() {
  const nombreArtista = await inquirer.prompt({
    type: 'input',
    name: `command`, 
    message: `Introduce el nombre del artista que quieres visualizar la información:`
  })
  let nombre: string = nombreArtista["command"];
  
  let numeroArtista: number = -1;
  for(let i: number = 0; i < index.artistas.length; i++){
    if(index.artistas[i].getNombreArtista() === nombre){
      numeroArtista = i;
      break;
    }
  }
  if(numeroArtista === -1){
    console.log(`No existe un artista con ese nombre`);
    menuNombreArtista();
  } else {
    menuOpcionesAvanzadas(index.artistas[numeroArtista]);
  }
}

/**
 * @function menuOpcionesAvanzadas2 menu para visualizar de los grupos y artistas de distintas maneras 
 * (alfabeticamente por titulo de canción, años de lanzamiento, número de reproducciones, etc)
 */
 export async function menuOpcionesAvanzadas(autor_: Artistas | Grupos) {
  const respuestaOpAvanzadas = await inquirer.prompt({
    type: 'list',
    name: `command`, 
    message: `Elige cómo visualizar la información:`,
    choices: Object.values(CommandsGestionAvanzada)
  })
  
  switch(respuestaOpAvanzadas["command"]) {
    case CommandsGestionAvanzada.AlfTitCancionAsc:
      InquirerFiltrado.AlfTitCancionAsc(autor_);
      break;
    case CommandsGestionAvanzada.AlfTitCancionDesc:
      InquirerFiltrado.AlfTitCancionDesc(autor_);
      break;
    case CommandsGestionAvanzada.AlfNombAlbumAsc:
      InquirerFiltrado.AlfNombAlbumAsc(autor_);
      break;
    case CommandsGestionAvanzada.AlfNombAlbumDesc:
      InquirerFiltrado.AlfNombAlbumDesc(autor_);
      break;
    case CommandsGestionAvanzada.AlfNombPlaylistAsc:
      InquirerFiltrado.AlfNombPlaylistAsc(autor_);
      break;
    case CommandsGestionAvanzada.AlfNombPlaylistDesc:
      InquirerFiltrado.AlfNombPlaylistDesc(autor_);
      break;
    case CommandsGestionAvanzada.AnioLanzAlbumAsc:
      InquirerFiltrado.AnioLanzAlbumAsc(autor_);
      break;
    case CommandsGestionAvanzada.AnioLanzAlbumDesc:
      InquirerFiltrado.AnioLanzAlbumDesc(autor_);
      break;
    case CommandsGestionAvanzada.NumRepTotalAsc:
      InquirerFiltrado.NumRepTotalAsc(autor_);
      break;
    case CommandsGestionAvanzada.NumRepTotalDesc:
      InquirerFiltrado.NumRepTotalDesc(autor_);
      break;
    case CommandsGestionAvanzada.MostrarSingles:
      InquirerFiltrado.MostrarSingles(autor_);
      break;
    case CommandsGestionAvanzada.Salir:
      console.clear();
      menuPrincipal();
      break;
  }
}

/**
 * @function menuOpcionesAvanzadas menu para visualizar de los grupos y artistas de distintas maneras
 */
export async function menuOpcionGrupoArtista(){
  const respuestaOpAvanzadas = await inquirer.prompt({
    type: 'list',
    name: `command`, 
    message: `Elige si quieres visualizar la información de grupos o artistas`,
    choices: Object.values(CommandsGrupoArtista)
  })
  switch(respuestaOpAvanzadas["command"]) {
    case CommandsGrupoArtista.Grupo:
      menuNombreGrupo();
      break;
    case CommandsGrupoArtista.Artista:
      menuNombreArtista();
      break;
    case CommandsGrupoArtista.Salir:
        console.clear();
        menuPrincipal();
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
        menuOpcionGrupoArtista();
        break;
      case Commands.Salir:
        return;
    }
}

menuPrincipal();


// Crear base de datos
let db = new BaseDatos(index.generos, index.canciones, index.albumes, index.artistas, index.grupos);