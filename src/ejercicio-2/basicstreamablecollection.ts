import { Streamable } from "./streamable";

/**
 * EJERCICIO 2: DSIFlix
 * @class BasicStreamableCollection<T> implementa la interfaz genérica de Streamable<T>
 * @param videos: T[] colección de vídeos de la plataforma
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T>{
    constructor(protected videos: T[]){}

    /**
     * Añadir video a la plataforma
     * @param video a añadir
     */
    public addVideo(video: T): void {
        for(let i: number = 0; i < this.videos.length; i++) {
            this.videos.push(video);
        }
    }

    /**
     * Getter del número de vídeos de la plataforma
     * @returns el número de videos
     */
    public getNumberOfVideos(){
        return this.videos.length;
    }

    /**
     * Método abstracto conseguir vídeo por su nombre
     * @param nombre del video (string)
     */
    abstract getVideoByName(nombre: string): T[] | void;

    /**
     * Método abstracto conseguir vídeo por su año
     * @param anio del video
     */
    abstract getVideoByYear(anio: number): T[] | void;

    /**
     * Método abstracto conseguir vídeo por su autor
     * @param autor 
     */
    abstract getVideoByAuthor(autor: string): T[] | void;

}

