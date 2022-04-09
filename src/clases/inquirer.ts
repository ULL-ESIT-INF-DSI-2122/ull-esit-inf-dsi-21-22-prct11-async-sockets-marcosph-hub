import inquirer from 'inquirer';
import { Album } from "../clases/album";
import { Artistas } from "../clases/artistas";
import { Cancion } from "../clases/cancion";
import { GenerosMusicales } from "../clases/generosMusicales";
import { Grupos } from "../clases/grupos";
import { Playlist } from "../clases/playlist";
import * as index from "../index";

/**
 * @enum Commands con los comandos de añadir, borrar, modificar y salir
 */
enum Commands {
    Add = `Añadir`,
    Borrar = `Borrar`,
    Modificar = `Modificar`,
    Salir = `Salir`
}
  
/**
 * @enum CommandsClases con la clase que se quiere añadir, borrar o modificar
 */
enum CommandsClases {
    Cancion = `Canción`,
    GeneroMusical = `Género musical`,
    Album = `Album`,
    Artista = `Artista`,
    Grupo = `Grupo`,
}
  
/**
 * @function add encar
 */
/*
async function add(){
    console.clear();
    const respuestaadd = await inquirer.prompt({
      type: 'input',
      name: `add`,
      message: `que quieres añadir?`
    })
    if (respuestaadd['add'] !== ``) {
      console.clear();
      console.log(cancion1.getAutorCancion());
    }
    menuPrincipal();
  }*/

/**
 * @function menuAdd menu para añadir cancion, género, álbum, artista o grupo
 */
async function menuAdd(){
    const respuestaAdd = await inquirer.prompt({
      type: 'list',
      name: `command`, 
      message: `Elige que quieres añadir`,
      choices: Object.values(CommandsClases)
    })
    switch(respuestaAdd["command"]) {
      case CommandsClases.Cancion:
       console.log(`añadiendo una cancion`);
        break;
      case CommandsClases.GeneroMusical:
        console.log(`añadiendo una genero musical`);
        break;
      case CommandsClases.Album:
        console.log(`añadiendo una album`);
        break;
      case CommandsClases.Artista:
        console.log(`añadiendo una artista`);
        break;
      case CommandsClases.Grupo:
        console.log(`añadiendo una grupo`);
        break;
    }
    menuPrincipal();
}

/**
 * @function menuDel menu para borrar cancion, género, álbum, artista o grupo
 */
async function menuDel(){
    const respuestaDel = await inquirer.prompt({
      type: 'list',
      name: `command`, 
      message: `Elige que quieres eliminar`,
      choices: Object.values(CommandsClases)
    })
    switch(respuestaDel["command"]) {
      case CommandsClases.Cancion:
       console.log(`eliminndo una cancion`);
        break;
      case CommandsClases.GeneroMusical:
        console.log(`eliminndo una genero musical`);
        break;
      case CommandsClases.Album:
        console.log(`eliminndo una album`);
        break;
      case CommandsClases.Artista:
        console.log(`eliminndo una artista`);
        break;
      case CommandsClases.Grupo:
        console.log(`eliminndo una grupo`);
        break;
    }
    menuPrincipal();
}

/**
 * @function menuMod menu para modificar cancion, género, álbum, artista o grupo
 */
async function menuMod(){
    const respuestaMod = await inquirer.prompt({
      type: 'list',
      name: `command`, 
      message: `Elige que quieres modificar`,
      choices: Object.values(CommandsClases)
    })
    switch(respuestaMod["command"]) {
      case CommandsClases.Cancion:
       console.log(`modificando una cancion`);
        break;
      case CommandsClases.GeneroMusical:
        console.log(`modificando una genero musical`);
        break;
      case CommandsClases.Album:
        console.log(`modificando una album`);
        break;
      case CommandsClases.Artista:
        console.log(`modificando una artista`);
        break;
      case CommandsClases.Grupo:
        console.log(`modificando una grupo`);
        break;
    }
    menuPrincipal();
}

/**
 * @function menuPrincipal menu principal donde se manejan los submenus y los comandos
 * @returns 
 */
async function menuPrincipal(){
    //console.clear();
    //print();
    const respuesta = await inquirer.prompt({
      type: 'list',
      name: `command`, 
      message: `Elige opción`,
      choices: Object.values(Commands)
    })
    switch(respuesta["command"]) {
      case Commands.Add:
        menuAdd();
        break;
      case Commands.Borrar:
        menuDel();
        break;
      case Commands.Modificar:
        menuMod();
        break;
      case Commands.Salir:
       //process.exit();:;
        return;
    }
    //console.log(respuesta);
}
  
menuPrincipal();