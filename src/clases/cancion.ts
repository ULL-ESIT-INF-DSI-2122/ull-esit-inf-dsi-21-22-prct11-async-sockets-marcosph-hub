import { GenerosMusicales } from "./generosMusicales";

export class Cancion{
  /*private nombre: string;
  private autor: string;
  private duracion: number;
  private genero: GenerosMusicales;
  private single: boolean;
  private numReproducciones: number;*/
  constructor(private nombre: string, private autor: string, private duracion: number, 
    private genero: GenerosMusicales, private single: boolean, private numReproducciones: number){}
    getNombreCancion(){
      return this.nombre;
    }
    getAutorCancion(){
      return this.autor;
    }
    getDuracionCancion(){
      return this.duracion;
    }
    getGeneroMusical(){
      return this.genero.getNombreGenero();
    }
    getSingle(){
      return this.single;
    }
    getNumReproducciones(){
      return this.numReproducciones;
    }
    setNombreCancion(nombre: string){
      this.nombre = nombre;
    }
    setAutorCancion(autor: string){
      this.autor = autor;
    }
    setDuracionCancion(duracion: number){
      this.duracion = duracion;
    }
    setGeneroMusical(genero: string){
      this.genero.setNombreGenero(genero);
    }
    setSingle(single: boolean){
      this.single = single;
    }
    setNumReproducciones(reproducciones: number){
      this.numReproducciones = reproducciones;
    }
}

/**
 * let hour = Math.floor(duracion / 3600);
 * let min = Math.floor(duracion / 60);
 * let secs = duracion - min * 60;
 * duracion = duracion - hour * 3600;
 */
