import { Jugador2 } from './jugador2';



describe('Jugador 2 Emit', () => {

    let jugador: Jugador2;

    beforeEach(() => jugador = new Jugador2());

    it('Debe de emitir un evento cuando recibe daño', () => {

        let nuevoVida = 0;

        jugador.vidaCambia.subscribe(vida => {
            nuevoVida = vida;
        });

        jugador.recibeDano(1000);

        expect(nuevoVida).toBe(0);

    });

    it('Debe de emitir un evento cuando recibe daño y sobrevivir si es menos de 100', () => {

        let nuevoVida = 0;

        jugador.vidaCambia.subscribe(vida => nuevoVida = vida);

        jugador.recibeDano(50);

        expect(nuevoVida).toBe(50);

    });


});

