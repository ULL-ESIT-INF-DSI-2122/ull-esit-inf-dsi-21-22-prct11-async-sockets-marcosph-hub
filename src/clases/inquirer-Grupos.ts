import inquirer from 'inquirer';
import { Album } from "../clases/album";
import { Artistas } from "../clases/artistas";
import { Cancion } from "../clases/cancion";
import { GenerosMusicales } from "../clases/generosMusicales";
import { Grupos } from "../clases/grupos";
import { Playlist } from "../clases/playlist";
import * as index from "../index";
import * as InquirerFile from "./inquirer";
import * as inCancion from "./inquirer-Cancion";

export enum CommandsSingle {
  Si = `Si`,
  No = `No`
}

export enum CommandsGrupoProperty {
  Nombre = `Nombre`,
  Artistas = `Artista`,
  AñoFormacion = `AñoFormacion`,
  Generos = `Generos`,
  Albumes = `Albumes`,
  Oyentes = `Oyentes`,
  Salir = `Salir`
}
/*
async function addGeneroEspecifico(generoArray: GenerosMusicales[], nombreGeneroEspecifico: string) {
   index.generos.forEach(element => {
     if(element.getNombreGenero() === nombreGeneroEspecifico) {
      generoArray.push(element);
      const generoGrupo = inquirer.prompt( { //await
        type: "list",
        name: "generoGrupo",
        message: "La canción tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoGrupo[""]) {
        case CommandsSingle.Si:
          addGeneroGrupo(generoArray)
          break;
        case CommandsSingle.No:
          break;
      }
    }
  });
}

export async function addGeneroGrupo(generoArray: GenerosMusicales[]) {
  const generoCancion = await inquirer.prompt( {
    type: "list",
    name: "generoCancion",
    message: "Introduce los generos musicales del Grupo: ",
    choices: Object.values(InquirerFile.CommandsGenerosCanciones)
  });
  let nombreGeneroEspecifico: string = generoCancion["generoCancion"]
  addGeneroEspecifico(generoArray,nombreGeneroEspecifico)
}*/

async function getAlbumesGrupo(albumArray: Album[]) {
  const albumesGrupo = await inquirer.prompt({
    type: "input",
    name: "albumesGrupo",
    message: "Introduce el nombre del álbum lanzado por el grupo"
  })
  let albumEspecifico: string = albumesGrupo["albumesGrupo"];
  //let albumEspecifico: string = albumesGrupo["autores"];

  let albumIndex: number = -1;
  for (let iterator: number = 0; iterator < index.albumes.length; iterator++) {
    if(index.albumes[iterator].getNombreAlbum() === albumEspecifico) {
      albumIndex = iterator;
      break;

    }
  }
  if ( albumIndex === -1) {
    console.log("Este álbum no se encuentra en la base de datos");
    await getAlbumesGrupo(albumArray);
    return 0;
    
  } else {
    //var aux: Album = new Album();
    //aux.setNombreAlbum()
    console.log("Insertando album");
    albumArray.push(index.albumes[albumIndex]);
    const otroalbum = await inquirer.prompt({
      type: "list",
      name: "otroalbum",
      message: "¿Han lanzado otro álbum?: ",
      choices: Object.values(InquirerFile.CommandsSingle)
    })
    switch(otroalbum["otroalbum"]) {
      case CommandsSingle.Si:
        await getAlbumesGrupo(albumArray);
        break;
      case CommandsSingle.No:
        break;
    }
    //return albumArray;
  }
}

export async function addGrupo() {
  const nombreGrupo = await inquirer.prompt({
    type: "input",
    name: "nombreGrupo",
    message: "Introduce el nombre del grupo: "
  })
  let artistasArray: Artistas[] = []
  await addGrupoArtista(artistasArray);
  
  const añoGrupo = await inquirer.prompt({
    type: "input",
    name: "añoGrupo",
    message: "Año de la formación del grupo: "
  })

  let generoGrupo: GenerosMusicales[] = [];
  await inCancion.addCancionGenero(generoGrupo);

  let albumesGrupo: Album[] = [];
  await getAlbumesGrupo(albumesGrupo);

  const oyentes = await inquirer.prompt({
    type: "input",
    name: "oyentes",
    message: "Número de oyentes del grupo: "
  })

  let NombreGrupo: string = nombreGrupo["nombreGrupo"];
  let AñoFormacionGrupo: number = añoGrupo["añoGrupo"];
  let OyentesGrupo: number = oyentes["oyentes"];

  let Grupo: Grupos = new Grupos(NombreGrupo);
  Grupo.construirGrupo(artistasArray, AñoFormacionGrupo, generoGrupo, albumesGrupo,OyentesGrupo);
//PONER DB AQUI
  //console.table(Grupo)
  //console.clear()
  //InquirerFile.menuPrincipal();
  console.clear();
    InquirerFile.menuPrincipal();
}

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
    console.log(`No existe un Artista con ese nombre`);
    await addGrupo();
    return 0;
    
  } else {
    //addGrupo(numeroCancion);
    artistas.push(index.artistas[numeroArtistas]);
    //let booolean: boolean = true;
    const finalArtista = await inquirer.prompt({
      type: "list",
      name: "finalArtista",
      message: "¿Desea añadir otro artista?",
      choices: Object.values(InquirerFile.CommandsSingle)
    })
    switch(finalArtista["finalArtista"]) {
      case CommandsSingle.Si:
        await addGrupoArtista(artistas);
        return 0;
        break;
      case CommandsSingle.No:
        break;
    }
  }
}

async function modificarGrupo(SpecificGrupoIndex:number) {
  const GrupoModificar = await inquirer.prompt ({
    type: "list",
    name: "GrupoModificar",
    message: "¿Qué dato del Grupo quiere modificar?",
    choices: Object.values(CommandsGrupoProperty)
  })
  
  switch(GrupoModificar["GrupoModificar"]) {

    case CommandsGrupoProperty.Nombre: {
      const nombreGrupoModificado = await inquirer.prompt ({
        type: "input",
        name: "nombreGrupoModificado",
        message: "Introduce el nuevo nombre del grupo: "
      })
      let nombreModificado: string = nombreGrupoModificado["nombreGrupoModificado"];
      index.grupos[SpecificGrupoIndex].setNombreGrupo(nombreModificado);
      await modificarGrupo(SpecificGrupoIndex);
      break;
    }

    case CommandsGrupoProperty.Artistas: {
      let ArtistaModificado: Artistas[] = [];
      await addGrupoArtista(ArtistaModificado);
      index.grupos[SpecificGrupoIndex].setArtistas(ArtistaModificado);
      await modificarGrupo(SpecificGrupoIndex);
      break;
    }

    case CommandsGrupoProperty.AñoFormacion: {
      const añoFormacionModificado = await inquirer.prompt ({
        type: "input",
        name: "añoFormacionModificado",
        message: "Introduce el nuevo año de formación del grupo: "
      })
      let añoModificado: number = añoFormacionModificado["añoFormacionModificado"]
      index.grupos[SpecificGrupoIndex].setYearGrupo(añoModificado);
      await modificarGrupo(SpecificGrupoIndex);
      break;
    }

    case CommandsGrupoProperty.Generos: {
      let GenerosModificado: GenerosMusicales[] = [];
      await inCancion.addCancionGenero(GenerosModificado);
      index.grupos[SpecificGrupoIndex].setGenero(GenerosModificado);
      await modificarGrupo(SpecificGrupoIndex);
      break;
    }

    case CommandsGrupoProperty.Albumes: {
      let albumModificado: Album[] = [];
      await getAlbumesGrupo(albumModificado);
      index.grupos[SpecificGrupoIndex].setAlbumes(albumModificado);
      await modificarGrupo(SpecificGrupoIndex);
      break;
    }

    case CommandsGrupoProperty.Oyentes: {
      const numOyentesModificado = await inquirer.prompt ({
        type: "input",
        name: "numOyentesModificado",
        message: "Introduce el nuevo número de oyentes del grupo: "
      })
      let numOyentes: number = numOyentesModificado["numOyentesModificado"]
      index.grupos[SpecificGrupoIndex].setOyentes(numOyentes);
      await modificarGrupo(SpecificGrupoIndex);
      break;
    }
    case CommandsGrupoProperty.Salir:
        console.clear();
        InquirerFile.menuPrincipal();
      break;
  }
  /*console.log("Los datos se han actualizado con Éxito")
  console.table(index.grupos[SpecificGrupoIndex])*/
}

export async function menuModificarGrupo() {
  const modificacionGrupo = await inquirer.prompt({
    type: "input",
    name: "modificacionGrupo",
    message: "Introduzca el nombre del Grupo que quiere modificar"
  })
  let grupoEspecifico: string = modificacionGrupo["modificacionGrupo"];
  let GrupoIndex = -1;

  for (let iterator = 0; iterator < index.grupos.length; iterator++) {
    if (index.grupos[iterator].getNombreGrupo() === grupoEspecifico) {
      GrupoIndex = iterator;
      break;
    }
  }

  if (GrupoIndex === -1) {
    console.log("El Grupo introducido no existe en la Base de Datos");
    InquirerFile.menuPrincipal();
  } else {
    modificarGrupo(GrupoIndex);
  }
}

//InquirerFile.menuPrincipal


