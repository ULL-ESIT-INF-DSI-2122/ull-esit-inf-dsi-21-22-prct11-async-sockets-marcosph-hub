import { BasicStreamableCollection } from "./basicstreamablecollection";
import { Documentales } from "./documentales";

/**
 * EJERCICIO 2: DXIFlix
 * @class ColeccionDocumentales extiende de BasicStreamableCollection<Documentales> especializado en Documentales
 * @param videos tipo Documentales que tiene todos los Documentales de la plataforma
 */
export class ColeccionDocumentales extends BasicStreamableCollection<Documentales>{
    constructor(protected videos: Documentales[]){
        super(videos);
    }

    /**
     * Getter Documentales por el nombre
     * @param nombre de la Documentales a encontrar
     * @returns la Documentales si existe o una sentencia porque no la encontró
     */
    public getVideoByName(nombre: string){
        let resultado: Documentales []= [];
        for(let i: number = 0; i < this.videos.length; i++) {
            if(this.videos[i].getNombre() == nombre){
                resultado.push(this.videos[i]);
            } else{
                return console.log('Documental no encontrado');
            }
        }
        return resultado;
    }

    /**
     * Getter Documentales por el año
     * @param anio de la Documentales a encontrar
     * @returns la Documentales si existe o una sentencia porque no la encontró
     */
    public getVideoByYear(anio: number){
        let resultado: Documentales []= [];
        for(let i: number = 0; i < this.videos.length; i++) {
            if(this.videos[i].getAnio() == anio){
                resultado.push(this.videos[i]);
            } else{
                return console.log('Documentales no encontrado');
            }
        }
        return resultado;
    }

    /**
     * Getter Documentales por el autor
     * @param autor de la Documentales a encontrar
     * @returns la Documentales si existe o una sentencia porque no la encontró
     */
    public getVideoByAuthor(autor: string){
        let resultado: Documentales []= [];
        for(let i: number = 0; i < this.videos.length; i++) {
            if(this.videos[i].getDirector() == autor){
                resultado.push(this.videos[i]);
            } else{
                return console.log('Documentales no encontrado');
            }
        }
        return resultado;
    }

}


let documental1 = new Documentales('Los zorros', 'National Geographic España', ['Naturaleza'], 2017);
let documental2 = new Documentales('Viaje al centro de la tele', 'Pedro Santos Movellán', ['Música'], 2013);
let colecciondocumentales = new ColeccionDocumentales([documental1, documental2])

colecciondocumentales.getVideoByName('Los zorros');
colecciondocumentales.getVideoByYear(2017);
colecciondocumentales.getVideoByAuthor('Pedro Santos Movellán');

console.log(colecciondocumentales);