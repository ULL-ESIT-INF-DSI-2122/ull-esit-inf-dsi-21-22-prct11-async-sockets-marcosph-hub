import 'mocha';
import { expect } from 'chai';
import { Album } from '../src/clases/album'
import { Artistas } from "../src/clases/artistas";
import { Cancion } from "../src/clases/cancion";
import { GenerosMusicales } from "../src/clases/generosMusicales";
import { Grupos } from "../src/clases/grupos";
import { Playlist } from "../src/clases/playlist";
import {  cancion1, cancion2} from "../src/index";
import { Metal, Rock, RyB, Soul, Pop} from "../src/index";
import { artista1, grupo1} from "../src/index";
import { album1 } from "../src/index";
import { playlist1 } from "../src/index";

describe('Métodos de la Clase Cancion',() => {
  it ('Clase Artista Operativa',() => { 
    expect(cancion1 instanceof Cancion).to.eql (true);
  });
  it ('Probando metodo setNombreCancion() y getNombreCancion()',() => { 
    cancion1.setNombreCancion(`El polvorete`);
    expect(cancion1.getNombreCancion()).to.eql ('El polvorete');
  });
  it ('Probando metodo setAutorCancion() y getAutorCancion()',() => { 
    cancion1.setAutorCancion(`Pepe Benavente`);
    expect(cancion1.getAutorCancion()).to.eql ('Pepe Benavente');
  });
  it ('Probando metodo setDuracionCancion() y getDuracionCancionSecs()',() => { 
    cancion1.setDuracionCancion(`2:30`);
    expect(cancion1.getDuracionCancion()).to.eql ('2:30');
    expect(cancion1.getDuracionCancionSecs()).to.eql (150);
  });
  it ('Probando metodo setGeneroMusical() y getGeneroMusical()',() => { 
    cancion1.setGeneroMusical([Pop, Metal]);
    expect(cancion1.getGenero()).to.eql ([Pop, Metal]);
    expect(cancion1.getGeneroMusical()).to.eql ([`Pop`, `Metal`]);
  });
  it ('Probando metodo setNumReproducciones() y getNumReproducciones()',() => { 
    cancion1.setNumReproducciones(10000000);
    expect(cancion1.getNumReproducciones()).to.eql (10000000);
  });
  it ('Probando metodo setSingle() y getSingle()',() => { 
    cancion1.setSingle(true);
    expect(cancion1.getSingle()).to.eql (true);
  });
});
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
      expect(artista1.getCanciones()).to.eql ([ 'Pulling Teeth', 'Thriller' ]);
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
  it ('Métodos de la clase Grupo',() => {
    expect(grupo1 instanceof Grupos).to.eql (true);
    grupo1.setNombreGrupo(`los 4`);
    expect(grupo1.getNombreGrupo()).to.eql ('los 4');
    grupo1.setArtistas([artista1]);
    expect(grupo1.getArtistas_()).to.eql ([artista1]);
   grupo1.setYearGrupo(1999);
    expect(grupo1.getYearGrupo()).to.eql (1999);
    grupo1.setGenero([Pop, Metal]);
    expect(grupo1.getGenero()).to.eql ([`Pop`, `Metal`]);
    grupo1.setAlbumes([album1]);
    expect(grupo1.getAlbumes()).to.eql ([album1]);
    grupo1.setOyentes(1000);
   expect(grupo1.getOyentes()).to.eql (1000);
  });
  it ('Métodos de la clase Album',() => {
    expect(album1 instanceof Album).to.eql (true);
    album1.setNombreAlbum(`MotoMami`);
    expect(album1.getNombreAlbum()).to.eql (`MotoMami`);
    album1.setAutores(grupo1.getNombreGrupo());
   expect(album1.getAutores()).to.eql (`los 4`);
   album1.setAutores(artista1);
   expect(album1.getAutores()).to.eql ('Pepe Benavente');
   album1.setGenero([Pop, Metal]);
   expect(album1.getGenero()).to.eql ([`Pop`, `Metal`]);
   album1.setYear(2020);
   expect(album1.getYear()).to.eql (2020);
   album1.setCanciones([cancion1,cancion2]);
   expect(album1.getCanciones()).to.eql ([cancion1,cancion2]); 
  });
  it ('Métodos de la clase Playlist',() => {
    expect(playlist1 instanceof Playlist).to.eql (true);
    playlist1.setNombrePlaylist(`Musiquita a full`);
    expect(playlist1.getNombrePlaylist()).to.eql (`Musiquita a full`);
    playlist1.setDuracion(`10:20`);
    expect(playlist1.getDuracion()).to.eql ('0h 24min 40secs');
    playlist1.setCanciones([cancion1,cancion2]);
    expect(playlist1.getCanciones()).to.eql ([cancion1,cancion2]);
    playlist1.setGeneros([Pop, Metal]);
    expect(playlist1.getGeneros()).to.eql ([`Pop`, `Metal`]);
  });
  it ('Métodos de la clase GenerosMusciales',() => {
    expect(Pop instanceof GenerosMusicales).to.eql (true);
    Pop.setNombreGenero(`Trap`);
    expect(Pop.getNombreGenero()).to.eql (`Trap`);
    Pop.setGrupos([grupo1.getNombreGrupo()]);
    expect(Pop.getGrupos()).to.eql ([grupo1]);
    Pop.setArtistas([artista1.getNombreArtista()]);
    expect(Pop.getArtistas()).to.eql ([artista1]);
    Pop.setAlbumes([album1.getNombreAlbum()]);
    expect(Pop.getAlbumes()).to.eql ([album1]);
    Pop.setCanciones([cancion1.getNombreCancion()]);
    expect(Pop.getCanciones()).to.eql ([cancion1]);
  });