import 'mocha';
import { expect } from 'chai';
import { Artistas } from "../src/clases/artistas";
import { artista1, grupo1} from "../src/index";
import { album1 } from "../src/index";
import { playlist1 } from "../src/index";
import {  cancion1, cancion2} from "../src/index";

describe ('Métodos de la clase Artista',() => { 
  expect(artista1 instanceof Artistas).to.eql (true);
  it ('Probando metodo setNombreArtista() y getNombreArtista()',() => { 
  artista1.setNombreArtista(`Pepe Benavente`);
  expect(artista1.getNombreArtista()).to.eql ('Pepe Benavente');
  });
  it ('Probando metodo setGrupos() y getGrupos()',() => {
    artista1.setGrupos(["Pepe Benavente"]);
    expect(artista1.getGrupos()).to.eql ([`Pepe Benavente`]);
  });
  it ('Probando metodo setGrupos() y getGrupos()',() => {
    artista1.setGrupos(["Pepe Benavente"]);
    expect(artista1.getGrupos()).to.eql ([`Pepe Benavente`]);
  });
});

//it ('Métodos de la clase Artista',() => {});