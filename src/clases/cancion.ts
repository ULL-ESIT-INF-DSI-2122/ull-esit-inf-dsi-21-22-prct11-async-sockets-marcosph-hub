export class Cancion{
  constructor(private nombre: string, private autor: string, private duracion: number, 
    private genero: GeneroMusical, private single: boolean, private numReproducciones: number){}
    getNombre(){
      return this.nombre;
    }
    getAutor(){
      return this.autor;
    }
    getDuracion(){
      return this.duracion;
    }
    getGeneroMusical(){
      return this.genero;
    }
    getSingle(){
      return this.single;
    }
    getNumReproducciones(){
      return this.numReproducciones;
    }
}

/**
 * let hour = Math.floor(duracion / 3600);
 * let min = Math.floor(duracion / 60);
 * let secs = duracion - min * 60;
 * duracion = duracion - hour * 3600;
 */
