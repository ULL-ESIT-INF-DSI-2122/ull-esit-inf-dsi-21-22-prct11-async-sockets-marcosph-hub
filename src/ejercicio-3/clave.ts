/**
 * EJERCICIO 3: CIFRADO CÉSAR
 * @class Clave contiene las características de la clave
 * @param clave que se va a tratar
 */
 export class Clave{
    constructor(protected clave: string){}

    /**
     * Getter de la clave a cifrar
     * @returns clave
     */
    public getClave(){
        return this.clave;
    }

    /**
     * Getter del tamaño de la clave
     * @returns el tamaño
     */
    public getNumeroCaracteres(){
        return this.clave.length;
    }

    /**
     * Getter caracteres uno a uno de la clave
     * @returns caracteres
     */
    public getCaracteres(indice: number){
        return this.clave.charAt(indice);
    }
}