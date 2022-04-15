import 'mocha';
import { expect } from 'chai';
import { Grupos } from "../src/clases/clases-bases/grupos";
import { artista1, grupo1} from "../src/index";
import { album1 } from "../src/index";
import { playlist1 } from "../src/index";
import {  cancion1, cancion2 } from "../src/index";
import { Metal, Rock, RyB, Soul, Pop} from "../src/index";

describe('Métodos de la Clase Cancion',() => {
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