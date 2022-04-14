import inquirer from 'inquirer';
import { Playlist } from "../clases/playlist";
import { Album } from "./album";
import { Artistas } from "./artistas";
import { Cancion } from "./cancion";
import { GenerosMusicales } from "./generosMusicales";
import { Grupos } from "./grupos";
import { menuPrincipal } from './inquirer';
import * as InquirerFile from "./inquirer";
import * as index from "../index";
type doble = {
  nombre: string;
  anio: number;
}
export enum CommandsGestionPlay {
  AlfTitCancionAsc = `Canciónes alfabeticamente por título (Ascendente)`,
  AlfTitCancionDesc = `Canciónes alfabeticamente por título  (Descendente)`,
  AlfGoAAsc = `Canción alfabeticamente por nombre del grupo/artista (Ascendente)`,
  AlfGoADesc = `Canción alfabeticamente por nombre del grupo/artista  (Descendente)`,
  AlfduracionCanAsc = ` Alfabeticamente por duración de la canción  (Ascendente)`,
  AlfduracionCanDesc = ` Alfabeticamente por duración de la canción  (Descendente)`,
  AlfgeneroAsc = `Playlist ordenada por género musical alfabeticamente (Ascendente)`,
  AlfgeneroDesc = `Playlist ordenada Por género musical alfabeticamentet (Descendente)`,
  AnioLanzCancionAsc = `Año de Lanzamiento (Ascendente)`,
  AnioLanzCancionDesc = `Año de Lanzamiento (Descendente)`,
  NumRepTotalAsc = `Número de reproducciones totales (Ascendente)`,
  NumRepTotalDesc = `Número de reproducciones totales (Descendente)`,
  Salir = `Salir al menú principal`
}
export async function PrePlaylist() {
  //console.table(index.playlists);
  index.playlists.forEach(element =>{
    console.log(`Nombre de la Playlist: ${element.getNombrePlaylist()}
    Generos musicales: ${element.getGeneros()}
    Duración: ${element.getDuracion()} \n`);

  })
  InquirerFile.menuOpcionPlaylist();
} 
export async function AlfTitCancionAsc(play: Playlist) {
  console.clear();
  console.log(`Canciones de Playlist ${play.getNombrePlaylist()} ordenadas ascendentemente:`);
  let auxNombre: string [] = play.getCancionesNombre();
  console.log(auxNombre.sort());
  menuOpcionesAvanzadasPlay(play);

}
export async function AlfAutorAsc(play: Playlist) {
  console.clear();
  console.log(`Canciones de Playlist ${play.getNombrePlaylist()} ordenadas ascendentemente:`);
  let auxNombre: string [] = play.getCancionesNombre();
  let auxCancion: Cancion [] = play.getCanciones();
  let autorCancion: [string, string][] = [];
  for(let i: number = 0; i < auxCancion.length; i++){
     autorCancion.push([auxCancion[i].getAutorCancion(),auxCancion[i].getNombreCancion()])
  }
  autorCancion = autorCancion.sort();
  for(let i: number = 0; i < autorCancion.length; i++){
    console.log(autorCancion[i][1], `(${autorCancion[i][0]})`);
  }
 
  menuOpcionesAvanzadasPlay(play);

}
export async function AlfAutorDesc(play: Playlist) {
  console.clear();
  console.log(`Canciones de Playlist ${play.getNombrePlaylist()} ordenadas ascendentemente:`);
  let auxNombre: string [] = play.getCancionesNombre();
  let auxCancion: Cancion [] = play.getCanciones();
  let autorCancion: [string, string][] = [];
  for(let i: number = 0; i < auxCancion.length; i++){
     autorCancion.push([auxCancion[i].getAutorCancion(),auxCancion[i].getNombreCancion()])
  }
  autorCancion = autorCancion.sort().reverse();
  for(let i: number = 0; i < autorCancion.length; i++){
    console.log(autorCancion[i][1], `(${autorCancion[i][0]})`);
  }
 
  menuOpcionesAvanzadasPlay(play);

}
export async function AlfTitCancionDesc(play: Playlist) {
  console.clear();
  console.log(`Canciones de Playlist ${play.getNombrePlaylist()} ordenadas descendentemente:`);
  let auxNombre: string [] = play.getCancionesNombre();
  console.log(auxNombre.sort().reverse());
  menuOpcionesAvanzadasPlay(play);

}
export async function AnioLanzDesc(play: Playlist) {
  console.clear();
  console.log(`Canciones de Playlist ${play.getNombrePlaylist()} ordenadas por año de lanzamiento ascendete:`);
  let listaCanciones: Cancion[] = play.getCanciones();
  let listaCancionesAlbum: Cancion[] = [];
  let anioCancion: [number, string][] = [];
  for(let i: number = 0; i < listaCanciones.length; i++){
    for(let j: number = 0; j < index.albumes.length; j++){
      listaCancionesAlbum = index.albumes[j].getCanciones();
      for(let k: number = 0; k < listaCancionesAlbum.length; k++){
        if (listaCanciones[i].getNombreCancion() === listaCancionesAlbum[k].getNombreCancion()){
          anioCancion.push([index.albumes[j].getYear(), listaCanciones[i].getNombreCancion()]);
        }
      }
    }
  }
  anioCancion = anioCancion.sort().reverse();
  let tamanio: number = anioCancion.length;
  tamanio = tamanio * 2;
  for(let i: number = 0; i < anioCancion.length; i++){
    //for(let j: number = 1; j < 2; j++){
    console.log(anioCancion[i][1], `(${anioCancion[i][0]})`);
   
  //}
}
    
  //console.log(anioCancion.sort().reverse);
  menuOpcionesAvanzadasPlay(play);
}
export async function AnioLanzAsc(play: Playlist) {
  console.clear();
  console.log(`Canciones de Playlist ${play.getNombrePlaylist()} ordenadas por año de lanzamiento ascendete:`);
  let listaCanciones: Cancion[] = play.getCanciones();
  let listaCancionesAlbum: Cancion[] = [];
  let anioCancion: [number, string][] = [];
  for(let i: number = 0; i < listaCanciones.length; i++){
    for(let j: number = 0; j < index.albumes.length; j++){
      listaCancionesAlbum = index.albumes[j].getCanciones();
      for(let k: number = 0; k < listaCancionesAlbum.length; k++){
        if (listaCanciones[i].getNombreCancion() === listaCancionesAlbum[k].getNombreCancion()){
          anioCancion.push([index.albumes[j].getYear(), listaCanciones[i].getNombreCancion()]);
        }
      }
    }
  }
  anioCancion = anioCancion.sort();
  let tamanio: number = anioCancion.length;
  tamanio = tamanio * 2;
  for(let i: number = 0; i < anioCancion.length; i++){
    //for(let j: number = 1; j < 2; j++){
    console.log(anioCancion[i][1], `(${anioCancion[i][0]})`);
   
  //}
}
    
  //console.log(anioCancion.sort().reverse);
  menuOpcionesAvanzadasPlay(play);
}
export async function AlfDuracionAsc(play: Playlist) {
  
      //console.clear();
      console.log(`Canciones de ${play.getNombrePlaylist()} ordenadas por duración ascendentes:`);
      let listaCanciones: Cancion[] = play.getCanciones();
      for(let i = 0; i < listaCanciones.length; i++) {
          for(let j = 0; j < listaCanciones.length - 1; j++) {
              if(listaCanciones[j].getDuracionCancionSecs() < listaCanciones[j + 1].getDuracionCancionSecs()) {
                  let swap = listaCanciones[j];
                  listaCanciones[j] = listaCanciones[j + 1];
                  listaCanciones[j + 1] = swap;
              }
          }
        }
      for(let i: number = 0; i < listaCanciones.length; i++){
          console.log(` ${listaCanciones[i].getNombreCancion()} (${listaCanciones[i].getDuracionCancion()})`);
      }
      console.log(``);
      menuOpcionesAvanzadasPlay(play);
}
export async function AlfDuracionDesc(play: Playlist) {
  
  //console.clear();
  console.log(`Canciones de ${play.getNombrePlaylist()} ordenadas por duración descendentes:`);
  let listaCanciones: Cancion[] = play.getCanciones();
  for(let i = 0; i < listaCanciones.length; i++) {
      for(let j = 0; j < listaCanciones.length - 1; j++) {
          if(listaCanciones[j].getDuracionCancionSecs() > listaCanciones[j + 1].getDuracionCancionSecs()) {
              let swap = listaCanciones[j];
              listaCanciones[j] = listaCanciones[j + 1];
              listaCanciones[j + 1] = swap;
          }
      }
    }
  for(let i: number = 0; i < listaCanciones.length; i++){
      console.log(` ${listaCanciones[i].getNombreCancion()} (${listaCanciones[i].getDuracionCancion()})`);
  }
  console.log(``);
  menuOpcionesAvanzadasPlay(play);
}
export async function NumRepTotalAsc(play: Playlist) {
  
  //console.clear();
  console.log(`Canciones de ${play.getNombrePlaylist()} ordenadas por número de reproducciones ascendentes:`);
  let listaCanciones: Cancion[] = play.getCanciones();
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
  console.log(``);
  menuOpcionesAvanzadasPlay(play);
}
export async function AlfgeneroAsc(play: Playlist) {
  
  //console.clear();
  console.log(`Canciones de ${play.getNombrePlaylist()} ordenadas por género ascendentes:`);
  let auxCanciones: Cancion[] = play.getCanciones();
  let auxCancionesnombre: string[] = play.getCancionesNombre().sort();
  let cancionesOrdenadas: Cancion[] = [];
  for(let i: number = 0; i < auxCancionesnombre.length; i++){
    for(let j: number = 0; j < auxCanciones.length; j++){
      if (auxCancionesnombre[i] === auxCanciones[j].getNombreCancion()){
        cancionesOrdenadas.push(auxCanciones[j]);
        //contador++;
        break;
      }
    }
  }
  let auxGeneros_nombre: string[] = play.getGeneros().sort();
  let cancionesordenadas: Cancion[] = [];
  for(let i: number = 0; i < auxGeneros_nombre.length; i++){
    for(let j: number = 0; j < cancionesOrdenadas.length; j++){
      //let contador: number = 0;
      let auxgenerosCancion: string[] = cancionesOrdenadas[j].getGeneroMusical();
      for( let k: number = 0; k < auxgenerosCancion.length; k++){
       if (auxGeneros_nombre[i] === auxgenerosCancion[k]){
          cancionesordenadas.push(cancionesOrdenadas[j]);
          //contador++;
          break;
        }
      }
      
    }
  }
  
  cancionesordenadas = [...new Set(cancionesordenadas)];
  cancionesordenadas.forEach(element =>{
    console.log(`Cancion: ${element.getNombreCancion()} (genero: ${element.getGeneroMusical().sort()})`);
  })
  //let auxGeneros_: GenerosMusicales[] = play.getGenerosObject();
  console.log(``);
  menuOpcionesAvanzadasPlay(play);
}
export async function AlfgeneroDesc(play: Playlist) {
  
  //console.clear();
  console.log(`Canciones de ${play.getNombrePlaylist()} ordenadas por género descendentes:`);
  let auxCanciones: Cancion[] = play.getCanciones();
  let auxGeneros_nombre: string[] = play.getGeneros().sort().reverse();
  let auxCancionesnombre: string[] = play.getCancionesNombre().sort().reverse();

  let cancionesOrdenadas: Cancion[] = [];
  for(let i: number = 0; i < auxCancionesnombre.length; i++){
    for(let j: number = 0; j < auxCanciones.length; j++){
      if (auxCancionesnombre[i] === auxCanciones[j].getNombreCancion()){
        cancionesOrdenadas.push(auxCanciones[j]);
        //contador++;
        break;
      }
    }
  }
  let cancionesordenadas: Cancion[] = [];
  for(let i: number = 0; i < auxGeneros_nombre.length; i++){
    for(let j: number = 0; j < cancionesOrdenadas.length; j++){
      //let contador: number = 0;
      let auxgenerosCancion: string[] = cancionesOrdenadas[j].getGeneroMusical();
      for( let k: number = 0; k < auxgenerosCancion.length; k++){
       if (auxGeneros_nombre[i] === auxgenerosCancion[k]){
          cancionesordenadas.push(cancionesOrdenadas[j]);
          //contador++;
          break;
        }
      }
      
    }
  }
  
  cancionesordenadas = [...new Set(cancionesordenadas)];
  cancionesordenadas.forEach(element =>{
    console.log(`Cancion: ${element.getNombreCancion()} (genero: ${element.getGeneroMusical().sort().reverse()})`);
  })
  //let auxGeneros_: GenerosMusicales[] = play.getGenerosObject();
  console.log(``);
  menuOpcionesAvanzadasPlay(play);
}
export async function NumRepTotalDesc(play: Playlist) {
  
  console.clear();
  console.log(`Canciones de ${play.getNombrePlaylist()} ordenadas por número de reproducciones ascendentes:`);
  let listaCanciones: Cancion[] = play.getCanciones();
 
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
  console.log(``);
  menuOpcionesAvanzadasPlay(play);
}
export async function menuOpcionesAvanzadasPlay(play_: Playlist) {
  const respuestaOpAvanzadas = await inquirer.prompt({
    type: 'list',
    name: `command`, 
    message: `Elige cómo visualizar la información:`,
    choices: Object.values(CommandsGestionPlay)
  })
  switch(respuestaOpAvanzadas["command"]) {
    case CommandsGestionPlay.AlfTitCancionAsc:
      AlfTitCancionAsc(play_);
      break;
    case CommandsGestionPlay.AlfTitCancionDesc:
      AlfTitCancionDesc(play_);
      break;
    case CommandsGestionPlay.AlfGoAAsc:
     AlfAutorAsc(play_);
      break;
    case CommandsGestionPlay.AlfGoADesc:
      AlfAutorDesc(play_);
      break;
    case CommandsGestionPlay.AlfduracionCanAsc:
      AlfDuracionAsc(play_);
      break;
    case CommandsGestionPlay.AlfduracionCanDesc:
      AlfDuracionDesc(play_);
      break;
    case CommandsGestionPlay.AlfgeneroAsc:
     AlfgeneroAsc(play_);
      break;
    case CommandsGestionPlay.AlfgeneroDesc:
      AlfgeneroDesc(play_);
            break;
    case CommandsGestionPlay.AnioLanzCancionAsc:
      AnioLanzAsc(play_);
      break;
    case CommandsGestionPlay.AnioLanzCancionDesc:
      AnioLanzDesc(play_);
      break;
    case CommandsGestionPlay.NumRepTotalAsc:
      NumRepTotalAsc(play_);
      break;
      case CommandsGestionPlay.NumRepTotalDesc:
        NumRepTotalDesc(play_);
      break;
    case CommandsGestionPlay.Salir:
      console.clear();
      menuPrincipal();
      break;
  }
}
export async function NombrePlay() {
  const nombrePlay = await inquirer.prompt({
    type: 'input',
    name: `command`, 
    message: `Introduce el nombre de la Playlist que quieres visualizar:`
  })
  let nombre: string = nombrePlay["command"];
  
  let numero: number = -1;
  for(let i: number = 0; i < index.playlists.length; i++){
    if(index.playlists[i].getNombrePlaylist() === nombre){
      numero = i;
      break;
    }
  }
  if(numero === -1){
    console.log(`No existe una Playlist con ese nombre`);
    NombrePlay();
  } else {
    menuOpcionesAvanzadasPlay(index.playlists[numero]);
  }
}