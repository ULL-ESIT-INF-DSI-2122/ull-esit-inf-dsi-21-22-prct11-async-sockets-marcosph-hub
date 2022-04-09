import inquirer from 'inquirer';
import { Album } from "../clases/album";
import { Artistas } from "../clases/artistas";
import { Cancion } from "../clases/cancion";
import { GenerosMusicales } from "../clases/generosMusicales";
import { Grupos } from "../clases/grupos";
import { Playlist } from "../clases/playlist";
import * as index from "../index";
import * as InquirerFile from "./inquirer";

enum CommandsSingle {
  Si = `Si`,
  No = `No`
}

async function addGrupo() {
  const nombreGrupo = await inquirer.prompt({
    type: "input",
    name: "nombreGrupo",
    message: "Introduce el nombre del grupo: "
  })
  let artistasArray: Artistas[] = []
  await addGrupoArtista(artistasArray);
  
}

async function addGrupoArtista(artistas: Artistas[]) {
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
    console.log(`No existe una cancion con ese nombre`);
   //InquirerFile.menuPrincipal();
  } else {
    //addGrupo(numeroCancion);
    artistas.push(index.artistas[numeroArtistas]);
    let booolean: boolean = true;
    const finalArtista = await.inquirer.prompt({
      type: "list",
      name: "finalArtista",
      message: "¿Desea añadir otro artista?",
      choices: Object.values(CommandsSingle)
    })
  }
}