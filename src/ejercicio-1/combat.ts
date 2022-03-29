import { Fighter } from "./fighter";
import { KimetsuNoYaiba } from "./kimetsu";
import { Marvel } from "./marvel";
import { OnePiece } from "./onepiece";
import { Pokemon } from "./pokemon";
/**
 * EJERCICIO 1.
 * @class Combat, tiene las especificaciones del combate entre luchadores de los mundos de Pokemon | Marvel | KimetsuNoYaiba | OnePiece (Fighter)
 * @param contendiente1 tiene las características del contendiente1 (tuyo)
 * @param contendiente2 tiene las características del contendiente2
 *  (rival)
 */
export class Combat {
    constructor(private contendiente1: Fighter, private contendiente2: Fighter){
    }

    /**
     * Getter de la frase del luchador dependiendo del mundo
     * @param contendiente que dice la frase
     */
    public getPhrase(contendiente: Fighter){
        if(contendiente instanceof Pokemon){
            return(console.log('Grrrraaawr'));
        } if(contendiente instanceof Marvel){
            return(console.log('Traeré la paz al mundo!'));
        } if(contendiente instanceof KimetsuNoYaiba){
            return(console.log('Acabaré contigo de manera llamativa!!'));
        } if(contendiente instanceof OnePiece){  // Mundo OnePiece
            return(console.log('Por el Rey de los piratas!!'));
        } else {
            return(console.log(''));
        }
    }

    /**
     * Método público que inicializa el combate entre luchadores del mismo y distinto mundo
     * @returns el daño que se inflige en el combate entre luchadores del mismo y distinto mundo
     */
    public start(){
        let efectividad1: number = 1;
        let efectividad2: number = 1;
        let daño1: number = 0;
        let daño2: number = 0;

        let vida1: number = this.contendiente1.getHP();
        let vida2: number = this.contendiente2.getHP();

        let ronda: number = 0;
        console.log('\nInicio del combate!!\n');

        if(this.contendiente1.getVelocidad() > this.contendiente2.getVelocidad() || this.contendiente2.getVelocidad() > this.contendiente1.getVelocidad()){
            while (this.contendiente1.getHP() > 0 || this.contendiente2.getHP() > 0){
                console.log('Luchadores: '+this.contendiente1.getNombreLuchador()+' contra... '+this.contendiente2.getNombreLuchador());
                console.log('Ronda '+ronda);
                if(this.contendiente1 instanceof Pokemon && this.contendiente2 instanceof Pokemon){
                    if (this.contendiente1.getTipo() == "Fuego" && this.contendiente2.getTipo() == "Hierba" || this.contendiente1.getTipo() == "Agua" && this.contendiente2.getTipo() == "Fuego" || this.contendiente1.getTipo() == "Hierba" && this.contendiente2.getTipo() == "Agua" || this.contendiente1.getTipo() == "Eléctrico" && this.contendiente2.getTipo() == "Agua") {
                        efectividad1 = efectividad1 * 2;
                        efectividad2 = efectividad2 * 0.5;
                    } else if (this.contendiente1.getTipo() == "Hierba" && this.contendiente2.getTipo() == "Fuego" || this.contendiente1.getTipo() == "Fuego" && this.contendiente2.getTipo() == "Agua" || this.contendiente1.getTipo() == "Agua" && this.contendiente2.getTipo() == "Hierba" || this.contendiente1.getTipo() == "Agua" && this.contendiente2.getTipo() == "Eléctrico") {
                        efectividad1 = efectividad1 * 0.5;
                        efectividad2 = efectividad2 * 2;
                    } else if (this.contendiente1.getTipo() == "Hierba" && this.contendiente2.getTipo() == "Eléctrico" || this.contendiente1.getTipo() == "Eléctrico" && this.contendiente2.getTipo() == "Hierba" || this.contendiente1.getTipo() == "Eléctrico" && this.contendiente2.getTipo() == "Fuego" || this.contendiente1.getTipo() == "Fuego" && this.contendiente2.getTipo() == "Eléctrico") {
                        efectividad1 = efectividad1 * 1;
                        efectividad2 = efectividad2 * 1;
                    } else {
                        efectividad1 = efectividad1 * 0.5;
                        efectividad2 = efectividad2 * 0.5;
                    }

                    daño1 = 50 * (this.contendiente1.getAtaque() / this.contendiente2.getDefensa()) * efectividad1;
                    daño1 = Math.round(daño1);
                    vida1 = vida1 - daño1;
                    daño2 = 50 * (this.contendiente2.getAtaque() / this.contendiente1.getDefensa()) * efectividad2;
                    daño2 = Math.round(daño2);
                    vida2 = vida2 - daño2;
        
                    console.log('\nEl tipo de tu pokemon es: '+this.contendiente1.getTipo()+'\nContra un pokemon oponente del tipo: '+this.contendiente2.getTipo()+'\nTu ataque es: '+this.contendiente1.getAtaque()+'\nContra la defensa de tu rival: '+this.contendiente2.getDefensa());

                    console.log('La vida de tu pokemon es: '+vida1+' y la de tu rival es '+vida2);

                    console.log('\nLos luchadores tienen algo que decir...\n');
                    console.log(this.contendiente1.getNombreLuchador()+': '+this.getPhrase(this.contendiente1));
                    console.log(this.contendiente2.getNombreLuchador()+': '+this.getPhrase(this.contendiente2));

                } else { //Son de otros mundos o mismo mundo pero NO mismo mundo Pokemon, se rige por quien ataca antes
                    daño1 = 50 * (this.contendiente1.getAtaque() / this.contendiente2.getDefensa());
                    daño1 = Math.round(daño1);
                    vida1 = vida1 - daño1;
                    daño2 = 50 * (this.contendiente2.getAtaque() / this.contendiente1.getDefensa());
                    daño2 = Math.round(daño2);
                    vida2 = vida2 - daño2;
                    
                    console.log('\nEl personaje: '+this.contendiente1.getNombreLuchador()+'\nContra su oponente: '+this.contendiente2.getNombreLuchador()+'\nTu ataque es: '+this.contendiente1.getAtaque()+'\nContra la defensa de tu rival: '+this.contendiente2.getDefensa());

                    console.log('La vida de tu luchador es: '+vida1+' y la de tu rival es '+vida2);

                    console.log('\nLos luchadores tienen algo que decir...\n');
                    console.log(this.contendiente1.getNombreLuchador()+': '+this.getPhrase(this.contendiente1));
                    console.log(this.contendiente2.getNombreLuchador()+': '+this.getPhrase(this.contendiente2));
                }
                ronda++;
                break;
            }
            console.log('Fin del combate!');
        }
        let vida_aux1 = vida1;
        let vida_aux2 = vida2;

        console.log('\nLa vida de los luchadores es: \n Luchador1('+this.contendiente1.getNombreLuchador()+'): '+vida_aux1+' y la vida del rival ('+this.contendiente2.getNombreLuchador()+'): '+vida_aux2);

        // No salgan números negativos
        
        if(vida1 <= 0){
            vida_aux1 = 0;
            console.log('\nGANADOR: '+this.contendiente2.getNombreLuchador());
            
        } if (vida2 <= 0){
            vida_aux2 = 0;
            console.log('\nGANADOR: '+this.contendiente1.getNombreLuchador());
        }
        return [vida_aux1, vida_aux2];
    }
}

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

console.log(combate1.start());
/*console.log(combate2.start());
console.log(combate3.start());
console.log(combate4.start());
console.log(combate5.start());
console.log(combate6.start());
console.log(combate7.start());
*/

