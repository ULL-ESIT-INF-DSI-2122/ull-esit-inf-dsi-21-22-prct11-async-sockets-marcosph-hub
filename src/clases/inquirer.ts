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
    Grupo = `Grupo`
}
enum CommandsSingle {
  Si = `Si`,
  No = `No`
}
enum CommandsGenerosCanciones {
  Rock = `Rock`,
  Pop = `Pop`,
  Rap = `Rap`,
  Electronica = `Electronica`,
  Regueton = `Regueton`,
  Hip_Hop = `Hip_Hop`,
  Metal = `Metal`,
  Flamenco = `Flamenco`,
  RyB = `RyB`,
  Soul = `Soul`
}
  
/**
 * @function addcancion encar
 */

async function addCancion(){
  //console.log(`Introduce le nombre de la cancion: `);
  const nombreCancion = await inquirer.prompt( {
    type: "input",
    name: "nombreCancion",
    message: "Introduce el nombre de la cancion: "
})
const nombreAutor = await inquirer.prompt( {
    type: "input",
    name: "nombreAutor",
    message: "Introduce el nombre del autor: "
});
const duracionCancion = await inquirer.prompt( {
    type: "input",
    name: "duracionCancion",
    message: `Introduce la duracion en el formato "min:seg" : `
});
let genero_: GenerosMusicales[] = [];
const generoCancion = await inquirer.prompt( {
  type: "list",
  name: "generoCancion",
  message: "Introduce el/los generos musicales: ",
  choices: Object.values(CommandsGenerosCanciones)
});
switch(generoCancion["generoCancion"]) {
  case CommandsGenerosCanciones.Electronica:
    genero_.push(index.Electronica);
    break;
  case CommandsGenerosCanciones.Pop:
    genero_.push(index.Pop);
    break;
  case CommandsGenerosCanciones.Metal:
    genero_.push(index.Metal);
    break;
  case CommandsGenerosCanciones.Flamenco:
    genero_.push(index.Flamenco);
    break;
  case CommandsGenerosCanciones.Rap:
    genero_.push(index.Rap);
    break;
  case CommandsGenerosCanciones.Regueton:
    genero_.push(index.Regueton);
    break;
  case CommandsGenerosCanciones.Hip_Hop:
    genero_.push(index.Hip_Hop);
    break;
  case CommandsGenerosCanciones.RyB:
    genero_.push(index.RyB);
    break;
  case CommandsGenerosCanciones.Rock:
    genero_.push(index.Rock);
    break;
  case CommandsGenerosCanciones.Soul:
    genero_.push(index.Soul);
    break;
}

const singleCancion = await inquirer.prompt( {
    type: "list",
    name: "singleCancion",
    message: "¿Es un single?: ",
    choices: Object.values(CommandsSingle)
});
switch(singleCancion["singleCancion"]) {
  case CommandsSingle.Si:
    break;
  case CommandsSingle.No:
    break;
}
const numReproducciones = await inquirer.prompt( {
    type: "number",
    name: "numReproducciones",
    message: "Introduce el numero de reproducciones: "
});

let nombre_: string = nombreCancion["nombreCancion"];
let autor_: string = nombreAutor["nombreAutor"];
/*let genero_ : string = generoCancion["generoCancion"];
 if ()

);*/

    menuPrincipal();
  }

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
        addCancion();
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
        return;
    }
    //console.log(respuesta);
}

menuPrincipal();