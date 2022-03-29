/**
 * EJERCICIO 3: CIFRADO CÉSAR
 * @class Mensaje contiene las características del mensaje
 * @param mensaje que se va a tratar
 */
export class Mensaje{
    constructor(protected mensaje: string){}

    /**
     * Getter del mensaje a cifrar
     * @returns mensaje
     */
    public getMensaje(){
        return this.mensaje;
    }

    /**
     * Getter del tamaño del mensaje
     * @returns el tamaño
     */
    public getNumeroCaracteres(){
        return this.mensaje.length;
    }

    /**
     * Getter caracteres uno a uno del mensaje
     * @returns caracteres
     */
     public getCaracteres(indice: number){
        return this.mensaje.charAt(indice);
    }

}