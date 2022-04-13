import inquirer from 'inquirer';
import { Album } from "./album";
import { Artistas } from "./artistas";
import { Cancion } from "./cancion";
import { GenerosMusicales } from "./generosMusicales";
import { Grupos } from "./grupos";
import { Playlist } from "./playlist";
import * as index from "../index";
import * as InquirerFile from "./inquirer";
import { CommandsGenerosCanciones } from './inquirer';
import { addCancion, addCancionGenero } from './inquirer-Cancion';
import { addGrupo } from './inquirer-Grupos';
import { menuPrincipal } from './inquirer';


/**
 * @enum CommandsGrupoArtista si es un grupo o un artista
 */
export enum CommandsGrupoArtista {
  Grupo = `Grupo`,
  Artista = `Artista`
}


/**
 * @enum CommandsPartesAlbum partes de la clase Album
 */
 export enum CommandsPartesAlbum {
  Nombre = `Nombre`,
  Autores = `Autores`,
  GeneroMusical = `Género musical`,
  YearPublicacion = `Año de publicación`,
  Canciones = `Canciones`,
  Salir = `Salir al menú principal`
}
export async function cancionesDeAlbum(cancionAlbum: Cancion[]){
  const cancionesNombreAlbum = await inquirer.prompt( {
    type: "input",
    name: "cancionesNAlbum",
    message: "Introduce las canciones del álbum: "
  });
  
  let nombreCancionModificar: string = cancionesNombreAlbum["cancionesNAlbum"];
  
    let numeroCancion: number = -1;
    for(let i: number = 0; i < index.canciones.length; i++){
      if(index.canciones[i].getNombreCancion() === nombreCancionModificar){
        numeroCancion = i;
        break;
      }
    }
    if(numeroCancion === -1){
      console.clear();
      console.log(`No existe una cancion con ese nombre.`);
      
      await cancionesDeAlbum(cancionAlbum);
      return 0; 
      
    } else {
     cancionAlbum.push(index.canciones[numeroCancion]);
    }

    const mascanciones = await inquirer.prompt( {
      type: "list",
      name: "canciones",
      message: "Tiene más canciones?: ",
      choices: Object.values(InquirerFile.CommandsSingle)
    });
    switch(mascanciones["canciones"]) {
      case InquirerFile.CommandsSingle.Si:
        await cancionesDeAlbum(cancionAlbum)
        break;
      case InquirerFile.CommandsSingle.No:
        break;
    }
}
/**
 * @function addAlbum para añadir un nuevo album
 */
export async function addAlbum() {
  const nombreAlbum = await inquirer.prompt( {
    type: "input",
    name: "nombreAlbum",
    message: "Introduce el nombre del álbum: "
  });
  const nombreGrupoArtista = await inquirer.prompt({
    type: "input",
    name: "nombreGrupoArtista",
    message: "Introduce el nombre del grupo o artista: "
  });
  let nombreGrupoOArtista_: string = nombreGrupoArtista["nombreGrupoArtista"];
  let numeroGrupo_: number = -1;
  let autores_: string[]|Artistas[] = [];
  for(let i: number = 0; i < index.grupos.length; i++){
    if(index.grupos[i].getNombreGrupo() === nombreGrupoOArtista_){
      numeroGrupo_ = i;
      break;
    }
  }
  if (numeroGrupo_ === -1){
    for(let i: number = 0; i < index.artistas.length; i++){
      if(index.artistas[i].getNombreArtista() === nombreGrupoOArtista_){
        numeroGrupo_ = i;
        break;
      }
    }
    if (numeroGrupo_ === -1){
      console.clear();
      console.log(`El nombre introducido no concuerda con ningún grupo o artista existente.`);
      await addAlbum();
      return 0;
     
    }
    else {
      autores_[0] = index.artistas[numeroGrupo_];
    }
  } else {
     autores_[0] = index.grupos[numeroGrupo_].getNombreGrupo();
  }

  let genero1_: GenerosMusicales[] = [];
 await addCancionGenero(genero1_);

  const anioPublicacion = await inquirer.prompt( {
    type: "number",
    name: "anioPublicacion",
    message: "Introduce el año de publicación: "
  });
  let cancionesAlbum_: Cancion[] = [];
  await cancionesDeAlbum(cancionesAlbum_);

  let nombre_: string = nombreAlbum["nombreAlbum"];
  let yearsPublicacion_: number = anioPublicacion["anioPublicacion"];
  
  let album: Album = new Album(nombre_, autores_[0], genero1_, yearsPublicacion_, cancionesAlbum_);
  index.albumes.push(album);
    InquirerFile.db.addNuevoAlbum(album);
  console.clear();
    menuPrincipal();
}


/**
 * @function addGrupoArtista para añadir los artistas del grupo
 * @param artistas del grupo
 */
export async function addGrupoArtista(artistas: Artistas[]) {
  const artistasArray = await inquirer.prompt({
    type: "input",
    name: "artistasArray",
    message: "Introduce los artistas pertenecientes al Grupo: ",
  })
  
  let nombreArtistas: string = artistasArray["artistasArray"]; 
  let numeroArtistas: number = -1;
  for(let i: number = 0; i < index.artistas.length; i++){
    if(index.artistas[i].getNombreArtista() === nombreArtistas){
      numeroArtistas = i;
      break;
    }
  }
  if(numeroArtistas === -1){
    console.log(`No hay una artista con ese nombre`);
    await 
    addGrupoArtista(artistas);
    //InquirerFile.menuPrincipal();

  } else {
    //addGrupo(numeroArtistas); //pProblema con los argumentos
    artistas.push(index.artistas[numeroArtistas]);
    const finalArtista = await inquirer.prompt({
      type: "list",
      name: "finalArtista",
      message: "¿Desea añadir otro artista al grupo?",
      choices: Object.values(InquirerFile.CommandsSingle)
    });
    switch(finalArtista["finalArtista"]) {
      case InquirerFile.CommandsSingle.Si:
        await addGrupoArtista(artistas)
        break;
      case InquirerFile.CommandsSingle.No:
        break;
    }
  }
}

/**
 * @function modAlbum modifica alguna parte del ábum
 * @param numero 
 */
export async function modAlbum(numero: number) {
  const albumnModificar = await inquirer.prompt({
    type: 'list',
    name: `modificar`,
    message: `¿Qué quieres modificar del album?`,
    choices: Object.values(CommandsPartesAlbum)
  })

  switch(albumnModificar["modificar"]){
    case CommandsPartesAlbum.Nombre:
      const nombreAlbum = await inquirer.prompt( {
        type: "input",
        name: "nombreAlbum",
        message: "Introduce el nombre del álbum: "
      })
      let nombreAlbum_ = nombreAlbum["nombreAlbum"];
      index.albumes[numero].setNombreAlbum(nombreAlbum_);
      await modAlbum(numero);
      break;
    case CommandsPartesAlbum.Autores:
      const grupoOArtista = await inquirer.prompt( {
        type: "input",
        name: "grupoOArtista",
        message: "Nombre del grupo o del artista:"
      });
      let nombreGrupoOArtista_: string = grupoOArtista["grupoOArtista"];
  let numeroGrupo_: number = -1;
  let autores_: string[]|Artistas[] = [];
  for(let i: number = 0; i < index.grupos.length; i++){
    if(index.grupos[i].getNombreGrupo() === nombreGrupoOArtista_){
      numeroGrupo_ = i;
      break;
    }
  }
  if (numeroGrupo_ === -1){
    for(let i: number = 0; i < index.artistas.length; i++){
      if(index.artistas[i].getNombreArtista() === nombreGrupoOArtista_){
        numeroGrupo_ = i;
        break;
      }
    }
    if (numeroGrupo_ === -1){
      console.clear();
      console.log(`El nombre introducido no concuerda con ningún grupo o artista existente.`);
      await modAlbum(numero);
      return 0;
     
    }
    else {
      autores_[0] = index.artistas[numeroGrupo_];
    }
  } else {
     autores_[0] = index.grupos[numeroGrupo_].getNombreGrupo();
  }
  index.albumes[numero].setAutores(autores_[0]);
      await modAlbum(numero);
      break;

    case CommandsPartesAlbum.GeneroMusical:
      let genero_: GenerosMusicales[] = [];
      await addCancionGenero(genero_);
      index.albumes[numero].setGenero(genero_);
      await modAlbum(numero);
      break;
    case CommandsPartesAlbum.YearPublicacion:
      const yearPublicacion = await inquirer.prompt( {
        type: "input",
        name: "yearPublicacion",
        message: "Introduce el año de publicación: ",
      });
      let yearPublicacion_ = yearPublicacion["yearPublicacion"];
      index.albumes[numero].setYear(yearPublicacion_);
      await modAlbum(numero);
      break;
    case CommandsPartesAlbum.Canciones:
      let cancionesAlbum_: Cancion[] = [];
      await cancionesDeAlbum(cancionesAlbum_);
      index.albumes[numero].setCanciones(cancionesAlbum_);
      await modAlbum(numero);
      break;
      case CommandsPartesAlbum.Salir:
        console.clear();
        menuPrincipal();
      return 0;
      break;
  }
  
}

/**
 * @function menuModAlbum comprueba si el album existe
 */
export async function menuModAlbum() {
  const albumModificada = await inquirer.prompt({
    type: 'input',
    name: `modificar`,
    message: `Introduce el nombre del álbum que quieres modificar`,
  })
  let nombreAlbumModificar: string = albumModificada["modificar"];
  let numeroAlbum: number = -1;
  for(let i: number = 0; i < index.albumes.length; i++){
    if(index.albumes[i].getNombreAlbum() === nombreAlbumModificar){
      numeroAlbum = i;
      break;
    }
  }
  if(numeroAlbum === -1){
    console.log(`No existe un álbum con ese nombre`);
    menuPrincipal();
    return 0;
  } else {
    await modAlbum(numeroAlbum);
  }
}

export async function delAlbum() {
  const albumBorrada = await inquirer.prompt({
    type: 'input',
    name: `borrar`,
    message: `Introduce el nombre del álbum que quieres borrar`,
  })
  let nombreAlbumBorrar: string = albumBorrada["borrar"];
  let numeroAlbum: number = -1;
  for(let i: number = 0; i < index.albumes.length; i++){
    if(index.albumes[i].getNombreAlbum() === nombreAlbumBorrar){
      numeroAlbum = i;
      index.albumes.splice(parseInt(nombreAlbumBorrar), 1); //Dudoso
      break;
    }
  }
  if(numeroAlbum === -1){
    console.log(`No existe un álbum con ese nombre`);
    menuPrincipal();
    return 0;
  } else {
    index.albumes.splice(parseInt(nombreAlbumBorrar), 1);
  }
}