import inquirer from 'inquirer';
import { Album } from "../clases/album";
import { Artistas } from "../clases/artistas";
import { Cancion } from "../clases/cancion";
import { GenerosMusicales } from "../clases/generosMusicales";
import { Grupos } from "../clases/grupos";
import * as index from "../index";
import * as InquirerFile from "./inquirer";
import * as inGrupos from "../clases/inquirer-Grupos";


export enum CommandsSingle {
  Si = `Si`,
  No = `No`
}

let genero: GenerosMusicales[] = [];
let grupo: Grupos[] = [];
let album: Album[] = [];
let cancion: Cancion[] = [];

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
  artista.setOyentes(Number(oyentes["oyentesArtista"]));
  await addGeneroArtista(genero);
  artista.setGeneros(genero);
  await addGrupoArtista(grupo);
  artista.setGrupos(grupo);
  artista.setOyentes(Number(oyentes["oyentesArtista"]));
  await addAlbumArtista(album);
  artista.setAlbumes(album);
  await addCancionArtista(cancion);
  artista.setCanciones(cancion);
  console.log(artista);
  return artista;
}

export async function addGeneroArtista(genero: GenerosMusicales[]) {
  const generoArtista = await inquirer.prompt({
    type: "list",
    name: "generoArtista",
    message: "Introduce el/los géneros del artista: ",
    choices: Object.values(InquirerFile.CommandsGenerosCanciones)
  });
  switch(generoArtista["generoArtista"]){
    case InquirerFile.CommandsGenerosCanciones.Electronica:
      genero.push(index.Electronica);
      const generoArtista1 = await inquirer.prompt( {
        type: "list",
        name: "generoArtista",
        message: "El artista tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoArtista1["generoArtista"]) {
        case CommandsSingle.Si:
          await addGeneroArtista(genero)
          break;
        case CommandsSingle.No:
          break;
      }
    break;
    case InquirerFile.CommandsGenerosCanciones.Rock:
      genero.push(index.Rock);
      const generoArtista2 = await inquirer.prompt( {
        type: "list",
        name: "generoArtista",
        message: "El artista tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoArtista2["generoArtista"]) {
        case CommandsSingle.Si:
          await addGeneroArtista(genero)
          break;
        case CommandsSingle.No:
          break;
      }
    break;
    case InquirerFile.CommandsGenerosCanciones.Pop:
      genero.push(index.Pop);
      const generoArtista3 = await inquirer.prompt( {
        type: "list",
        name: "generoArtista",
        message: "El artista tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoArtista3["generoArtista"]) {
        case CommandsSingle.Si:
          await addGeneroArtista(genero)
          break;
        case CommandsSingle.No:
          break;
      }
    break;
    case InquirerFile.CommandsGenerosCanciones.Rap:
      genero.push(index.Rap);
      const generoArtista4 = await inquirer.prompt( {
        type: "list",
        name: "generoArtista",
        message: "El artista tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoArtista4["generoArtista"]) {
        case CommandsSingle.Si:
          await addGeneroArtista(genero)
          break;
        case CommandsSingle.No:
          break;
      }
    break;
    case InquirerFile.CommandsGenerosCanciones.Regueton:
      genero.push(index.Regueton);
      const generoArtista5 = await inquirer.prompt( {
        type: "list",
        name: "generoArtista",
        message: "El artista tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoArtista5["generoArtista"]) {
        case CommandsSingle.Si:
          await addGeneroArtista(genero)
          break;
        case CommandsSingle.No:
          break;
      }
    break;
    case InquirerFile.CommandsGenerosCanciones.Hip_Hop:
      genero.push(index.Hip_Hop);
      const generoArtista6 = await inquirer.prompt( {
        type: "list",
        name: "generoArtista",
        message: "El artista tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoArtista6["generoArtista"]) {
        case CommandsSingle.Si:
          await addGeneroArtista(genero)
          break;
        case CommandsSingle.No:
          break;
      }
    break;
    case InquirerFile.CommandsGenerosCanciones.Metal:
      genero.push(index.Metal);
      const generoArtista7 = await inquirer.prompt( {
        type: "list",
        name: "generoArtista",
        message: "El artista tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoArtista7["generoArtista"]) {
        case CommandsSingle.Si:
          await addGeneroArtista(genero)
          break;
        case CommandsSingle.No:
          break;
      }
    break;
    case InquirerFile.CommandsGenerosCanciones.Flamenco:
      genero.push(index.Flamenco);
      const generoArtista8 = await inquirer.prompt( {
        type: "list",
        name: "generoArtista",
        message: "El artista tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoArtista8["generoArtista"]) {
        case CommandsSingle.Si:
          await addGeneroArtista(genero)
          break;
        case CommandsSingle.No:
          break;
      }
    break;
    case InquirerFile.CommandsGenerosCanciones.RyB:
      genero.push(index.RyB);
      const generoArtista9 = await inquirer.prompt( {
        type: "list",
        name: "generoArtista",
        message: "El artista tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoArtista9["generoArtista"]) {
        case CommandsSingle.Si:
          await addGeneroArtista(genero)
          break;
        case CommandsSingle.No:
          break;
      }
    break;
    case InquirerFile.CommandsGenerosCanciones.Soul:
      genero.push(index.Soul);
      const generoArtista10 = await inquirer.prompt( {
        type: "list",
        name: "generoArtista",
        message: "El artista tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoArtista10["generoArtista"]) {
        case CommandsSingle.Si:
          await addGeneroArtista(genero)
          break;
        case CommandsSingle.No:
          break;
      }
    break;
  }
  return genero;
}

export async function addGrupoArtista(grupo: Grupos[]) {
  const grupoArtista = await inquirer.prompt({
    type: "list",
    name: "grupoArtista",
    message: "¿El artista pertenece a algún grupo?: ",
    choices: Object.values(InquirerFile.CommandsSingle)
  });
  switch(grupoArtista["grupoArtista"]) {
    case CommandsSingle.Si:
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
    case CommandsSingle.No:
      break;
  }
  return grupo;
}

export async function addAlbumArtista(album: Album[]) {
  const albumArtista = await inquirer.prompt({
    type: "list",
    name: "albumArtista",
    message: "¿El artista tiene algún album?: ",
    choices: Object.values(InquirerFile.CommandsSingle)
  });
  switch(albumArtista["albumArtista"]) {
    case CommandsSingle.Si:
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
    case CommandsSingle.No:
      break;
  }
  return album;
}

export async function addCancionArtista(cancion: Cancion[]) {
  const cancionArtista = await inquirer.prompt({
    type: "list",
    name: "cancionArtista",
    message: "¿El artista tiene alguna canción?: ",
    choices: Object.values(InquirerFile.CommandsSingle)
  });
  switch(cancionArtista["cancionArtista"]) {
    case CommandsSingle.Si:
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
        choices: Object.values(CommandsSingle)
      });
      switch(cancionArtista2["cancionArtista2"]) {
        case CommandsSingle.Si:
          await addCancionArtista(cancion);
          break;
        case CommandsSingle.No:
          break;
      }
      break;
    case CommandsSingle.No:
      break;
  }
  return cancion;
}
