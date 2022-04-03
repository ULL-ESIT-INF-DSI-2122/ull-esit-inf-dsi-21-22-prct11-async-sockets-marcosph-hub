import 'mocha';
import { expect } from 'chai';
import { Album } from '../src/clases/album'
import { Artistas } from "../src/clases/artistas";
import { Cancion } from "../src/clases/cancion";
import { GenerosMusicales } from "../src/clases/generosMusicales";
import { Grupos } from "../src/clases/grupos";
import { Playlist } from "../src/clases/playlist";

describe ('Test',() => {
const Rock = new GenerosMusicales(`Rock`); //6
const cancion1 = new Cancion('Pulling Teeth', 'Alan Ryker',  254, [Rock], false, 2100000); // 4:23
const artista1 = new Artistas('Michael Jackson');
const album1 = new Album(`Thriller`, artista1, [Rock], 11982,[cancion1]);

  it ('Test',() => {
    expect(album1.getGenero()).to.be.eql([ 'Rock' ])
  });
});