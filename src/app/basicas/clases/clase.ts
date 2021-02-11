
export class Jugador {
    vida: number;

    constructor() {
        this.vida = 100;
    }

    recibeDano(dano: number) {
        if (dano >= this.vida) {
            this.vida = 0;
        } else {
            this.vida = this.vida - dano;
        }
        return this.vida
    }
}