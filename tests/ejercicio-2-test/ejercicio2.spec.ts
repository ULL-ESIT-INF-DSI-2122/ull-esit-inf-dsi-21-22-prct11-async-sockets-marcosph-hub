import 'mocha';
import {expect} from 'chai';
import {Series} from '../../src/ejercicio-2/series';
import {Peliculas} from '../../src/ejercicio-2/peliculas';
import {Documentales} from '../../src/ejercicio-2/documentales';
import {ColeccionSeries} from '../../src/ejercicio-2/coleccionseries';
import {ColeccionPeliculas} from '../../src/ejercicio-2/coleccionpeliculas';
import {ColeccionDocumentales} from '../../src/ejercicio-2/colecciondocumentales';

let serie1 = new Series('Juego de Tronos', 'George R. R. Martin', ['Aventura', 'Drama', 'Fantasía', 'Medieval'], 1996);
let serie2 = new Series('Vikingos', 'Michael Hirst', ['Histórico', 'Drama', 'Fantasía', 'Acción'], 2013);
let serie3 = new Series('Fugitiva', 'Joaquín Oristrell', ['Thriller'], 2018);

let pelicula1 = new Peliculas('Titanic', 'James Cameron', ['Kate Winslet', 'Leonardo DiCaprio'], ['Romance', 'Drama', 'Histórico'], 1997);
let pelicula2 = new Peliculas('La fuerza del cariño', 'James L. Brooks', ['Shirley MacLaine', 'Debra Winger', 'Jack Nicholson'], ['Drama', 'Comedia'], 1983);
let pelicula3 = new Peliculas('Asesinato en el Orient Express', 'Kenneth Branagh', ['Kenneth Branagh'], ['Policiaca', 'Misterio'], 2017);

let documental1 = new Documentales('Los zorros', 'National Geographic España', ['Naturaleza'], 2017);
let documental2 = new Documentales('Viaje al centro de la tele', 'Pedro Santos Movellán', ['Música'], 2013);

let coleccionseries = new ColeccionSeries([serie1, serie2, serie3]);
let coleccionpeliculas = new ColeccionPeliculas([pelicula1, pelicula2, pelicula3]);
let colecciondocumentales = new ColeccionDocumentales([documental1, documental2]);

describe('Series', () => {
  it('serie1.getNombre() returns nombre de la serie', () => {
    return expect(serie1.getNombre()).to.be.equal('Juego de Tronos');
  })
  it('serie1.getAutor() returns nombre del autor de la serie', () => {
    return expect(serie1.getAutor()).to.be.equal('George R. R. Martin');
  })
  it('serie1.getGenero() returns género/s de la serie', () => {
    return expect(serie1.getGenero()).to.be.eql(['Aventura', 'Drama', 'Fantasía', 'Medieval']);
  })
  it('serie1.getAnio() returns año de la serie', () => {
    return expect(serie1.getAnio()).to.be.equal(1996);
  })
})

describe('Películas', () => {
  it('pelicula2.getNombre() returns nombre de la pelicula', () => {
    return expect(pelicula2.getNombre()).to.be.equal('La fuerza del cariño');
  })
  it('pelicula2.getDirector() returns nombre del director de la pelicula', () => {
    return expect(pelicula2.getDirector()).to.be.equal('James L. Brooks');
  })
  it('pelicula2.getActores() returns actore/s actrices de la pelicula', () => {
    return expect(pelicula2.getActores()).to.be.eql(['Shirley MacLaine', 'Debra Winger', 'Jack Nicholson']);
  })
  it('pelicula2.getGenero() returns género/s de la pelicula', () => {
    return expect(pelicula2.getGenero()).to.be.eql(['Drama', 'Comedia']);
  })
  it('pelicula2.getAnio() returns año de la pelicula', () => {
    return expect(pelicula2.getAnio()).to.be.equal(1983);
  })
})

describe('Documentales', () => {
  it('documental1.getNombre() returns nombre del documental', () => {
    return expect(documental1.getNombre()).to.be.equal('Los zorros');
  })
  it('documental1.getDirector() returns nombre del director del documental', () => {
    return expect(documental1.getDirector()).to.be.equal('National Geographic España');
  })
  it('documental1.getGenero() returns género/s del documental', () => {
    return expect(documental1.getGenero()).to.be.eql(['Naturaleza']);
  })
  it('documental1.getAnio() returns año del documental', () => {
    return expect(documental1.getAnio()).to.be.equal(2017);
  })
})

describe('Colección de series de la plataforma', () => {
  it('coleccionseries.getVideoByName() returns serie encontrada por el nombre', () => {
    return expect(coleccionseries.getVideoByName('Vikingos')).to.be.eql(undefined);
  })
  it('coleccionseries.getVideoByYear() returns serie encontrada por el año', () => {
    return expect(coleccionseries.getVideoByYear(2018)).to.be.eql(undefined);
  })
  it('coleccionseries.getVideoByAuthor() returns serie encontrada por el autor', () => {
    return expect(coleccionseries.getVideoByAuthor('George R. R. Martin')).to.be.eql(undefined);
  })
})

describe('Colección de peliculas de la plataforma', () => {
  it('coleccionpeliculas.getVideoByName() returns pelicula encontrada por el nombre', () => {
    return expect(coleccionpeliculas.getVideoByName('Asesinato en el Orient Express')).to.be.eql(undefined);
  })
  it('coleccionpeliculas.getVideoByYear() returns pelicula encontrada por el año', () => {
    return expect(coleccionpeliculas.getVideoByYear(1997)).to.be.eql(undefined);
  })
  it('coleccionpeliculas.getVideoByAuthor() returns pelicula encontrada por el director', () => {
    return expect(coleccionpeliculas.getVideoByAuthor('James L. Brooks')).to.be.eql(undefined);
  })
})

describe('Colección de documentales de la plataforma', () => {
  it('colecciondocumentales.getVideoByName() returns documental encontrada por el nombre', () => {
    return expect(colecciondocumentales.getVideoByName('Los zorros')).to.be.eql(undefined);
  })
  it('colecciondocumentales.getVideoByYear() returns documental encontrada por el año', () => {
    return expect(colecciondocumentales.getVideoByYear(2017)).to.be.eql(undefined);
  })
  it('colecciondocumentales.getVideoByAuthor() returns documental encontrada por el director', () => {
    return expect(colecciondocumentales.getVideoByAuthor('Pedro Santos Movellán')).to.be.eql(undefined);
  })
})