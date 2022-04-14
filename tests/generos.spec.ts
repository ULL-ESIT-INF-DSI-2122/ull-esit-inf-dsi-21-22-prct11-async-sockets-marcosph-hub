import 'mocha';
import { expect } from 'chai';
import { GenerosMusicales } from "../src/clases/generosMusicales";
import { artista1, grupo1} from "../src/index";
import { album1 } from "../src/index";
import { playlist1 } from "../src/index";
import {  cancion1, cancion2 } from "../src/index";
import { Metal, Rock, RyB, Soul, Pop} from "../src/index";

describe('Métodos de la Clase Generos Musicales',() => {
  it ('Clase Generos Operativa',() => { 
    expect(Pop instanceof GenerosMusicales).to.eql (true);
  });
  it ('Probando metodo setNombreGenero() y getNombreGenero()',() => { 
    Pop.setNombreGenero(`Trap`);
    expect(Pop.getNombreGenero()).to.eql (`Trap`);
  });
  it ('Probando metodo setGrupos() y getGrupos()',() => { 
    Pop.setGrupos([grupo1.getNombreGrupo()]);
    expect(Pop.getGrupos()).to.eql (['los 4']);
  });
  it ('Probando metodo setArtistas() y getArtistas()',() => { 
    Pop.setArtistas([artista1.getNombreArtista()]);
    expect(Pop.getArtistas()).to.eql (['Pepe Benavente']);
  });
  it ('Probando metodo setAlbumes() y getAlbumes()',() => { 
    Pop.setAlbumes([album1.getNombreAlbum()]);
    expect(Pop.getAlbumes()).to.eql (['MotoMami']);
  });
  it ('Probando metodo setCanciones() y getCanciones()',() => { 
    Pop.setCanciones([cancion1.getNombreCancion()]);
    expect(Pop.getCanciones()).to.eql (['El polvorete']);
  });
});