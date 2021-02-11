import { EventEmitter } from '@angular/core';


export class Jugador2 {

    vida: number;
    vidaCambia = new EventEmitter<number>();

    constructor() {
        this.vida = 100;
    }

    recibeDano(dano: number) {

        if (dano >= this.vida) {
            this.vida = 0;
        } else {
            this.vida = this.vida - dano;
        }

        this.vidaCambia.emit(this.vida);
    }

}
