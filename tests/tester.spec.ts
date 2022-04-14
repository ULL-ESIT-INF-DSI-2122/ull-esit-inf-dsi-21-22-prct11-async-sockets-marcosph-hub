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
  it ('Clase Cancion Operativa',() => { 
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


  describe('Métodos de la Clase Grupo',() => {
    it ('Clase Grupo Operativa',() => { 
      expect(grupo1 instanceof Grupos).to.eql (true);
    });
    it ('Probando metodo setNombreGrupo() y getNombreGrupo()',() => { 
      grupo1.setNombreGrupo(`los 4`);
      expect(grupo1.getNombreGrupo()).to.eql ('los 4');
    });
    it ('Probando metodo setArtistas() y getArtistas_()',() => { 
      grupo1.setArtistas([artista1]);
      expect(grupo1.getArtistas_()).to.eql ([artista1]);
    });
    it ('Probando metodo setYearGrupo() y getYearGrupo()',() => { 
      grupo1.setYearGrupo(1999);
      expect(grupo1.getYearGrupo()).to.eql (1999);
    });
    it ('Probando metodo setGenero() y getGenero()',() => { 
      grupo1.setGenero([Pop, Metal]);
      expect(grupo1.getGenero()).to.eql ([`Pop`, `Metal`]);
    });
    it ('Probando metodo setAlbumes() y getAlbumes()',() => { 
      grupo1.setAlbumes([album1]);
      expect(grupo1.getAlbumes()).to.eql ([album1]);
    });
    it ('Probando metodo setOyentes() y getOyentes()',() => { 
      grupo1.setOyentes(1000);
    expect(grupo1.getOyentes()).to.eql (1000);
    });
  });

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


  describe('Métodos de la Clase Playlist',() => {
    it ('Clase Playlist Operativa',() => { 
      expect(playlist1 instanceof Playlist).to.eql (true);
    });
    it ('Probando metodo setNombrePlaylist() y getNombrePlaylist()',() => { 
      playlist1.setNombrePlaylist(`Musiquita a full`);
      expect(playlist1.getNombrePlaylist()).to.eql (`Musiquita a full`);
    });
    it ('Probando metodo setDuracion() y getDuracion()',() => { 
      playlist1.setDuracion(`10:20`);
      expect(playlist1.getDuracion()).to.eql ('0h 24min 40secs');
    });
    it ('Probando metodo setCanciones() y getCanciones()',() => { 
      playlist1.setCanciones([cancion1,cancion2]);
      expect(playlist1.getCanciones()).to.eql ([cancion1,cancion2]);
    });
    it ('Probando metodo setGeneros() y getGeneros()',() => { 
      playlist1.setGeneros([Pop, Metal]);
      expect(playlist1.getGeneros()).to.eql ([`Pop`, `Metal`]);
    });
  });


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