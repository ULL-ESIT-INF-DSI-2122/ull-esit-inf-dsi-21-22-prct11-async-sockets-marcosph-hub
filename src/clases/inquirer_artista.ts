import inquirer from 'inquirer';
import { Album } from "../clases/album";
import { Artistas } from "../clases/artistas";
import { Cancion } from "../clases/cancion";
import { GenerosMusicales } from "../clases/generosMusicales";
import { Grupos } from "../clases/grupos";
import { addCancionGenero } from './inquirer-Cancion';
import * as index from "../index";
import * as InquirerFile from "./inquirer";
/**
 * Enum que contiene las partes del artista
 */
export enum CommandsPartesArtista {
  Nombre = `Nombre`,
  Grupos = `Grupos`,
  GeneroMusical = `Género musical`,
  Albumes = `Albumes`,
  Canciones = `Canciones`,
  Oyentes = `Número de oyentes mensuales`,
  Salir = `Salir al menú principal`
}

let grupo: Grupos[] = [];
let album: Album[] = [];
let cancion: Cancion[] = [];

/**
 * Funcion addArtista
 */
export async function addArtista() {
  const nombreArtista = await inquirer.prompt({
    type: "input",
    name: "nombreArtista",
    message: "Introduce el nombre del artista: "
  });
  const oyentes = await inquirer.prompt({
    type: "input",
    name: "oyentesArtista",
    message: "Introduce el número de oyentes mensuales del artista: "
  });
  let artista: Artistas = new Artistas(nombreArtista["nombreArtista"]);
  await addGrupoArtista(grupo);
  artista.setGrupos(grupo);
  await addAlbumArtista(album);
  artista.setAlbumes(album);
  await addCancionArtista(cancion);
  artista.construirArtista(cancion, oyentes["oyentesArtista"]);
  console.clear();
  InquirerFile.menuPrincipal();
} 

/**
 * Funcion addGrupoArtista
 * @param grupo array de Grupos
 * @returns array de Grupos
 */
export async function addGrupoArtista(grupo: Grupos[]) {
  const grupoArtista = await inquirer.prompt({
    type: "list",
    name: "grupoArtista",
    message: "¿El artista pertenece a algún grupo?: ",
    choices: Object.values(InquirerFile.CommandsSingle)
  });
  switch(grupoArtista["grupoArtista"]) {
    case InquirerFile.CommandsSingle.Si:
      const GrupoArtista1 = await inquirer.prompt( {
        type: "input",
        name: "grupoArtista1",
        message: "Nombre del Grupo del artista: "
      });
      index.grupos.forEach(element => {
        if(element.getNombreGrupo() === GrupoArtista1["grupoArtista1"]){
          grupo.push(element);
        }
      });
      break;
    case InquirerFile.CommandsSingle.No:
      break;
  }
  return grupo;
}
/**
 * Funcion addAlbumArtista
 * @param album array de Album
 * @returns array de Album
 */
export async function addAlbumArtista(album: Album[]) {
  const albumArtista = await inquirer.prompt({
    type: "list",
    name: "albumArtista",
    message: "¿El artista tiene algún album?: ",
    choices: Object.values(InquirerFile.CommandsSingle)
  });
  switch(albumArtista["albumArtista"]) {
    case InquirerFile.CommandsSingle.Si:
      const albumArtista1 = await inquirer.prompt( {
        type: "input",
        name: "grupoArtista1",
        message: "Nombre del Album del artista: "
      });
      index.albumes.forEach(element => {
        if(element.getNombreAlbum() === albumArtista1["grupoArtista1"]){
          album.push(element);
        }
      });
      break;
    case InquirerFile.CommandsSingle.No:
      break;
  }
  return album;
}
/**
 * Funcion addCancionArtista()
 * @param cancion array de Cancion
 * @returns array de Cancion
 */
export async function addCancionArtista(cancion: Cancion[]) {
      const cancionArtista1 = await inquirer.prompt( {
        type: "input",
        name: "cancionArtista1",
        message: "Nombre de la canción del artista: "
      });
      index.canciones.forEach(element => {
        if(element.getNombreCancion() === cancionArtista1["cancionArtista1"]){
          cancion.push(element);
        }
      });
      const cancionArtista2 = await inquirer.prompt( {
        type: "list",
        name: "cancionArtista2",
        message: "¿El artista tiene más canciones?: ",
        choices: Object.values(InquirerFile.CommandsSingle)
      });
      switch(cancionArtista2["cancionArtista2"]) {
        case InquirerFile.CommandsSingle.Si:
          await addCancionArtista(cancion);
          break;
        case InquirerFile.CommandsSingle.No:
          break;
      }
  return cancion;
}

/**
 * Funcion modArtista
 * @param numero numero del indice del artista
 */
export async function modArtista(numero: number){
  const artistaModificar = await inquirer.prompt({
    type: 'list',
    name: `modificar`,
    message: `¿Qué quieres modificar del artista?`,
    choices: Object.values(CommandsPartesArtista)
  })

  switch(artistaModificar["modificar"]){
    case CommandsPartesArtista.Nombre:
      const nombreArtista = await inquirer.prompt( {
        type: "input",
        name: "nombreArtista",
        message: "Introduce el nuevo nombre del artista: "
      })
      let nombreArtista_ = nombreArtista["nombreArtista"];
      index.artistas[numero].setNombreArtista(nombreArtista_);
      await modArtista(numero);
      break;
    case CommandsPartesArtista.Grupos:
      const nombreGrupo = await inquirer.prompt( {
        type: "input",
        name: "nombreGrupo",
        message: "Introduce el nuevo nombre del grupo: "
      });
      let nombreGrupo_ = nombreGrupo["nombreGrupo"];
      index.grupos.forEach(element => {
        if(nombreGrupo_ === element.getNombreGrupo()){
          index.artistas[numero].setGrupos([element]);
        }
      });
      await modArtista(numero);
      break;
    case CommandsPartesArtista.GeneroMusical:
      let genero_: GenerosMusicales[] = [];
      await addCancionGenero(genero_);
      index.artistas[numero].setGeneros(genero_);
      await modArtista(numero);
      break;
    case CommandsPartesArtista.Albumes:
      const albumesArtista = await inquirer.prompt( {
        type: "input",
        name: "albumesArtista",
        message: `Introduce el nuevo nombre del album del artista: `
      });
      let albumes_ = albumesArtista["albumesArtista"];
      index.albumes.forEach(element => {
        if(albumes_ === element.getNombreAlbum()){
          index.artistas[numero].setAlbumes([element]);
        }
      });
      await modArtista(numero);
      break;
      case CommandsPartesArtista.Canciones:
      let aux_: Cancion[] = [];
      await addCancionArtista(aux_);
      index.artistas[numero].setCanciones(aux_);
      await modArtista(numero);
      break;        
    case CommandsPartesArtista.Oyentes:
      const numOyentes = await inquirer.prompt( {
        type: "number",
        name: "numOyentes",
        message: "Introduce el nuevo numero de oyentes mensuales del artista: "
      });
      let oyentes_: number = numOyentes["numOyentes"];
      index.artistas[numero].setOyentes(oyentes_);
      await modArtista(numero);
      break;
    case CommandsPartesArtista.Salir:
      break;
  }
  console.clear();
  InquirerFile.menuPrincipal();
}
/**
 * Menu Modificar Artista
 */
export async function menumodArtista(){
  const artistaModificado = await inquirer.prompt({
    type: 'input',
    name: `modificar`,
    message: `Introduce el nombre del artista que quieres modificar:`,
  })
  let nombreArtistaModificar: string = artistaModificado["modificar"];
  let numeroArtista: number = -1;
  for(let i: number = 0; i < index.artistas.length; i++){
    if(index.artistas[i].getNombreArtista() === nombreArtistaModificar){
      numeroArtista = i;
      break;
    }
  }
  if(numeroArtista === -1){
    console.log(`No existe un artista con ese nombre`);
    InquirerFile.menuPrincipal();
  } else {
    modArtista(numeroArtista);
  }
}
