import inquirer from 'inquirer';
import { Album } from "../clases/album";
import { Artistas } from "../clases/artistas";
import { Cancion } from "../clases/cancion";
import { GenerosMusicales } from "../clases/generosMusicales";
import { Grupos } from "../clases/grupos";
import { Playlist } from "../clases/playlist";
import * as index from "../index";
import * as InquirerFile from "./inquirer";

export enum CommandsSingle {
  Si = `Si`,
  No = `No`
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
      switch(generoGrupo["generoGrupo"]) {
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
  const albumesGrupo:Album = await inquirer.prompt({
    type: "input",
    name: "albumesGrupo",
    message: "Introduce el nombre del álbum lanzado por el grupo"
  })
  
  albumArray.push(albumesGrupo)
  const otroalbum = await inquirer.prompt({
    type: "list",
    name: "otroalbum",
    message: "¿Han lanzado otro álbum?: ",
    choices: Object.values(InquirerFile.CommandsSingle)
  })
  switch(otroalbum["otroalbum"]) {
    case CommandsSingle.Si:
      await getAlbumesGrupo(albumArray)
      break;
    case CommandsSingle.No:
      break;
  }
  return albumArray
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
  await InquirerFile.addCancionGenero(generoGrupo)

  let albumesGrupo: Album[] = [];
  await getAlbumesGrupo(albumesGrupo)

  albumesGrupo.forEach(element => {
    console.log(element)
  });
  
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
    

  } else {
    //addGrupo(numeroCancion);
    artistas.push(index.artistas[numeroArtistas]);
    let booolean: boolean = true;
    const finalArtista = await inquirer.prompt({
      type: "list",
      name: "finalArtista",
      message: "¿Desea añadir otro artista?",
      choices: Object.values(InquirerFile.CommandsSingle)
    })
    switch(finalArtista["finalArtista"]) {
      case CommandsSingle.Si:
        await addGrupoArtista(artistas)
        break;
      case CommandsSingle.No:
        break;
    }
   
  }
}
InquirerFile.menuPrincipal
