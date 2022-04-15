import inquirer from 'inquirer';
import { Playlist } from "../clases-bases/playlist";
import { Cancion } from "../clases-bases/cancion";
import { menuPrincipal, db } from './inquirer';
import * as InquirerFile from "./inquirer";
import * as index from "../../index";

/**
 * Enum ComandsGestionPlay
 */
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
/**
 * Enum CommandsCrearPlay
 */
export enum CommandsCrearPlay {
  New = `Crear una Playlis nueva`,
  Exist = `Crear una Playlist a partir de una existente`,
  Salir = `Salir al menú principal`
}
/**
 * Enum Borrar o Añadir canciones
 */
export enum BoA {
 Borrar = `Borrar canciones`,
  Añadir = `Añadir canciones`,
  Salir = `Salir al menú principal`
}
/**
 * Funcion PrePlaylist
 */
export async function PrePlaylist() {
  //console.table(index.playlists);
  index.playlists.forEach(element =>{
    console.log(`Nombre de la Playlist: ${element.getNombrePlaylist()}
    Generos musicales: ${element.getGeneros()}
    Duración: ${element.getDuracion()} \n`);

  })
  InquirerFile.menuOpcionPlaylist();
} 
/**
 * Funcion AlfTitCancionAsc
 * @param play playlist object
 */
export async function AlfTitCancionAsc(play: Playlist) {
  console.clear();
  console.log(`Canciones de Playlist ${play.getNombrePlaylist()} ordenadas ascendentemente:`);
  let auxNombre: string [] = play.getCancionesNombre();
  console.log(auxNombre.sort());
  menuOpcionesAvanzadasPlay(play);

}
/**
 * Funcion AlfAutorAsc
 * @param play playlist object
 */
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
/**
 * Funcion AlfAutorDesc
 * @param play playlist object
 */
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
/**
 * Funcion AlfTitCancionDesc
 * @param play playlist object
 */
export async function AlfTitCancionDesc(play: Playlist) {
  console.clear();
  console.log(`Canciones de Playlist ${play.getNombrePlaylist()} ordenadas descendentemente:`);
  let auxNombre: string [] = play.getCancionesNombre();
  console.log(auxNombre.sort().reverse());
  menuOpcionesAvanzadasPlay(play);

}
/**
 * Funcion AnioLanzDesc
 * @param play playlist object
 */
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
/**
 * Funcion AnioLanzAsc
 * @param play playlist object
 */
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
/**
 * AlfDuracionAsc
 * @param play playlist object
 */
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
/**
 * Funcion AlfDuracionDesc
 * @param play playlist object
 */
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
/**
 * Funcion NumRepTotalAsc
 * @param play playlist object
 */
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
/**
 * Funcion AlfgeneroAsc
 * @param play playlist object
 */
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
/**
 * Funcion AlfgeneroDesc
 * @param play playlist object
 */
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
/**
 * Funcion NumRepTotalDesc
 * @param play playlist object
 */
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
/**
 * Menu Opciones Avanzadas de Playlist
 * @param play_ playlist object
 */
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
/**
 * Funcion NombrePlay
 */
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
/**
 * Funcion delCancionPlay
 * @param cancion array de canciones
 * @returns array modificado
 */
export async function delCancionPlay(cancion: Cancion[]){
  const cancionNombre = await inquirer.prompt( {
    type: "input",
    name: "cancion",
    message: "Nombre de la canción a borrar en la playlist: "
  });
  let nombreCancion_: string = cancionNombre["cancion"];
  let numeroCancion_: number = -1;
  for(let i: number = 0; i < index.canciones.length; i++){
    if(index.canciones[i].getNombreCancion() === nombreCancion_){
      numeroCancion_ = i;
      break;
    }
  }
  if (numeroCancion_ === -1){
    console.clear();
      console.log(`El nombre introducido no concuerda con ningún Cancion existente.`);
      await delCancionPlay(cancion);
      return 0;
    }
    else {
      cancion.splice(numeroCancion_, 1);
    }
}
/**
 * Funcion addCancionPlay
 * @param cancion array de canciones
 * @returns array modificada
 */
export async function addCancionPlay(cancion: Cancion[]){
  const cancionNombre = await inquirer.prompt( {
    type: "input",
    name: "cancion",
    message: "Nombre de la canción a añadir en la playlist: "
  });
  let nombreCancion_: string = cancionNombre["cancion"];
  let numeroCancion_: number = -1;
  for(let i: number = 0; i < index.canciones.length; i++){
    if(index.canciones[i].getNombreCancion() === nombreCancion_){
      numeroCancion_ = i;
      break;
    }
  }
  if (numeroCancion_ === -1){
    console.clear();
      console.log(`El nombre introducido no concuerda con ningún Cancion existente.`);
      await addCancionPlay(cancion);
      return 0;
    }
    else {
      cancion.push(index.canciones[numeroCancion_]);
    }
    const masCancion = await inquirer.prompt( {
      type: "list",
      name: "saberCancion",
      message: "¿Quieres incluir más Canciones?: ",
      choices: Object.values(InquirerFile.CommandsSingle)
    });
    switch(masCancion["saberCancion"]) {
      case InquirerFile.CommandsSingle.Si:
        await addCancionPlay(cancion)
        break;
      case InquirerFile.CommandsSingle.No:
        break;
    }
}
/**
 * Funcion addPlay
 */
export async function addPlay(){
  const nombrePlay = await inquirer.prompt( {
    type: "input",
    name: "nombre",
    message: "Introduce el nombre de la playlist: "
  })
  let nombre_: string = nombrePlay["nombre"];
  let cancion: Cancion[] = [];
  await addCancionPlay(cancion);
  let playlistNew = new Playlist(nombre_, cancion);
  index.playlists.push(playlistNew);
  InquirerFile.db.addNuevoPlay(playlistNew);
  console.clear();
  InquirerFile.menuPrincipal();
}
/**
 * Funcion addPlayExistente
 */
export async function addPlayExistente(){

  const nombrePlayE = await inquirer.prompt( {
    type: "input",
    name: "nombre",
    message: "Introduce el nombre de la playlist: "
  })
  let nombre_E: string = nombrePlayE["nombre"];
  let numeroplay_: number = -1;
  for(let i: number = 0; i < index.playlists.length; i++){
    if(index.playlists[i].getNombrePlaylist() === nombre_E){
      numeroplay_ = i;
      break;
    }
  }
  if (numeroplay_ === -1){
    console.clear();
      console.log(`El nombre introducido no concuerda con ninguna Playtlist existente.`);
      await addPlayExistente();
      return 0;
    }
    else{
      
      const nombrePlay = await inquirer.prompt( {
      type: "input",
      name: "nombre",
      message: "Introduce el nuevo nombre de la playlist: "
    });
    let nombre_: string = nombrePlay["nombre"];
    let cancion: Cancion[] = index.playlists[numeroplay_].getCanciones();
    const opcionPlay = await inquirer.prompt( {
      type: "list",
      name: "nombre",
      message: "Opciones: ",
      choices: Object.values(BoA)
    });
    switch(opcionPlay["nombre"]){
      case BoA.Añadir:
        await addCancionPlay(cancion);
        break;
      case BoA.Borrar:
        await delCancionPlay(cancion);
        break;
      case BoA.Salir:
        InquirerFile.menuOpcionPlaylist();
        return 0;
    }
    let playlistNew = new Playlist(nombre_, cancion);
    InquirerFile.db.addNuevoPlay(playlistNew);
    console.clear();
  InquirerFile.menuPrincipal();
  } 
}
/**
 * Funcion borrarPlay
 */
export async function borrarPlay() {
  const nombrePlayE = await inquirer.prompt( {
    type: "input",
    name: "nombre",
    message: "Introduce el nombre de la playlist: "
  })
  let nombre_E: string = nombrePlayE["nombre"];
  let numeroplay_: number = -1;
  let lista: Playlist[] = [];
   lista = db.getPlayLista();
  for(let i: number = 0; i < index.playlists.length; i++){
    if(lista[i].getNombrePlaylist() === nombre_E){
      numeroplay_ = i;
      break;
    }
  }
  if (numeroplay_ === -1){
    console.clear();
      console.log(`El nombre introducido no concuerda con ninguna Playtlist existente.`);
      await borrarPlay();
      return 0;
    }
    else{
      let lista: Playlist[] = db.getPlayLista();
      lista.splice(numeroplay_,1);
      db.setPlayLista(lista);
      InquirerFile.menuOpcionPlaylist();
      return 0;
    }

}
/**
 * Funcion crearPlay
 */
export async function crearPlay() {
  const respuestacrear = await inquirer.prompt({
    type:  'list',
    name: `command`, 
    message: `Elige opción sobre Playlist `,
    choices: Object.values(CommandsCrearPlay)
  })
  switch(respuestacrear["command"]) {
    case CommandsCrearPlay.New:
       addPlay();
      break;
    case CommandsCrearPlay.Exist:
      addPlayExistente();
      //inGenero.menuModGenero();
      break;
    case CommandsCrearPlay.Salir:
      console.clear();
         menuPrincipal();
    
    break;
  }
}