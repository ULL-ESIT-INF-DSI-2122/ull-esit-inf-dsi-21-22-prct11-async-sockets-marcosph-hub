import inquirer from 'inquirer';
import { Album } from "./album";
import { Artistas } from "./artistas";
import { Cancion } from "./cancion";
import { GenerosMusicales } from "./generosMusicales";
import { Grupos } from "./grupos";
import { menuPrincipal } from './inquirer';
import * as InquirerFile from "./inquirer";
import { addCancion,addCancionGenero, menuModCancion } from './inquirer-Cancion';
import * as index from "../index";
export enum CommandsPartesGenero {
  Nombre = `Nombre`,
  Grupos = `Grupos`,
  Artistas = `Artistas`,
  Canciones = `Canciones`,
  ALbumes = `Albumes`,
  Salir = `Salir al menú principal`
}
export async function addCancionesGenero(cancion_: Cancion[]){
  const nombreCancion = await inquirer.prompt({
    type: "input",
    name: "nombreCancion",
    message: "Introduce el nombre del Cancion: "
  });
  let nombreCancion_: string = nombreCancion["nombreCancion"];
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
      await addCancionesGenero(cancion_);
      return 0;
    }
    else {
      cancion_.push(index.canciones[numeroCancion_]);
    }

    const masCancion = await inquirer.prompt( {
      type: "list",
      name: "saberCancion",
      message: "¿Este género tiene más Canciones asociados?: ",
      choices: Object.values(InquirerFile.CommandsSingle)
    });
    switch(masCancion["saberCancion"]) {
      case InquirerFile.CommandsSingle.Si:
        await addCancionesGenero(cancion_)
        break;
      case InquirerFile.CommandsSingle.No:
        break;
    }
}

export async function addAlbumGenero(album_: Album[]){
  const nombreAlbum = await inquirer.prompt({
    type: "input",
    name: "nombreAlbum",
    message: "Introduce el nombre del Album: "
  });
  let nombreAlbum_: string = nombreAlbum["nombreAlbum"];
  let numeroAlbum_: number = -1;
  for(let i: number = 0; i < index.albumes.length; i++){
    if(index.albumes[i].getNombreAlbum() === nombreAlbum_){
      numeroAlbum_ = i;
      break;
    }
  }
  if (numeroAlbum_ === -1){
    console.clear();
      console.log(`El nombre introducido no concuerda con ningún Album existente.`);
      await addAlbumGenero(album_);
      return 0;
    }
    else {
      album_.push(index.albumes[numeroAlbum_]);
    }

    const masAlbum = await inquirer.prompt( {
      type: "list",
      name: "saberAlbum",
      message: "¿Este género tiene más Albumes asociados?: ",
      choices: Object.values(InquirerFile.CommandsSingle)
    });
    switch(masAlbum["saberAlbum"]) {
      case InquirerFile.CommandsSingle.Si:
        await addAlbumGenero(album_);
        break;
      case InquirerFile.CommandsSingle.No:
        break;
    }
}
export async function addGrupoGenero(grupos_: Grupos[]){
  const nombreGrupo = await inquirer.prompt({
    type: "input",
    name: "nombreGrupo",
    message: "Introduce el nombre del grupo: "
  });
  let nombreGrupo_: string = nombreGrupo["nombreGrupo"];
  let numeroGrupo_: number = -1;
  for(let i: number = 0; i < index.grupos.length; i++){
    if(index.grupos[i].getNombreGrupo() === nombreGrupo_){
      numeroGrupo_ = i;
      break;
    }
  }
  if (numeroGrupo_ === -1){
    console.clear();
      console.log(`El nombre introducido no concuerda con ningún grupo existente.`);
      await addGrupoGenero(grupos_);
      return 0;
    }
    else {
      grupos_.push(index.grupos[numeroGrupo_]);
    }

    const masGrupo = await inquirer.prompt( {
      type: "list",
      name: "sabergrupo",
      message: "¿Este género tiene más grupos asociados?: ",
      choices: Object.values(InquirerFile.CommandsSingle)
    });
    switch(masGrupo["sabergrupo"]) {
      case InquirerFile.CommandsSingle.Si:
        await addGrupoGenero(grupos_)
        break;
      case InquirerFile.CommandsSingle.No:
        break;
    }
}
export async function addArtistaGenero(artista_: Artistas[]){
  const nombreArtista = await inquirer.prompt({
    type: "input",
    name: "nombreArtista",
    message: "Introduce el nombre del artista: "
  });
  let nombreArtista_: string = nombreArtista["nombreArtista"];
  let numeroArtista_: number = -1;
  for(let i: number = 0; i < index.artistas.length; i++){
    if(index.artistas[i].getNombreArtista() === nombreArtista_){
      numeroArtista_ = i;
      break;
    }
  }
  if (numeroArtista_ === -1){
    console.clear();
      console.log(`El nombre introducido no concuerda con ningún Artista existente.`);
      await addArtistaGenero(artista_);
      return 0;
    }
    else {
      artista_.push(index.artistas[numeroArtista_]);
    }

    const masArtista = await inquirer.prompt( {
      type: "list",
      name: "saberArtista",
      message: "¿Este género tiene más Artistas asociados?: ",
      choices: Object.values(InquirerFile.CommandsSingle)
    });
    switch(masArtista["saberArtista"]) {
      case InquirerFile.CommandsSingle.Si:
        await addArtistaGenero(artista_)
        break;
      case InquirerFile.CommandsSingle.No:
        break;
    }
}

export async function addGenero(){
  const nombreGenero = await inquirer.prompt( {
    type: "input",
    name: "nombreGenero",
    message: "Introduce el nombre del género: "
  });
  const saberGrupo = await inquirer.prompt( {
    type: "list",
    name: "sabergrupo",
    message: "¿Este género tiene grupos asociados?: ",
    choices: Object.values(InquirerFile.CommandsSingle)
  });
  let autores_: Grupos[] = [];
  switch(saberGrupo["sabergrupo"]) {
    case InquirerFile.CommandsSingle.Si:
      await addGrupoGenero(autores_);
      break;
    case InquirerFile.CommandsSingle.No:
      break;
  }

  const saberArtista = await inquirer.prompt( {
    type: "list",
    name: "sabergrupo",
    message: "¿Este género tiene Artistas asociados?: ",
    choices: Object.values(InquirerFile.CommandsSingle)
  });
  let artistas_: Artistas[] = [];
  switch(saberArtista["sabergrupo"]) {
    case InquirerFile.CommandsSingle.Si:
      await addArtistaGenero(artistas_)
      break;
    case InquirerFile.CommandsSingle.No:
      break;
  }

  const saberAlbum = await inquirer.prompt( {
    type: "list",
    name: "saberAlbum",
    message: "¿Este género tiene Albumes asociados?: ",
    choices: Object.values(InquirerFile.CommandsSingle)
  });
  let album_: Album[] = [];
  switch(saberAlbum["saberAlbum"]) {
    case InquirerFile.CommandsSingle.Si:
      await addAlbumGenero(album_)
      break;
    case InquirerFile.CommandsSingle.No:
      break;
  }

  const saberCancion = await inquirer.prompt( {
    type: "list",
    name: "saberCancion",
    message: "¿Este género tiene Canciones asociados?: ",
    choices: Object.values(InquirerFile.CommandsSingle)
  });
  let cancion_: Cancion[] = [];
  switch(saberCancion["saberCancion"]) {
    case InquirerFile.CommandsSingle.Si:
      await addCancionesGenero(cancion_)
      break;
    case InquirerFile.CommandsSingle.No:
      break;
  }
  let nombre = nombreGenero["nombreGenero"];
  let genero = new GenerosMusicales(nombre);
  genero.setAlbumes(album_);
  genero.setArtistas(artistas_);
  genero.setGrupos(autores_);
  genero.setCanciones(cancion_);
  console.clear();
  menuPrincipal();
}

export async function modGenero(numero: number){
  const generoModificar = await inquirer.prompt({
    type: 'list',
    name: `modificar`,
    message: `¿Qué quieres modificar del genero?`,
    choices: Object.values(CommandsPartesGenero)
  });
  switch(generoModificar["modificar"]){
    case CommandsPartesGenero.Nombre:
      const nombreGenero = await inquirer.prompt( {
        type: "input",
        name: "nombreGenero",
        message: "Introduce el nombre del género: "
      });
      let nombreGenero_ = nombreGenero["nombreGenero"];
      index.generos[numero].setNombreGenero(nombreGenero_);
      await modGenero(numero);
      break;
    case CommandsPartesGenero.Grupos:
      let grupos_: Grupos[] = [];
      await addGrupoGenero(grupos_);
      index.generos[numero].setGrupos(grupos_);
      await modGenero(numero);
      break;
    case CommandsPartesGenero.ALbumes:
      let album_: Album[] = [];
      await addAlbumGenero(album_);
      index.generos[numero].setAlbumes(album_);
      await modGenero(numero);
      break;
    case CommandsPartesGenero.Artistas:
      let artistas_: Artistas[] = [];
      await addArtistaGenero(artistas_);
      index.generos[numero].setArtistas(artistas_);
      await modGenero(numero);
      break;
      case CommandsPartesGenero.Canciones:
        let canciones_: Cancion[] = [];
        await addCancionesGenero(canciones_);
        index.generos[numero].setCanciones(canciones_);
        await modGenero(numero);
        break;
      case CommandsPartesGenero.Salir:
        console.clear();
        menuPrincipal();
      return 0;
      break;
    }
}
export async function menuModGenero(){
  const generoModificada = await inquirer.prompt({
    type: 'input',
    name: `modificar`,
    message: `Introduce el nombre del genero que quieres modificar`,
  })
  let nombreGeneroModificar: string = generoModificada["modificar"];
  let numeroGenero: number = -1;
  for(let i: number = 0; i < index.generos.length; i++){
    if(index.generos[i].getNombreGenero() === nombreGeneroModificar){
      numeroGenero = i;
      break;
    }
  }
  if(numeroGenero === -1){
    console.log(`No existe un génro con ese nombre`);
    menuPrincipal();
    return 0;
  } else {
  await modGenero(numeroGenero);
  }
}