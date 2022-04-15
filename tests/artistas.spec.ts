import 'mocha';
import { expect } from 'chai';
import { Artistas } from "../src/clases/clases-bases/artistas";
import { artista1, grupo1} from "../src/index";
import { album1 } from "../src/index";
import { playlist1 } from "../src/index";
import {  cancion1, cancion2 } from "../src/index";
import { Metal, Rock, RyB, Soul, Pop} from "../src/index";


describe ('Métodos de la clase Artista',() => { 
  expect(artista1 instanceof Artistas).to.eql (true);
  it ('Clase Artista Operativa',() => { 
    expect(artista1 instanceof Artistas).to.eql (true);
    });
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
  it ('Probando metodo setCanciones() y getCanciones()',() => {
    artista1.setCanciones([cancion1,cancion2]);
    expect(artista1.getCanciones()).to.eql ([ 'El polvorete', 'Thriller' ]);
  });
  it ('Probando metodo setCanciones() y getCanciones()',() => {
    artista1.setGeneros([Pop, Metal]);
    expect(artista1.getGeneros()).to.eql ([`Pop`, `Metal`]);
  });
  it ('Probando metodo setOyentes() y getOyentes()',() => {
    artista1.setOyentes(1000000);
    expect(artista1.getOyentes()).to.eq (1000000);
  });
  it ('Probando metodo getGrupoSize()',() => {
    expect(artista1.getGrupoSize()).to.eql (1);
  });
  it ('Probando metodo setOyentes() y getOyentes()',() => {
    artista1.setAlbumes([album1]);
    expect(artista1.getAlbumes()).to.eql ([`Thriller`]);
  });
});
