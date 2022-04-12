import inquirer from "inquirer";
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
import { BaseDatos } from './basedatos';

export let db = new BaseDatos(index.generos, index.canciones, index.albumes, index.artistas, index.grupos);
db.guardarBaseDatos()

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
 * @function AlfTitCancionAsc ordena alfabéticamente por Título de Canción (Ascendente)
 */
export async function AlfTitCancionAsc(autor_: Artistas | Grupos) {
  //console.log('Ordenar alfabéticamente por Título de Canción (Ascendente)');
  //let nombreArtistaComprobar: string = await menuOpAvArtista();
  if (autor_ instanceof Artistas){
  console.clear();
  console.log(`Canciones del artista ${autor_.getNombreArtista()} ordenadas ascendentemente:`);
  console.log(autor_.getCanciones().sort());
   menuOpcionesAvanzadas3(autor_);
  } else {
    let arrayAlbum : Album[] = autor_.getAlbumes();
    let auxCancionesGrupo: Cancion[] = [];
    let cancionesGrupo: string[] = [];
    for ( let i: number = 0; i < arrayAlbum.length; i++){
      auxCancionesGrupo = arrayAlbum[i].getCanciones();
      for(let j: number = 0; j < auxCancionesGrupo.length; j++){
        cancionesGrupo.push(auxCancionesGrupo[j].getNombreCancion());
      }

    }
    console.clear();
    console.log(`Canciones del grupo ${autor_.getNombreGrupo()} ordenadas ascendentemente :`);
    console.log(cancionesGrupo.sort());
    menuOpcionesAvanzadas3(autor_);
  }
}
 
/**
 * @function AlfTitCancionDesc ordena alfabéticamente por Título de Canción (Descendente)
 */
export async function AlfTitCancionDesc(autor_: Artistas | Grupos) {
  if (autor_ instanceof Artistas){
    console.clear();
    console.log(`Canciones del artista ${autor_.getNombreArtista()} ordenadas descendentemente:`);
    console.log(autor_.getCanciones().sort().reverse());
     menuOpcionesAvanzadas3(autor_);
    } else {
      let arrayAlbum : Album[] = autor_.getAlbumes();
      let auxCancionesGrupo: Cancion[] = [];
      let cancionesGrupo: string[] = [];
      for ( let i: number = 0; i < arrayAlbum.length; i++){
        auxCancionesGrupo = arrayAlbum[i].getCanciones();
        for(let j: number = 0; j < auxCancionesGrupo.length; j++){
          cancionesGrupo.push(auxCancionesGrupo[j].getNombreCancion());
        }
  
      }
      console.clear();
      console.log(`Canciones del grupo ${autor_.getNombreGrupo()} ordenadas descendentemente :`);
      console.log(cancionesGrupo.sort().reverse());
      menuOpcionesAvanzadas3(autor_);
    }
}

/**
 * @function AlfNombAlbumAsc ordena alfabéticamente por Nombre del Álbum (Ascendente)
 */
export async function AlfNombAlbumAsc(autor_: Artistas | Grupos) {
 
  if (autor_ instanceof Artistas){
    console.clear();
    console.log(`Albumes del artista ${autor_.getNombreArtista()} ordenadas ascendentemente:`);
    console.log(autor_.getAlbumes().sort());
     menuOpcionesAvanzadas3(autor_);
    }
    else {
      let arrayAlbum : Album[] = autor_.getAlbumes();
      let albumesGrupo: string[] = [];
      for ( let i: number = 0; i < arrayAlbum.length; i++){
          albumesGrupo.push(arrayAlbum[i].getNombreAlbum());
      }
      console.clear();
      console.log(`Albumes del grupo ${autor_.getNombreGrupo()} ordenadas ascendentemente :`);
      console.log(albumesGrupo.sort());
      menuOpcionesAvanzadas3(autor_);
    }
}

/**
 * @function AlfNombAlbumDesc ordena alfabéticamente por Nombre del Álbum (Descendente)
 */
export async function AlfNombAlbumDesc(autor_: Artistas | Grupos) {
  if (autor_ instanceof Artistas){
    console.clear();
    console.log(`Albumes del artista ${autor_.getNombreArtista()} ordenadas descendentemente:`);
    console.log(autor_.getAlbumes().sort().reverse());
     menuOpcionesAvanzadas3(autor_);
    }
    else {
      let arrayAlbum : Album[] = autor_.getAlbumes();
      let albumesGrupo: string[] = [];
      for ( let i: number = 0; i < arrayAlbum.length; i++){
          albumesGrupo.push(arrayAlbum[i].getNombreAlbum());
      }
      console.clear();
      console.log(`Albumes del grupo ${autor_.getNombreGrupo()} ordenadas descendentemente:`);
      console.log(albumesGrupo.sort().reverse());
      menuOpcionesAvanzadas3(autor_);
    }
}

export async function AnioLanzAlbumAsc(autor_: Artistas | Grupos) {
 
  if (autor_ instanceof Artistas){
    console.clear();
    console.log(`Albumes del artista ${autor_.getNombreArtista()} ordenadas ascendentemente por año:`);
    let listaAlbumesArtistas: Album[] = autor_.getAlbumesObject();
    for(let i = 0; i < listaAlbumesArtistas.length; i++) {
			for(let j = 0; j < listaAlbumesArtistas.length - 1; j++) {
				if(listaAlbumesArtistas[j].getYear() > listaAlbumesArtistas[j + 1].getYear()) {
					let swap = listaAlbumesArtistas[j];
					listaAlbumesArtistas[j] = listaAlbumesArtistas[j + 1];
					listaAlbumesArtistas[j + 1] = swap;
				}
			}
		}
    for(let i: number = 0; i < listaAlbumesArtistas.length; i++){
      console.log(` ${listaAlbumesArtistas[i].getNombreAlbum()} (${listaAlbumesArtistas[i].getYear()})`);
    }
    menuOpcionesAvanzadas3(autor_);
    }
    else {
      console.clear();
      console.log(`Albumes del grupo ${autor_.getNombreGrupo()} ordenadas ascendentemente por año :`);
      let arrayAlbum : Album[] = autor_.getAlbumes();
      for(let i = 0; i < arrayAlbum.length; i++) {
        for(let j = 0; j < arrayAlbum.length - 1; j++) {
          if(arrayAlbum[j].getYear() > arrayAlbum[j + 1].getYear()) {
            let swap = arrayAlbum[j];
            arrayAlbum[j] = arrayAlbum[j + 1];
            arrayAlbum[j + 1] = swap;
          }
        }
      }
      for(let i: number = 0; i < arrayAlbum.length; i++){
        console.log(` ${arrayAlbum[i].getNombreAlbum()} (${arrayAlbum[i].getYear()})`);
      }
      menuOpcionesAvanzadas3(autor_);
    }
}
export async function AnioLanzAlbumDesc(autor_: Artistas | Grupos) {
 
  if (autor_ instanceof Artistas){
    console.clear();
    console.log(`Albumes del artista ${autor_.getNombreArtista()} ordenadas descendentemente por año:`);
    let listaAlbumesArtistas: Album[] = autor_.getAlbumesObject();
    for(let i = 0; i < listaAlbumesArtistas.length; i++) {
			for(let j = 0; j < listaAlbumesArtistas.length - 1; j++) {
				if(listaAlbumesArtistas[j].getYear() < listaAlbumesArtistas[j + 1].getYear()) {
					let swap = listaAlbumesArtistas[j];
					listaAlbumesArtistas[j] = listaAlbumesArtistas[j + 1];
					listaAlbumesArtistas[j + 1] = swap;
				}
			}
		}
    for(let i: number = 0; i < listaAlbumesArtistas.length; i++){
      console.log(` ${listaAlbumesArtistas[i].getNombreAlbum()} (${listaAlbumesArtistas[i].getYear()})`);
    }
    menuOpcionesAvanzadas3(autor_);
    }
    else {
      console.clear();
      console.log(`Albumes del grupo ${autor_.getNombreGrupo()} ordenadas descendentemente por año :`);
      let arrayAlbum : Album[] = autor_.getAlbumes();
      for(let i = 0; i < arrayAlbum.length; i++) {
        for(let j = 0; j < arrayAlbum.length - 1; j++) {
          if(arrayAlbum[j].getYear() < arrayAlbum[j + 1].getYear()) {
            let swap = arrayAlbum[j];
            arrayAlbum[j] = arrayAlbum[j + 1];
            arrayAlbum[j + 1] = swap;
          }
        }
      }
      for(let i: number = 0; i < arrayAlbum.length; i++){
        console.log(` ${arrayAlbum[i].getNombreAlbum()} (${arrayAlbum[i].getYear()})`);
      }
      menuOpcionesAvanzadas3(autor_);
    }
}
export async function MostrarSingles(autor_: Artistas | Grupos) {
  if (autor_ instanceof Artistas){
    console.clear();
    console.log(`Single del artista ${autor_.getNombreArtista()}:`);
    let auxCanciones: Cancion[] = autor_.getCancionesObject();
    let canciones: string[] = [];
    let flag: boolean = false;
    for(let i : number = 0; i < auxCanciones.length; i++){
      flag = auxCanciones[i].getSingle();
      if( flag === true){
        canciones.push(auxCanciones[i].getNombreCancion());
      }
    }
    console.log(canciones);
    menuOpcionesAvanzadas3(autor_);
    } else {
      let arrayAlbum : Album[] = autor_.getAlbumes();
      let auxCancionesGrupo: Cancion[] = [];
      let cancionesGrupo_: Cancion[] = [];
      for ( let i: number = 0; i < arrayAlbum.length; i++){
        auxCancionesGrupo = arrayAlbum[i].getCanciones();
        for(let j: number = 0; j < auxCancionesGrupo.length; j++){
          cancionesGrupo_.push(auxCancionesGrupo[j]);
        }
      }
      console.clear();
      console.log(`Single del grupo ${autor_.getNombreGrupo()}:`);
      let canciones: string[] = [];
    let flag: boolean = false;
    for(let i : number = 0; i < cancionesGrupo_.length; i++){
      flag = cancionesGrupo_[i].getSingle();
      if( flag === true){
        canciones.push(auxCancionesGrupo[i].getNombreCancion());
      }
    }
    console.log(canciones);
    menuOpcionesAvanzadas3(autor_);
    }
}
export async function NumRepTotalAsc(autor_: Artistas | Grupos) {
  if (autor_ instanceof Artistas){
    console.clear();
    console.log(`Canciones de ${autor_.getNombreArtista()} ordenadas por número de reproducciones ascendentes:`);
    let listaCanciones: Cancion[] = autor_.getCancionesObject();
    for(let i = 0; i < listaCanciones.length; i++) {
			for(let j = 0; j < listaCanciones.length - 1; j++) {
				if(listaCanciones[j].getNumReproducciones() > listaCanciones[j + 1].getNumReproducciones()) {
					let swap = listaCanciones[j];
					listaCanciones[j] = listaCanciones[j + 1];
					listaCanciones[j + 1] = swap;
				}
			}
		}
    for(let i: number = 0; i < listaCanciones.length; i++){
      console.log(` ${listaCanciones[i].getNombreCancion()} (${new Intl.NumberFormat('de-DE').format(listaCanciones[i].getNumReproducciones())})`);
    }
    menuOpcionesAvanzadas3(autor_);
    } else {
      console.clear();
      console.log(`Canciones de ${autor_.getNombreGrupo()} ordenadas por número de reproducciones ascendentes:`);
      let arrayAlbum : Album[] = autor_.getAlbumes();
      let auxCancionesGrupo: Cancion[] = [];
      let cancionesGrupo_: Cancion[] = [];
      for ( let i: number = 0; i < arrayAlbum.length; i++){
        auxCancionesGrupo = arrayAlbum[i].getCanciones();
        for(let j: number = 0; j < auxCancionesGrupo.length; j++){
          cancionesGrupo_.push(auxCancionesGrupo[j]);
        }
      }
      for(let i = 0; i < cancionesGrupo_.length; i++) {
        for(let j = 0; j < cancionesGrupo_.length - 1; j++) {
          if(cancionesGrupo_[j].getNumReproducciones() > cancionesGrupo_[j + 1].getNumReproducciones()) {
            let swap = cancionesGrupo_[j];
            cancionesGrupo_[j] = cancionesGrupo_[j + 1];
            cancionesGrupo_[j + 1] = swap;
          }
        }
      }
      for(let i: number = 0; i < cancionesGrupo_.length; i++){
        console.log(` ${cancionesGrupo_[i].getNombreCancion()} (${new Intl.NumberFormat('de-DE').format(cancionesGrupo_[i].getNumReproducciones())})`);
      }
    menuOpcionesAvanzadas3(autor_);
    }
}
export async function NumRepTotalDesc(autor_: Artistas | Grupos) {
  if (autor_ instanceof Artistas){
    console.clear();
    console.log(`Canciones de ${autor_.getNombreArtista()} ordenadas por número de reproducciones descendentes:`);
    let listaCanciones: Cancion[] = autor_.getCancionesObject();
    for(let i = 0; i < listaCanciones.length; i++) {
			for(let j = 0; j < listaCanciones.length - 1; j++) {
				if(listaCanciones[j].getNumReproducciones() < listaCanciones[j + 1].getNumReproducciones()) {
					let swap = listaCanciones[j];
					listaCanciones[j] = listaCanciones[j + 1];
					listaCanciones[j + 1] = swap;
				}
			}
		}
    for(let i: number = 0; i < listaCanciones.length; i++){
      console.log(` ${listaCanciones[i].getNombreCancion()} (${new Intl.NumberFormat('de-DE').format(listaCanciones[i].getNumReproducciones())})`);
    }
    menuOpcionesAvanzadas3(autor_);
    } else {
      console.clear();
      console.log(`Canciones de ${autor_.getNombreGrupo()} ordenadas por número de reproducciones descendentes:`);
      let arrayAlbum : Album[] = autor_.getAlbumes();
      let auxCancionesGrupo: Cancion[] = [];
      let cancionesGrupo_: Cancion[] = [];
      for ( let i: number = 0; i < arrayAlbum.length; i++){
        auxCancionesGrupo = arrayAlbum[i].getCanciones();
        for(let j: number = 0; j < auxCancionesGrupo.length; j++){
          cancionesGrupo_.push(auxCancionesGrupo[j]);
        }
      }
      for(let i = 0; i < cancionesGrupo_.length; i++) {
        for(let j = 0; j < cancionesGrupo_.length - 1; j++) {
          if(cancionesGrupo_[j].getNumReproducciones() < cancionesGrupo_[j + 1].getNumReproducciones()) {
            let swap = cancionesGrupo_[j];
            cancionesGrupo_[j] = cancionesGrupo_[j + 1];
            cancionesGrupo_[j + 1] = swap;
          }
        }
      }
      for(let i: number = 0; i < cancionesGrupo_.length; i++){
        console.log(` ${cancionesGrupo_[i].getNombreCancion()} (${new Intl.NumberFormat('de-DE').format(cancionesGrupo_[i].getNumReproducciones())})`);
      }
      menuOpcionesAvanzadas3(autor_);
    }
}

export async function AlfNombPlaylistAsc(autor_: Artistas | Grupos) {
  if (autor_ instanceof Artistas){
    console.clear();
    console.log(`Playlist ordenadas ascendentemente por nombre donde participa ${autor_.getNombreArtista()} :`);
    let listaCanciones: Cancion[] = autor_.getCancionesObject();
    let auxPlaylist: Playlist[] = [];
    for(let i = 0; i < listaCanciones.length; i++) {
			for(let j = 0; j < index.playlists.length; j++) {
        let cancionesPlaylist: Cancion[] = index.playlists[j].getCanciones();
        for(let k: number = 0; k < cancionesPlaylist.length; k++){
          if(listaCanciones[i].getNombreCancion() === cancionesPlaylist[k].getNombreCancion()) {
           auxPlaylist.push(index.playlists[j]);
           break;
          }
        }
			}
		}
    let nombrePlaylist_: string[] = [];
    for(let i: number = 0; i < auxPlaylist.length; i++){
      nombrePlaylist_.push(auxPlaylist[i].getNombrePlaylist());
    }
    console.log(nombrePlaylist_.sort());
    
    menuOpcionesAvanzadas3(autor_);
    } else {
      console.clear();
      console.log(`Playlist ordenadas ascendentemente por nombre donde participa ${autor_.getNombreGrupo()} :`);
      let arrayAlbum : Album[] = autor_.getAlbumes();
      let auxCancionesGrupo: Cancion[] = [];
      let cancionesGrupo_: Cancion[] = [];
      for ( let i: number = 0; i < arrayAlbum.length; i++){
        auxCancionesGrupo = arrayAlbum[i].getCanciones();
        for(let j: number = 0; j < auxCancionesGrupo.length; j++){
          cancionesGrupo_.push(auxCancionesGrupo[j]);
        }
      }
      let auxPlaylist: Playlist[] = [];
    for(let i = 0; i < cancionesGrupo_.length; i++) {
			for(let j = 0; j < index.playlists.length; j++) {
        let cancionesPlaylist: Cancion[] = index.playlists[j].getCanciones();
        for(let k: number = 0; k < cancionesPlaylist.length; k++){
          if(cancionesGrupo_[i].getNombreCancion() === cancionesPlaylist[k].getNombreCancion()) {
            if (!auxPlaylist.includes(index.playlists[j])){
              auxPlaylist.push(index.playlists[j]);
              break;
            }
          }
        }
			}
		}
    let nombrePlaylist_: string[] = [];
    for(let i: number = 0; i < auxPlaylist.length; i++){
      nombrePlaylist_.push(auxPlaylist[i].getNombrePlaylist());
    }
    console.log(nombrePlaylist_.sort());
    
      menuOpcionesAvanzadas3(autor_);
    }
}
export async function AlfNombPlaylistDesc(autor_: Artistas | Grupos) {
  if (autor_ instanceof Artistas){
    console.clear();
    console.log(`Playlist ordenadas descendentemente por nombre donde participa ${autor_.getNombreArtista()} :`);
    let listaCanciones: Cancion[] = autor_.getCancionesObject();
    let auxPlaylist: Playlist[] = [];
    for(let i = 0; i < listaCanciones.length; i++) {
			for(let j = 0; j < index.playlists.length; j++) {
        let cancionesPlaylist: Cancion[] = index.playlists[j].getCanciones();
        for(let k: number = 0; k < cancionesPlaylist.length; k++){
          if(listaCanciones[i].getNombreCancion() === cancionesPlaylist[k].getNombreCancion()) {
           auxPlaylist.push(index.playlists[j]);
           break;
          }
        }
			}
		}
    let nombrePlaylist_: string[] = [];
    for(let i: number = 0; i < auxPlaylist.length; i++){
      nombrePlaylist_.push(auxPlaylist[i].getNombrePlaylist());
    }
    console.log(nombrePlaylist_.sort().reverse());
    
    menuOpcionesAvanzadas3(autor_);
    } else {
      console.clear();
      console.log(`Playlist ordenadas descendentemente por nombre donde participa ${autor_.getNombreGrupo()} :`);
      let arrayAlbum : Album[] = autor_.getAlbumes();
      let auxCancionesGrupo: Cancion[] = [];
      let cancionesGrupo_: Cancion[] = [];
      for ( let i: number = 0; i < arrayAlbum.length; i++){
        auxCancionesGrupo = arrayAlbum[i].getCanciones();
        for(let j: number = 0; j < auxCancionesGrupo.length; j++){
          cancionesGrupo_.push(auxCancionesGrupo[j]);
        }
      }
      let auxPlaylist: Playlist[] = [];
    for(let i = 0; i < cancionesGrupo_.length; i++) {
			for(let j = 0; j < index.playlists.length; j++) {
        let cancionesPlaylist: Cancion[] = index.playlists[j].getCanciones();
        for(let k: number = 0; k < cancionesPlaylist.length; k++){
          if(cancionesGrupo_[i].getNombreCancion() === cancionesPlaylist[k].getNombreCancion()) {
            if (!auxPlaylist.includes(index.playlists[j])){
              auxPlaylist.push(index.playlists[j]);
              break;
            }
          }
        }
			}
		}
    let nombrePlaylist_: string[] = [];
    for(let i: number = 0; i < auxPlaylist.length; i++){
      nombrePlaylist_.push(auxPlaylist[i].getNombrePlaylist());
    }
    console.log(nombrePlaylist_.sort().reverse());
    menuOpcionesAvanzadas3(autor_);
  }
}

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
    //return 0;
  } else {
    menuOpcionesAvanzadas3(index.grupos[numeroGrupo]);
  }
  
 
}
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
    //return 0;
  } else {
    menuOpcionesAvanzadas3(index.artistas[numeroArtista]);
  }
  
 
}
/**
 * @function menuOpcionesAvanzadas2 menu para visualizar de los grupos y artistas de distintas maneras 
 * (alfabeticamente por titulo de canción, años de lanzamiento, número de reproducciones, etc)
 */
 export async function menuOpcionesAvanzadas3(autor_: Artistas | Grupos) {
  const respuestaOpAvanzadas = await inquirer.prompt({
    type: 'list',
    name: `command`, 
    message: `Elige cómo visualizar la información:`,
    choices: Object.values(CommandsGestionAvanzada)
  })
  
  switch(respuestaOpAvanzadas["command"]) {
    case CommandsGestionAvanzada.AlfTitCancionAsc:
      AlfTitCancionAsc(autor_);
      break;
    case CommandsGestionAvanzada.AlfTitCancionDesc:
      AlfTitCancionDesc(autor_);
      break;
    case CommandsGestionAvanzada.AlfNombAlbumAsc:
      AlfNombAlbumAsc(autor_);
      break;
    case CommandsGestionAvanzada.AlfNombAlbumDesc:
      AlfNombAlbumDesc(autor_);
      break;
    case CommandsGestionAvanzada.AlfNombPlaylistAsc:
      AlfNombPlaylistAsc(autor_);
      break;
    case CommandsGestionAvanzada.AlfNombPlaylistDesc:
      AlfNombPlaylistDesc(autor_);
      break;
    case CommandsGestionAvanzada.AnioLanzAlbumAsc:
      AnioLanzAlbumAsc(autor_);
      break;
    case CommandsGestionAvanzada.AnioLanzAlbumDesc:
      AnioLanzAlbumDesc(autor_);
      break;
    case CommandsGestionAvanzada.NumRepTotalAsc:
      NumRepTotalAsc(autor_);
      break;
    case CommandsGestionAvanzada.NumRepTotalDesc:
      NumRepTotalDesc(autor_);
      break;
    case CommandsGestionAvanzada.MostrarSingles:
      MostrarSingles(autor_);
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
export async function menuOpcionesAvanzadas(){
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
         menuOpcionesAvanzadas();
        break;
      case Commands.Salir:
        return;
    }
}

menuPrincipal();

// Crear base de datos
