import { BasicStreamableCollection } from "./basicstreamablecollection";
import { Peliculas } from "./peliculas";

/**
 * EJERCICIO 2: DXIFlix
 * @class ColeccionPeliculas extiende de BasicStreamableCollection<Peliculas> especializado en Peliculas
 * @param videos tipo Peliculas que tiene todas las Peliculas de la plataforma
 */
export class ColeccionPeliculas extends BasicStreamableCollection<Peliculas>{
    constructor(protected videos: Peliculas[]){
        super(videos);
    }

    /**
     * Getter Peliculas por el nombre
     * @param nombre de la Pelicula a encontrar
     * @returns la Pelicula si existe o una sentencia porque no la encontró
     */
    public getVideoByName(nombre: string){
        let resultado: Peliculas []= [];
        for(let i: number = 0; i < this.videos.length; i++) {
            if(this.videos[i].getNombre() == nombre){
                resultado.push(this.videos[i]);
            } else{
                return console.log('Pelicula no encontrada');
            }
        }
        return resultado;
    }

    /**
     * Getter Peliculas por el año
     * @param anio de la Pelicula a encontrar
     * @returns la Pelicula si existe o una sentencia porque no la encontró
     */
    public getVideoByYear(anio: number){
        let resultado: Peliculas []= [];
        for(let i: number = 0; i < this.videos.length; i++) {
            if(this.videos[i].getAnio() == anio){
                resultado.push(this.videos[i]);
            } else{
                return console.log('Serie no encontrada');
            }
        }
        return resultado;
    }

    /**
     * Getter Peliculas por el director
     * @param autor de la Peliculas a encontrar
     * @returns la Peliculas existe o una sentencia porque no la encontró
     */
    public getVideoByAuthor(autor: string){
        let resultado: Peliculas []= [];
        for(let i: number = 0; i < this.videos.length; i++) {
            if(this.videos[i].getDirector() == autor){
                resultado.push(this.videos[i]);
            } else{
                return console.log('Serie no encontrada');
            }
        }
        return resultado;
    }

}


let pelicula1 = new Peliculas('Titanic', 'James Cameron', ['Kate Winslet', 'Leonardo DiCaprio'], ['Romance', 'Drama', 'Histórico'], 1997);
let pelicula2 = new Peliculas('La fuerza del cariño', 'James L. Brooks', ['Shirley MacLaine', 'Debra Winger', 'Jack Nicholson'], ['Drama', 'Comedia'], 1983);
let pelicula3 = new Peliculas('Asesinato en el Orient Express', 'Kenneth Branagh', ['Kenneth Branagh'], ['Policiaca', 'Misterio'], 2017);
let coleccionpeliculas= new ColeccionPeliculas([pelicula1, pelicula2, pelicula3]);

coleccionpeliculas.getVideoByName('Titanic');
coleccionpeliculas.getVideoByYear(2017);
coleccionpeliculas.getVideoByAuthor('James L. Brooks');

console.log(coleccionpeliculas);