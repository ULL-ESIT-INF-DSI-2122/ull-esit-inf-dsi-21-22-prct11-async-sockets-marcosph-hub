import 'mocha';
import { expect } from 'chai';
import { Album } from '../src/clases/clases-bases/album'
import { artista1, grupo1} from "../src/index";
import { album1 } from "../src/index";
import { playlist1 } from "../src/index";
import {  cancion1, cancion2 } from "../src/index";
import { Metal, Rock, RyB, Soul, Pop} from "../src/index";

describe('Métodos de la Clase Album',() => {
  it ('Clase Album Operativa',() => { 
    expect(album1 instanceof Album).to.eql (true);
  });
  it ('Probando metodo setNombreAlbum() y getNombreAlbum()',() => { 
    album1.setNombreAlbum(`MotoMami`);
    expect(album1.getNombreAlbum()).to.eql (`MotoMami`);
  });
  it ('Probando metodo setAutores() y getAutores()',() => { 
    album1.setAutores(grupo1.getNombreGrupo());
   expect(album1.getAutores()).to.eql (`los 4`);
   album1.setAutores(artista1);
   expect(album1.getAutores()).to.eql ('Pepe Benavente');
  });
  it ('Probando metodo setGenero() y getGenero()',() => { 
    album1.setGenero([Pop, Metal]);
   expect(album1.getGenero()).to.eql ([`Pop`, `Metal`]);
  });
  it ('Probando metodo setYear() y getYear()',() => { 
    album1.setYear(2020);
   expect(album1.getYear()).to.eql (2020);
  });
  it ('Probando metodo setCanciones() y getCanciones()',() => { 
    album1.setCanciones([cancion1,cancion2]);
    expect(album1.getCanciones()).to.eql ([cancion1,cancion2]); 
  });
});