import inquirer from 'inquirer';
import { Cancion } from "../clases-bases/cancion";
import { GenerosMusicales } from "../clases-bases/generosMusicales";
import * as index from "../../index";
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
/**
 * Funcion menuDelCancion
 */
export async function menuDelCancion() {
  const cancionBorrado = await inquirer.prompt({
    type: 'input',
    name: `borrar`,
    message: `Introduce el nombre de la cancion que quieres borrar`,
  })
  let nombrecancionBorrar: string = cancionBorrado["borrar"];
  let numerocancion: number = -1;
    for(let i: number = 0; i < index.canciones.length; i++){
        if(index.canciones[i].getNombreCancion() === nombrecancionBorrar){
        numerocancion = i;
        break;
        }
    }
    if(numerocancion === -1){
        console.log(`No existe una cancion con ese nombre`);
        return 0;
    } 
    else {
      InquirerFile.db.delCancion(numerocancion);
    }

  console.clear();
  InquirerFile.menuPrincipal();
}