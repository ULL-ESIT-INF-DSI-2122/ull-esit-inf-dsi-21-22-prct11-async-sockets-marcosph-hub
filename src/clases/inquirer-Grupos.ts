import inquirer from 'inquirer';
import { Album } from "../clases/album";
import { Artistas } from "../clases/artistas";
import { Cancion } from "../clases/cancion";
import { GenerosMusicales } from "../clases/generosMusicales";
import { Grupos } from "../clases/grupos";
import { Playlist } from "../clases/playlist";
import * as InquirerFile from "./inquirer";

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
}