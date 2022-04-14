import 'mocha';
import { expect } from 'chai';
import { Cancion } from "../src/clases/cancion";
import { artista1, grupo1} from "../src/index";
import { album1 } from "../src/index";
import { playlist1 } from "../src/index";
import {  cancion1, cancion2 } from "../src/index";
import { Metal, Rock, RyB, Soul, Pop} from "../src/index";

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
//it ('Métodos de la clase Artista',() => {});