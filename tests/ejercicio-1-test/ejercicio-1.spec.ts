import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Marvel} from '../../src/ejercicio-1/marvel';
import {KimetsuNoYaiba} from '../../src/ejercicio-1/kimetsu';
import {OnePiece} from '../../src/ejercicio-1/onepiece';
import {Combat} from '../../src/ejercicio-1/combat';
import {Pokedex} from '../../src/ejercicio-1/pokedex';

let pokemon1 = new Pokemon('Flareon', 25, 0.9, 'Fuego', [130, 60, 65, 65]);
let pokemon2 = new Pokemon('Leafeon', 25.5, 1, 'Hierba', [110, 130, 95, 65]);

let marvel1 = new Marvel('Spiderman', 'Hombre araña', 'Mary Jane', [85, 65, 120, 70]);
let marvel2 = new Marvel('Superman', 'Super fuerza', 'Criptonita', [75, 95, 113, 75]);

let tanjiro = new KimetsuNoYaiba('Tanjiro', 'Agua', [115, 90, 60, 95]);
let zenitsu = new KimetsuNoYaiba('Zenitsu', 'Rayo', [112, 75, 143, 88]);
let inosuke = new KimetsuNoYaiba('Inosuke', 'Bestia', [100, 135, 45, 45]);

let luffy = new OnePiece('Monkey D. Luffy', 'Paramecia', 'Goma', [120, 100, 90, 100]);
let sanji = new OnePiece('Sanji', 'Ninguna', 'Patadas', [95, 67, 122, 72]);
let choper = new OnePiece('Choper', 'Zoan', 'Reno', [84, 78, 100, 78]);

let combate1 = new Combat(pokemon1, pokemon2);
let combate2 = new Combat(pokemon2, marvel1);
let combate3 = new Combat(marvel2, inosuke);
let combate4 = new Combat(tanjiro, sanji);
let combate5 = new Combat(luffy, choper);
let combate6 = new Combat(marvel1, marvel2);
let combate7 = new Combat(tanjiro, zenitsu);

let pokedex = new Pokedex([pokemon1, marvel2, zenitsu, luffy, sanji]);

describe('Pokemon', () => {
  it('pokemon1.getPeso() returns peso del pokemon', () => {
    return expect(pokemon1.getPeso()).to.be.equal(25);
  })

  it('pokemon1.getAltura() returns altura del pokemon', () => {
    return expect(pokemon1.getAltura()).to.be.equal(0.9);
  })

  it('pokemon1.getTipo() returns tipo del pokemon', () => {
    return expect(pokemon1.getTipo()).to.be.equal('Fuego');
  })

  it('pokemon1.getEstadisticas() returns estadísticas del pokemon', () => {
    return expect(pokemon1.getEstadisticas()).to.be.eql({ ataque: 130, defensa: 60, velocidad: 65, hp: 65});
  })

  it('pokemon1.getAtaque() returns ataque del pokemon', () => {
    return expect(pokemon1.getAtaque()).to.be.eql(130);
  })
  it('pokemon1.getDefensa() returns defensa del pokemon', () => {
    return expect(pokemon1.getDefensa()).to.be.eql(60);
  })
  it('pokemon1.getVelocidad() returns velocidad del pokemon', () => {
    return expect(pokemon1.getVelocidad()).to.be.eql(65);
  })
  it('pokemon1.getHP() returns HP del pokemon', () => {
    return expect(pokemon1.getHP()).to.be.eql(65);
  })
});


describe('Marvel', () => {
  it('marvel1.getSuperPoder() returns superpoder el personaje de Marvel', () => {
    return expect(marvel1.getSuperPoder()).to.be.equal('Hombre araña');
  })

  it('marvel1.getDebilidad() returns debilidad del personaje de Marvel', () => {
    return expect(marvel1.getDebilidad()).to.be.equal('Mary Jane');
  })

  it('marvel1.getEstadisticas() returns estadísticas del personaje de Marvel', () => {
    return expect(marvel1.getEstadisticas()).to.be.eql({ ataque: 85, defensa: 65, velocidad: 120, hp: 70});
  })

  it('marvel1.getAtaque() returns ataque del personaje de Marvel', () => {
    return expect(marvel1.getAtaque()).to.be.eql(85);
  })
  it('marvel1.getDefensa() returns defensa del personaje de Marvel', () => {
    return expect(marvel1.getDefensa()).to.be.eql(65);
  })
  it('marvel1.getVelocidad() returns velocidad del personaje de Marvel', () => {
    return expect(marvel1.getVelocidad()).to.be.eql(120);
  })
  it('marvel1.getHP() returns HP del personaje de Marvel', () => {
    return expect(marvel1.getHP()).to.be.eql(70);
  })
});

describe('Kimetsu', () => {
  it('zenitsu.getRespiracion() returns superpoder(respiracion de un elemento) el personaje de Kimetsu No Yaiba', () => {
    return expect(zenitsu.getRespiracion()).to.be.equal('Rayo');
  })

  it('zenitsu.getEstadisticas() returns estadísticas del personaje de Kimetsu No Yaiba', () => {
    return expect(zenitsu.getEstadisticas()).to.be.eql({ ataque: 112, defensa: 75, velocidad: 143, hp: 88});
  })

  it('zenitsu.getAtaque() returns ataque del personaje de Kimetsu No Yaiba', () => {
    return expect(zenitsu.getAtaque()).to.be.eql(112);
  })
  it('zenitsu.getDefensa() returns defensa del personaje de Kimetsu No Yaiba', () => {
    return expect(zenitsu.getDefensa()).to.be.eql(75);
  })
  it('zenitsu.getVelocidad() returns velocidad del personaje de Kimetsu No Yaiba', () => {
    return expect(zenitsu.getVelocidad()).to.be.eql(143);
  })
  it('zenitsu.getHP() returns HP del personaje de Kimetsu No Yaiba', () => {
    return expect(zenitsu.getHP()).to.be.eql(88);
  })
});

describe('One Piece', () => {
  it('luffy.getFruta() returns nombre de la fruta del diablo si tiene alguno de los personajes de One Piece', () => {
    return expect(luffy.getFruta()).to.be.equal('Paramecia');
  })
  it('luffy.getHabilidad() returns nombre de la habilidad de los personajes de One Piece', () => {
    return expect(luffy.getHabilidad()).to.be.equal('Goma');
  })
  
  it('luffy.getEstadisticas() returns estadísticas del personaje de One Piece', () => {
    return expect(luffy.getEstadisticas()).to.be.eql({ ataque: 120, defensa: 100, velocidad: 90, hp: 100});
  })

  it('luffy.getAtaque() returns ataque del personaje de One Piece', () => {
    return expect(luffy.getAtaque()).to.be.eql(120);
  })
  it('luffy.getDefensa() returns defensa del personaje de One Piece', () => {
    return expect(luffy.getDefensa()).to.be.eql(100);
  })
  it('luffy.getVelocidad() returns velocidad del personaje de One Piece', () => {
    return expect(luffy.getVelocidad()).to.be.eql(90);
  })
  it('luffy.getHP() returns HP del personaje de One Piece', () => {
    return expect(luffy.getHP()).to.be.eql(100);
  })
});

describe('Combat, simula los combates', () => {
  it('combate1.getPhrase() returns frase del contrincante', () => {
    return expect(combate1.getPhrase(sanji)).to.be.equal(undefined);
  })
  it('combate1.start() returns combate entre pokemon1 y pokemon2 (mismo mundo Pokemon)', () => {
    return expect(combate1.start()).to.be.eql([ +0, 19 ]);
  })
  it('combate2.start() returns combate entre pokemon2 y marvel1 (distinto mundo Pokemon y Marvel)', () => {
    return expect(combate2.start()).to.be.eql([+0, 37 ]);
  })
  it('combate3.start() returns combate entre marvel2 y inosuke (distinto mundo Marvel y Kimetsu No Yaiba)', () => {
    return expect(combate3.start()).to.be.eql([47, +0]);
  })
  it('combate4.start() returns combate entre tanjiro y sanji (distinto mundo Kimetsu No Yaiba y One Piece)', () => {
    return expect(combate4.start()).to.be.eql([ 9, 19 ]);
  })
  it('combate5.start() returns combate entre luffy y choper (mismo mundo One Piece)', () => {
    return expect(combate5.start()).to.be.eql([ 23, 36 ]);
  })
  it('combate6.start() returns combate entre marvel1 y marvel2 (mismo mundo Marvel)', () => {
    return expect(combate6.start()).to.be.eql([ 25, 17 ]);
  })
  it('combate7.start() returns combate entre tanjiro y zenitsu (mismo mundo Kimetsu No Yaiba)', () => {
    return expect(combate7.start()).to.be.eql([ 18, 26 ]);
  })
});

describe('Pokedex, tiene las especificaciones de cada luchador', () => {
  it('pokedex.getLuchadores() returns los luchadores de la pokedex', () => {
    return expect(pokedex.getLuchadores(1)).to.be.eql(marvel2);
  })
  it('pokedex.getNumeroLuchadores() returns número de luchadores', () => {
    return expect(pokedex.getNumeroLuchadores()).to.be.eql(5);
  })
});
