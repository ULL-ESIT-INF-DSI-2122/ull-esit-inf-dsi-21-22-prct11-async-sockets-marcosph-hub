import 'mocha';
import { expect } from 'chai';
import { Playlist } from "../src/clases/clases-bases/playlist";
import { artista1, grupo1} from "../src/index";
import { album1 } from "../src/index";
import { playlist1 } from "../src/index";
import {  cancion1, cancion2 } from "../src/index";
import { Metal, Rock, RyB, Soul, Pop} from "../src/index";

describe('Métodos de la Clase Cancion',() => {
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