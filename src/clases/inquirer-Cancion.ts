import inquirer from 'inquirer';
import { Album } from "../clases/album";
import { Artistas } from "../clases/artistas";
import { Cancion } from "../clases/cancion";
import { GenerosMusicales } from "../clases/generosMusicales";
import { Grupos } from "../clases/grupos";
import { Playlist } from "../clases/playlist";
import * as index from "../index";
import * as inGrupos from "../clases/inquirer-Grupos";
import * as inArtista from "../clases/inquirer_artista";
import { addAlbum } from '../clases/inquirer-Album';
import { BaseDatos } from './basedatos';
import { menuPrincipal } from './inquirer';
import * as InquirerFile from "./inquirer";



/**
 * @enum CommandsGenerosCnciones con los géneros de las canciones
 */
export enum CommandsGenerosCanciones {
    Rock = `Rock`,
    Pop = `Pop`,
    Rap = `Rap`,
    Electronica = `Electronica`,
    Regueton = `Regueton`,
    Hip_Hop = `Hip_Hop`,
    Metal = `Metal`,
    Flamenco = `Flamenco`,
    RyB = `RyB`,
    Soul = `Soul`,
    Salir = `Salir`
}

/**
 * @enum CommandsPartesCancion partes de la clase Canción
 */
export enum CommandsPartesCancion {
    Nombre = `Nombre`,
    Autor = `Autor`,
    GeneroMusical = `Género musical`,
    Duracion = `Duracion`,
    Single = `Single`,
    Reproducciones = `Número de reproducciones`,
    Salir = `Salir al menú principal`
}

/**
 * @function addCancionGenero añadir los géneros de una canción
 * @param genero para añadir
 * @returns la cancion con sus géneros
 */
export async function addCancionGenero(genero: GenerosMusicales[])  {
    const generoCancion = await inquirer.prompt( {
      type: "input",
      name: "generoCancion",
      message: "Introduce el/los generos musicales: "
    });
    let nombreGenero: string = generoCancion["generoCancion"]; 
  let numeroGenero: number = -1;
  for(let i: number = 0; i < index.generos.length; i++){
    if(index.generos[i].getNombreGenero() === nombreGenero){
      numeroGenero = i;
      break;
    }
  }
  if(numeroGenero === -1){
    console.log(`No hay un género con ese nombre`);
    await addCancionGenero(genero);
    //InquirerFile.menuPrincipal();

  } else {
    genero.push(index.generos[numeroGenero]);
    const finalGenero = await inquirer.prompt({
      type: "list",
      name: "finalGenero",
      message: "¿Desea añadir otro genero?",
      choices: Object.values(InquirerFile.CommandsSingle)
    });
    switch(finalGenero["finalGenero"]) {
      case InquirerFile.CommandsSingle.Si:
        await addCancionGenero(genero);
        break;
      case InquirerFile.CommandsSingle.No:
        break;
    }
  }
    /*switch(generoCancion["generoCancion"]) {
      case CommandsGenerosCanciones.Electronica:
        genero.push(index.Electronica);
        const generoCancion1 = await inquirer.prompt( {
          type: "list",
          name: "generoCanciones",
          message: "Tiene más generos?: ",
          choices: Object.values(InquirerFile.CommandsSingle)
        });
        switch(generoCancion1["generoCanciones"]) {
          case InquirerFile.CommandsSingle.Si:
            await addCancionGenero(genero)
            break;
          case InquirerFile.CommandsSingle.No:
            break;
        }
        break;
      case CommandsGenerosCanciones.Pop:
        genero.push(index.Pop);
        const generoCancion2 = await inquirer.prompt( {
          type: "list",
          name: "generoCanciones",
          message: "Tiene más generos?: ",
          choices: Object.values(InquirerFile.CommandsSingle)
        });
        switch(generoCancion2["generoCanciones"]) {
          case InquirerFile.CommandsSingle.Si:
            await addCancionGenero(genero)
            break;
          case InquirerFile.CommandsSingle.No:
            break;
        }
        break;
      case CommandsGenerosCanciones.Metal:
        genero.push(index.Metal);
        const generoCancion3 = await inquirer.prompt( {
          type: "list",
          name: "generoCanciones",
          message: "Tiene más generos?: ",
          choices: Object.values(InquirerFile.CommandsSingle)
        });
        switch(generoCancion3["generoCanciones"]) {
          case InquirerFile.CommandsSingle.Si:
            await addCancionGenero(genero)
            break;
          case InquirerFile.CommandsSingle.No:
            break;
        }
        break;
      case CommandsGenerosCanciones.Flamenco:
        genero.push(index.Flamenco);
        const generoCancion4 = await inquirer.prompt( {
          type: "list",
          name: "generoCanciones",
          message: "Tiene más generos?: ",
          choices: Object.values(InquirerFile.CommandsSingle)
        });
        switch(generoCancion4["generoCanciones"]) {
          case InquirerFile.CommandsSingle.Si:
            await addCancionGenero(genero)
            break;
          case InquirerFile.CommandsSingle.No:
            break;
        }
        break;
      case CommandsGenerosCanciones.Rap:
        genero.push(index.Rap);
        const generoCancion5 = await inquirer.prompt( {
          type: "list",
          name: "generoCanciones",
          message: "Tiene más generos?: ",
          choices: Object.values(InquirerFile.CommandsSingle)
        });
        switch(generoCancion5["generoCanciones"]) {
          case InquirerFile.CommandsSingle.Si:
            await addCancionGenero(genero)
            break;
          case InquirerFile.CommandsSingle.No:
            break;
        }
        break;
      case CommandsGenerosCanciones.Regueton:
        genero.push(index.Regueton);
        const generoCancion6 = await inquirer.prompt( {
          type: "list",
          name: "generoCanciones",
          message: "Tiene más generos?: ",
          choices: Object.values(InquirerFile.CommandsSingle)
        });
        switch(generoCancion6["generoCanciones"]) {
          case InquirerFile.CommandsSingle.Si:
            await addCancionGenero(genero)
            break;
          case InquirerFile.CommandsSingle.No:
            break;
        }
        break;
      case CommandsGenerosCanciones.Hip_Hop:
        genero.push(index.Hip_Hop);
        const generoCancion7 = await inquirer.prompt( {
          type: "list",
          name: "generoCanciones",
          message: "Tiene más generos?: ",
          choices: Object.values(InquirerFile.CommandsSingle)
        });
        switch(generoCancion7["generoCanciones"]) {
          case InquirerFile.CommandsSingle.Si:
            await addCancionGenero(genero)
            break;
          case InquirerFile.CommandsSingle.No:
            break;
        }
        break;
      case CommandsGenerosCanciones.RyB:
        genero.push(index.RyB);
        const generoCancion8 = await inquirer.prompt( {
          type: "list",
          name: "generoCanciones",
          message: "Tiene más generos?: ",
          choices: Object.values(InquirerFile.CommandsSingle)
        });
        switch(generoCancion8["generoCanciones"]) {
          case InquirerFile.CommandsSingle.Si:
            await addCancionGenero(genero)
            break;
          case InquirerFile.CommandsSingle.No:
            break;
        }
        break;
      case CommandsGenerosCanciones.Rock:
        genero.push(index.Rock);
        const generoCancion9 = await inquirer.prompt( {
          type: "list",
          name: "generoCanciones",
          message: "Tiene más generos?: ",
          choices: Object.values(InquirerFile.CommandsSingle)
        });
        switch(generoCancion9["generoCanciones"]) {
          case InquirerFile.CommandsSingle.Si:
            await addCancionGenero(genero)
            break;
          case InquirerFile.CommandsSingle.No:
            break;
        }
        break;
      case CommandsGenerosCanciones.Soul:
        genero.push(index.Soul);
        const generoCancion10 = await inquirer.prompt( {
          type: "list",
          name: "generoCanciones",
          message: "Tiene más generos?: ",
          choices: Object.values(InquirerFile.CommandsSingle)
        });
        switch(generoCancion10["generoCanciones"]) {
          case InquirerFile.CommandsSingle.Si:
            await addCancionGenero(genero)
            break;
          case InquirerFile.CommandsSingle.No:
            break;
        }
        break;
    }*/
      //console.log(`dentro`, genero);
      return genero;
  }
  
/**
 * @function addcancion añade la cancion correspondiente
 */
export async function addCancion(){
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
    await addCancionGenero(genero_);
  
    let single_: boolean = false;
    const singleCancion = await inquirer.prompt( {
        type: "list",
        name: "singleCancion",
        message: "¿Es un single?: ",
        choices: Object.values(InquirerFile.CommandsSingle)
    });
    switch(singleCancion["singleCancion"]) {
      case InquirerFile.CommandsSingle.Si:
        single_ = true;
        break;
      case InquirerFile.CommandsSingle.No:
        single_ = false;
        break;
    }
    const numReproducciones = await inquirer.prompt( {
        type: "number",
        name: "numReproducciones",
        message: "Introduce el numero de reproducciones: "
    });
  
    let nombre_: string = nombreCancion["nombreCancion"];
    let autor_: string = nombreAutor["nombreAutor"];
    let duracion_: string = duracionCancion["duracionCancion"];
    let reprod_: number = numReproducciones["numReproducciones"];
    let cancion: Cancion = new Cancion(nombre_,autor_, duracion_, genero_, single_, reprod_);

    index.canciones.push(cancion);
    InquirerFile.db.addNuevaCancion(cancion);
    console.clear();
    menuPrincipal();
}

/**
 * @function modCancion modifica alguna parte de la canción
 * @param numero 
 */
export async function modCancion(numero: number){
  console.clear();
    const cancionModificar = await inquirer.prompt({
      type: 'list',
      name: `modificar`,
      message: `¿Qué quieres modificar de la cancion?`,
      choices: Object.values(CommandsPartesCancion)
    })
  
    switch(cancionModificar["modificar"]){
      case CommandsPartesCancion.Nombre:
        const nombreCancion = await inquirer.prompt( {
          type: "input",
          name: "nombreCancion",
          message: "Introduce el nombre de la cancion: "
        })
        let nombreCancion_ = nombreCancion["nombreCancion"];
        index.canciones[numero].setNombreCancion(nombreCancion_);
         await modCancion(numero);
        break;
      case CommandsPartesCancion.Autor:
        const nombreAutor = await inquirer.prompt( {
          type: "input",
          name: "nombreAutor",
          message: "Introduce el nombre del autor: "
        });
        let nombreAutor_ = nombreAutor["nombreAutor"];
        index.canciones[numero].setAutorCancion(nombreAutor_);
         await modCancion(numero);
        break;
      case CommandsPartesCancion.Duracion:
        const duracionCancion = await inquirer.prompt( {
          type: "input",
          name: "duracionCancion",
          message: `Introduce la duracion en el formato "min:seg" : `
        });
        let duracion_ = duracionCancion["duracionCancion"];
        index.canciones[numero].setDuracionCancion(duracion_);
        await modCancion(numero);
        break;
      case CommandsPartesCancion.GeneroMusical:
        let genero_: GenerosMusicales[] = [];
        await addCancionGenero(genero_);
        index.canciones[numero].setGeneroMusical(genero_);
        await modCancion(numero);
        break;
      case CommandsPartesCancion.Single:
        let single_: boolean = false;
        const singleCancion = await inquirer.prompt( {
          type: "list",
          name: "singleCancion",
          message: "¿Es un single?: ",
          choices: Object.values(InquirerFile.CommandsSingle)
        });
        switch(singleCancion["singleCancion"]) {
          case InquirerFile.CommandsSingle.Si:
            single_ = true;
           
          break;
          case InquirerFile.CommandsSingle.No:
            single_ = false;
           
           break;
          }
        index.canciones[numero].setSingle(single_);
        await modCancion(numero);
        break;
      case CommandsPartesCancion.Reproducciones:
        const numReproducciones = await inquirer.prompt( {
          type: "number",
          name: "numReproducciones",
          message: "Introduce el numero de reproducciones: "
        });
        let reprod_: number = numReproducciones["numReproducciones"];
        index.canciones[numero].setNumReproducciones(reprod_);
        await modCancion(numero);
        break;
        case CommandsPartesCancion.Salir:
          InquirerFile.db.guardarBaseDatos();
          console.clear();
          menuPrincipal();
          return 0;
    }
}

/**
 * @function menuModCancion comprueba si la canción existe
 */
export async function menuModCancion(){
    const cancionModificada = await inquirer.prompt({
      type: 'input',
      name: `modificar`,
      message: `Introduce el nombre de la canción que quieres modificar`,
    })
    let nombreCancionModificar: string = cancionModificada["modificar"];
    let numeroCancion: number = -1;
    for(let i: number = 0; i < index.canciones.length; i++){
      if(index.canciones[i].getNombreCancion() === nombreCancionModificar){
        numeroCancion = i;
        break;
      }
    }
    if(numeroCancion === -1){
      console.log(`No existe una cancion con ese nombre`);
       menuPrincipal();
      return 0;
    } else {
       modCancion(numeroCancion);
    }
}