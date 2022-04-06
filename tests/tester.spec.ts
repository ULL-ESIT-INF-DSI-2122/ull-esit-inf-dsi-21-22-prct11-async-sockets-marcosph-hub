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
import { } from "../src/index";

describe ('Test ejercicio 7',() => {
  it ('Métodos de la clase Cancion',() => {
    expect(cancion1 instanceof Cancion).to.eql (true);
    cancion1.setNombreCancion(`El polvorete`);
    expect(cancion1.getNombreCancion()).to.eql ('El polvorete');
    cancion1.setAutorCancion(`Pepe Benavente`);
    expect(cancion1.getAutorCancion()).to.eql ('Pepe Benavente');
    cancion1.setDuracionCancion(`2:30`);
    expect(cancion1.getDuracionCancion()).to.eql ('2:30');
    expect(cancion1.getDuracionCancionSecs()).to.eql (150);
    cancion1.setGeneroMusical([Pop, Metal]);
    expect(cancion1.getGenero()).to.eql ([Pop, Metal]);
    expect(cancion1.getGeneroMusical()).to.eql ([`Pop`, `Metal`]);
    cancion1.setNumReproducciones(10000000);
    expect(cancion1.getNumReproducciones()).to.eql (10000000);
    cancion1.setSingle(true);
    expect(cancion1.getSingle()).to.eql (true);
  });
  it ('Métodos de la clase Artista',() => {
    expect(artista1 instanceof Artistas).to.eql (true);
    artista1.setNombreArtista(`Pepe Benavente`);
    expect(artista1.getNombreArtista()).to.eql ('Pepe Benavente');
    artista1.setGrupos([grupo1]);
    expect(artista1.getGrupos()).to.eql ([`Metallica`]);
   artista1.setCanciones([cancion1,cancion2]);
    expect(artista1.getCanciones()).to.eql ([`El polvorete`, 'Thriller']);
    artista1.setGeneros([Pop, Metal]);
    expect(artista1.getGeneros()).to.eql ([`Pop`, `Metal`]);
    artista1.setOyentes(1000000);
    expect(artista1.getOyentes()).to.eql (9000000);
    expect(artista1.getGrupoSize()).to.eql (1);
    artista1.setAlbumes([album1]);
   expect(artista1.getAlbumes()).to.eql ([`Thriller`]);
  });
  it ('Métodos de la clase Grupo',() => {
    expect(grupo1 instanceof Grupos).to.eql (true);
    grupo1.setNombreGrupo(`los 4`);
    expect(grupo1.getNombreGrupo()).to.eql ('los 4');
    grupo1.setArtistas([artista1]);
    expect(grupo1.getArtistas()).to.eql ([`Pepe Benavente`]);
   grupo1.setYearGrupo(1999);
    expect(grupo1.getYearGrupo()).to.eql (1999);
    grupo1.setGenero([Pop, Metal]);
    expect(grupo1.getGenero()).to.eql ([`Pop`, `Metal`]);
    grupo1.setAlbumes([album1]);
    //expect(grupo1.getAlbumes()).to.eql (console.log([album1]));
    grupo1.setOyentes(1000);
   expect(grupo1.getOyentes()).to.eql (1000);
  });
  it ('Métodos de la clase Album',() => {
   
  });
  it ('Métodos de la clase Playlist',() => {
 
  });
});