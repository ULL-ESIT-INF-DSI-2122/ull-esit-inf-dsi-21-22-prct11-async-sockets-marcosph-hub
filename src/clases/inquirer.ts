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


/**
 * @enum Commands con los comandos de añadir, borrar, modificar y salir
 */
export enum Commands {
    Add = `Añadir`,
    Borrar = `Borrar`,
    Modificar = `Modificar`,
    OpcionesAvanzadas = `Opciones Avanzadas`,
    Salir = `Salir`
}
  
/**
 * @enum CommandsClases con la clase que se quiere añadir, borrar o modificar
 */
export enum CommandsClases {
    Cancion = `Canción`,
    GeneroMusical = `Género musical`,
    Album = `Album`,
    Artista = `Artista`,
    Grupo = `Grupo`
}
export enum CommandsSingle {
  Si = `Si`,
  No = `No`
}
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
export enum CommandsPartesCancion {
  Nombre = `Nombre`,
  Autor = `Autor`,
  GeneroMusical = `Género musical`,
  Duracion = `Duracion`,
  Single = `Single`,
  Reproducciones = `Número de reproducciones`,
  Salir = `Salir al menú principal`
}

export enum CommandsGrupoArtista {
  Grupo = `Grupo`,
  Artista = `Artista`
}
export enum CommandsGestionAvanzada {
  AlfTitCancionAsc = `Alfabeticamente título Canción (Ascendente)`,
  AlfTitCancionDesc = `Alfabeticamente título Canción (Descendente)`,
  AlfNombAlbumAsc = `Alfabeticamente nombre Álbum (Ascendente)`,
  AlfNombAlbumDesc = `Alfabeticamente nombre Álbum (Descendente)`,
  AlfNombPlaylistAsc = `Alfabeticamente nombre Playlist (Ascendente)`,
  AlfNombPlaylistDesc = `Alfabeticamente nombre Playlist (Descendente)`,
  AnioLanzAlbumAsc = `Año de Lanzamiento de Álbum (Ascendente)`,
  AnioLanzAlbumDesc = `Año de Lanzamiento de Álbum (Descendente)`,
  NumRepTotalAsc = `Número de reproducciones totales (Ascendente)`,
  NumRepTotalDesc = `Número de reproducciones totales (Descendente)`,
  MostrarSingles = `Filtrar para mostrar únicamente los singles lanzados`,
}

export async function addCancionGenero(genero: GenerosMusicales[])  {
  //let genero: GenerosMusicales[] = [];
  const generoCancion = await inquirer.prompt( {
    type: "list",
    name: "generoCancion",
    message: "Introduce el/los generos musicales: ",
    choices: Object.values(CommandsGenerosCanciones)
  });
  switch(generoCancion["generoCancion"]) {
    case CommandsGenerosCanciones.Electronica:
      genero.push(index.Electronica);
      const generoCancion1 = await inquirer.prompt( {
        type: "list",
        name: "generoCanciones",
        message: "La canción tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoCancion1["generoCanciones"]) {
        case CommandsSingle.Si:
          await addCancionGenero(genero)
          break;
        case CommandsSingle.No:
          break;
      }
      break;
    case CommandsGenerosCanciones.Pop:
      genero.push(index.Pop);
      const generoCancion2 = await inquirer.prompt( {
        type: "list",
        name: "generoCanciones",
        message: "La canción tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoCancion2["generoCanciones"]) {
        case CommandsSingle.Si:
          await addCancionGenero(genero)
          break;
        case CommandsSingle.No:
          break;
      }
      break;
    case CommandsGenerosCanciones.Metal:
      genero.push(index.Metal);
      const generoCancion3 = await inquirer.prompt( {
        type: "list",
        name: "generoCanciones",
        message: "La canción tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoCancion3["generoCanciones"]) {
        case CommandsSingle.Si:
          await addCancionGenero(genero)
          break;
        case CommandsSingle.No:
          break;
      }
      break;
    case CommandsGenerosCanciones.Flamenco:
      genero.push(index.Flamenco);
      const generoCancion4 = await inquirer.prompt( {
        type: "list",
        name: "generoCanciones",
        message: "La canción tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoCancion4["generoCanciones"]) {
        case CommandsSingle.Si:
          await addCancionGenero(genero)
          break;
        case CommandsSingle.No:
          break;
      }
      break;
    case CommandsGenerosCanciones.Rap:
      genero.push(index.Rap);
      const generoCancion5 = await inquirer.prompt( {
        type: "list",
        name: "generoCanciones",
        message: "La canción tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoCancion5["generoCanciones"]) {
        case CommandsSingle.Si:
          await addCancionGenero(genero)
          break;
        case CommandsSingle.No:
          break;
      }
      break;
    case CommandsGenerosCanciones.Regueton:
      genero.push(index.Regueton);
      const generoCancion6 = await inquirer.prompt( {
        type: "list",
        name: "generoCanciones",
        message: "La canción tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoCancion6["generoCanciones"]) {
        case CommandsSingle.Si:
          await addCancionGenero(genero)
          break;
        case CommandsSingle.No:
          break;
      }
      break;
    case CommandsGenerosCanciones.Hip_Hop:
      genero.push(index.Hip_Hop);
      const generoCancion7 = await inquirer.prompt( {
        type: "list",
        name: "generoCanciones",
        message: "La canción tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoCancion7["generoCanciones"]) {
        case CommandsSingle.Si:
          await addCancionGenero(genero)
          break;
        case CommandsSingle.No:
          break;
      }
      break;
    case CommandsGenerosCanciones.RyB:
      genero.push(index.RyB);
      const generoCancion8 = await inquirer.prompt( {
        type: "list",
        name: "generoCanciones",
        message: "La canción tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoCancion8["generoCanciones"]) {
        case CommandsSingle.Si:
          await addCancionGenero(genero)
          break;
        case CommandsSingle.No:
          break;
      }
      break;
    case CommandsGenerosCanciones.Rock:
      genero.push(index.Rock);
      const generoCancion9 = await inquirer.prompt( {
        type: "list",
        name: "generoCanciones",
        message: "La canción tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoCancion9["generoCanciones"]) {
        case CommandsSingle.Si:
          await addCancionGenero(genero)
          break;
        case CommandsSingle.No:
          break;
      }
      break;
    case CommandsGenerosCanciones.Soul:
      genero.push(index.Soul);
      const generoCancion10 = await inquirer.prompt( {
        type: "list",
        name: "generoCanciones",
        message: "La canción tiene más generos?: ",
        choices: Object.values(CommandsSingle)
      });
      switch(generoCancion10["generoCanciones"]) {
        case CommandsSingle.Si:
          await addCancionGenero(genero)
          break;
        case CommandsSingle.No:
          break;
      }
      break;
  }
    //console.log(`dentro`, genero);
    return genero;
  }
/**
 * @function addcancion encar
 */

 export async function addCancion(){
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
//genero_= await addCancionGenero();
await addCancionGenero(genero_);


//console.log(`fuera`, genero_);
/*const generoCancion = await inquirer.prompt( {
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
}*/

let single_: boolean = false;
const singleCancion = await inquirer.prompt( {
    type: "list",
    name: "singleCancion",
    message: "¿Es un single?: ",
    choices: Object.values(CommandsSingle)
});
switch(singleCancion["singleCancion"]) {
  case CommandsSingle.Si:
    single_ = true;
    break;
  case CommandsSingle.No:
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
 
console.clear();
menuPrincipal();
//let generoMusical
/*let genero_ : string = generoCancion["generoCancion"];
 if ()

);*/

   // menuPrincipal();
  }

/**
 * @function menuAdd menu para añadir cancion, género, álbum, artista o grupo
 */
 export async function menuAdd(){
    const respuestaAdd = await inquirer.prompt({
      type: 'list',
      name: `command`, 
      message: `Elige que quieres añadir`,
      choices: Object.values(CommandsClases)
    })
    switch(respuestaAdd["command"]) {
      case CommandsClases.Cancion:
        addCancion();
        break;
      case CommandsClases.GeneroMusical:
        
        //7addGeneroMusical();
       // console.log(`añadiendo una genero musical`);
        break;
      case CommandsClases.Album:
        addAlbum();
        console.log(`añadiendo una album`);
        break;
      case CommandsClases.Artista:
        inArtista.addArtista();
        break;
      case CommandsClases.Grupo:
        //addGrupo();
        inGrupos.addGrupo();
        //console.log(`añadiendo una grupo`);
        break;
    }

}

/**
 * @function menuDel menu para borrar cancion, género, álbum, artista o grupo
 */
 export async function menuDel(){
    const respuestaDel = await inquirer.prompt({
      type: 'list',
      name: `command`, 
      message: `Elige que quieres eliminar`,
      choices: Object.values(CommandsClases)
    })
    switch(respuestaDel["command"]) {
      case CommandsClases.Cancion:
        //delCancion();
       console.log(`eliminndo una cancion`);
        break;
      case CommandsClases.GeneroMusical:
        //delGeneroMusical();
        console.log(`eliminndo una genero musical`);
        break;
      case CommandsClases.Album:
        //delAlbum();
        console.log(`eliminndo una album`);
        break;
      case CommandsClases.Artista:
        //delArtista();
        console.log(`eliminndo una artista`);
        break;
      case CommandsClases.Grupo:
        //delGrupo();
        console.log(`eliminndo una grupo`);
        break;
    }
    
}
export async function modCancion(numero: number){
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
        choices: Object.values(CommandsSingle)
      });
      switch(singleCancion["singleCancion"]) {
        case CommandsSingle.Si:
          single_ = true;
         
        break;
        case CommandsSingle.No:
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
  }
  console.clear();
   menuPrincipal();

}
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
  } else {
    modCancion(numeroCancion);
  }
 
  //console.log(`nombre de la cancion numero ${numeroCancion + 1}`);
}
/**
 * @function menuMod menu para modificar cancion, género, álbum, artista o grupo
 */
 export async function menuMod(){
    const respuestaMod = await inquirer.prompt({
      type: 'list',
      name: `command`, 
      message: `Elige que quieres modificar`,
      choices: Object.values(CommandsClases)
    })
    switch(respuestaMod["command"]) {
      case CommandsClases.Cancion:
        menuModCancion();
      
        break;
      case CommandsClases.GeneroMusical:
        //modGeneroMusical();
        console.log(`modificando una genero musical`);
        break;
      case CommandsClases.Album:
        //modAlbum();
        console.log(`modificando una album`);
        break;
      case CommandsClases.Artista:
        inArtista.menumodArtista();
        break;
      case CommandsClases.Grupo:
        console.log(`modificando una grupo`);
        //modGrupo();
        break;
    }
    
}

/**
 * @function menuOpAvGrupo comprobar que el grupo existe
 */
export async function menuOpAvGrupo() {
  const grupocomprobar = await inquirer.prompt({
    type: 'input',
    name: `comprobar`,
    message: `Introduce el nombre del grupo que ver la información`,
  })
  let nombreGrupoComprobar: string = grupocomprobar["comprobar"];
  let numeroGrupo: number = -1;
  for(let i: number = 0; i < index.grupos.length; i++){
    if(index.grupos[i].getNombreGrupo() === nombreGrupoComprobar){
      numeroGrupo = i;
      break;
    }
  }
  if(numeroGrupo === -1){
    console.log(`No existe un grupo con ese nombre`);
    menuPrincipal();
  } else {
    menuOpcionesAvanzadas2()
  }
  
}

/**
 * @function menuOpAvArtista comprobar si el artista existe
 */
export async function menuOpAvArtista() {
  const artistacomprobar = await inquirer.prompt({
    type: 'input',
    name: `comprobar`,
    message: `Introduce el nombre del artista que ver la información`,
  })
  let nombreArtistaComprobar: string = artistacomprobar["comprobar"];
  let numeroArtista: number = -1;
  for(let i: number = 0; i < index.artistas.length; i++){
    if(index.artistas[i].getNombreArtista() === nombreArtistaComprobar){
      numeroArtista = i;
      break;
    }
  }
  if(numeroArtista === -1){
    console.log(`No existe un artista con ese nombre`);
    menuPrincipal();
  } else {
    menuOpcionesAvanzadas2()
  }
}

/**
 * @function menuOpcionesAvanzadas2 menu para visualizar de los grupos y artistas de distintas maneras 
 * (alfabeticamente por titulo de canción, años de lanzamiento, número de reproducciones, etc)
 */
export async function menuOpcionesAvanzadas2() {
  const respuestaOpAvanzadas = await inquirer.prompt({
    type: 'list',
    name: `command`, 
    message: `Elige cómo visualizar la información del grupo`,
    choices: Object.values(CommandsGestionAvanzada)
  })
  switch(respuestaOpAvanzadas["command"]) {
    case CommandsGestionAvanzada.AlfTitCancionAsc:
      AlfTitCancionAsc();
      break;
    case CommandsGestionAvanzada.AlfTitCancionDesc:
      AlfTitCancionDesc();
      break;
    case CommandsGestionAvanzada.AlfNombAlbumAsc:
      AlfNombAlbumAsc();
      break;
    case CommandsGestionAvanzada.AlfNombAlbumDesc:
      AlfNombAlbumDesc();
      break;
    case CommandsGestionAvanzada.AlfNombPlaylistAsc:
      AlfNombPlaylistAsc();
      break;
    case CommandsGestionAvanzada.AlfNombPlaylistDesc:
      AlfNombPlaylistDesc();
      break;
    case CommandsGestionAvanzada.AnioLanzAlbumAsc:
      AnioLanzAlbumAsc();
      break;
    case CommandsGestionAvanzada.AnioLanzAlbumDesc:
      AnioLanzAlbumDesc();
      break;
    case CommandsGestionAvanzada.NumRepTotalAsc:
      NumRepTotalAsc();
      break;
    case CommandsGestionAvanzada.NumRepTotalDesc:
      NumRepTotalDesc();
      break;
    case CommandsGestionAvanzada.MostrarSingles:
      MostrarSingles();
      break;
  }
}


/**
 * @function menuOpcionesAvanzadas menu para visualizar de los grupos y artistas de distintas maneras
 */
 export async function menuOpcionesAvanzadas(){
  const respuestaOpAvanzadas = await inquirer.prompt({
    type: 'list',
    name: `command`, 
    message: `Elige si quieres visualizar la información de grupos y artistas`,
    choices: Object.values(CommandsGrupoArtista)
  })
  switch(respuestaOpAvanzadas["command"]) {
    case CommandsGrupoArtista.Grupo:
      menuOpAvGrupo();
      break;
    case CommandsGrupoArtista.Artista:
      menuOpAvArtista();
      break;
  }
}


/**
 * @function menuPrincipal menu principal donde se manejan los submenus y los comandos
 * @returns 
 */
 export async function menuPrincipal(){
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
      case Commands.OpcionesAvanzadas:
        menuOpcionesAvanzadas();
        break;
      case Commands.Salir:
        return;
    }
    //console.log(respuesta);
}

menuPrincipal();


// Crear base de datos
let db = new BaseDatos(index.generos, index.canciones, index.albumes, index.artistas, index.grupos);