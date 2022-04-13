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
import { addAlbum, menuModAlbum } from '../clases/inquirer-Album';
import { addCancion,addCancionGenero, menuModCancion } from './inquirer-Cancion';
import { addArtista, menumodArtista } from '../clases/inquirer_artista';
import { BaseDatos } from './basedatos';
import { menuOpcionesAvanzadas } from './inquirer';

/**
 * @function AlfTitCancionAsc ordena alfabéticamente por Título de Canción (Ascendente)
 */
export async function AlfTitCancionAsc(autor_: Artistas | Grupos) {
    if (autor_ instanceof Artistas){
    console.clear();
    console.log(`Canciones del artista ${autor_.getNombreArtista()} ordenadas ascendentemente:`);
    console.log(autor_.getCanciones().sort());
    menuOpcionesAvanzadas(autor_);
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
      menuOpcionesAvanzadas(autor_);
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
        menuOpcionesAvanzadas(autor_);
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
        menuOpcionesAvanzadas(autor_);
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
        menuOpcionesAvanzadas(autor_);
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
    menuOpcionesAvanzadas(autor_);
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
        menuOpcionesAvanzadas(autor_);
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
        menuOpcionesAvanzadas(autor_);
      }
}

/**
 * @function AlfNombPlaylistAsc ordena alfabéticamente por nombre de la PlayList (Ascendente)
 * @param autor_ 
 */
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
        
        menuOpcionesAvanzadas(autor_);
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
    
    menuOpcionesAvanzadas(autor_);
    }
}

/**
 * @function AlfNombPlaylistDesc ordena alfabéticamente por nombre de la PlayList (Descendente)
 * @param autor_ 
 */
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
        
        menuOpcionesAvanzadas(autor_);
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
        menuOpcionesAvanzadas(autor_);
    }
}

/**
 * @function AnioLanzAlbumAsc ordena por año de lanzamiento del Álbum (Ascendente)
 * @param autor_ 
 */
export async function AnioLanzAlbumAsc(autor_: Artistas | Grupos) {
    if (autor_ instanceof Artistas){
        console.clear();
        console.log(`Albumes del artista ${autor_.getNombreArtista()} ordenadas ascendentemente por año:`);
        let nombreDeAlbumes: string[] = autor_.getAlbumes();
        let albumesartistas: Album[] = [];
        for (let j: number = 0; j < nombreDeAlbumes.length; j++){
            for (let i: number = 0; i < index.albumes.length; i++){
                if(nombreDeAlbumes[j] === index.albumes[i].getNombreAlbum()){
                    albumesartistas.push(index.albumes[i]);
                    break;
                }
            }
        }
        let listaAlbumesArtistas: Album[] = albumesartistas;
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
        menuOpcionesAvanzadas(autor_);
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
        menuOpcionesAvanzadas(autor_);
    }
}

/**
 * @function AnioLanzAlbumDesc ordena por año de lanzamiento del Álbum (Descendente)
 * @param autor_ 
 */
export async function AnioLanzAlbumDesc(autor_: Artistas | Grupos) {
    if (autor_ instanceof Artistas){
        console.clear();
        console.log(`Albumes del artista ${autor_.getNombreArtista()} ordenadas descendentemente por año:`);
        let nombreDeAlbumes: string[] = autor_.getAlbumes();
        let albumesartistas: Album[] = [];
        for (let j: number = 0; j < nombreDeAlbumes.length; j++){
            for (let i: number = 0; i < index.albumes.length; i++){
                if(nombreDeAlbumes[j] === index.albumes[i].getNombreAlbum()){
                    albumesartistas.push(index.albumes[i]);
                    break;
                }
            }
        }
        let listaAlbumesArtistas: Album[] = albumesartistas;
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
        menuOpcionesAvanzadas(autor_);
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
        menuOpcionesAvanzadas(autor_);
    }
}

/**
 * @function NumRepTotalAsc ordena por número total de reproducciones (Ascendente)
 * @param autor_ 
 */
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
        menuOpcionesAvanzadas(autor_);
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
        menuOpcionesAvanzadas(autor_);
    }
}


/**
 * @function NumRepTotalDesc ordena por número total de reproducciones (Descendente)
 * @param autor_ 
 */
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
        menuOpcionesAvanzadas(autor_);
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
        menuOpcionesAvanzadas(autor_);
    }
}
  
/**
 * @function MostrarSingles muestra únicamente los singles lanzados
 * @param autor_ 
 */
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
        menuOpcionesAvanzadas(autor_);
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
        menuOpcionesAvanzadas(autor_);
    }
}
  
  