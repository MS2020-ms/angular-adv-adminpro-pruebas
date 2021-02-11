
import { Jugador } from "./clase";


describe('Pruebas de clase', () => {

    let jugador = new Jugador();

    // Ciclo de vida de las pruebas:
    // sino la const jugador va modificado su valor cada vez que pasa por un it()

    // beforeAll(()=>{ // antes de que se ejecuten todas - SOLO se ejecuta UNA vez
    // console.log('beforeAll');
    // })

    beforeEach(() => { // antes de cada prueba
        //console.log('beforeEach');
        //jugador.vida = 100;
        jugador = new Jugador();
    })

    // afterEach(()=>{ // despues de cada prueba
    // console.log('afterEach');
    // })

    // afterAll(()=>{ // cuando todas finalizan - SOLO se ejecuta UNA vez
    // console.log('afterAll');
    // jugador.vida = 100;
    // })


    it('Debe de retorna 80 de vida, si recibe dano de 20', () => {

        //const jugador = new Jugador();
        const resp = jugador.recibeDano(20);
        expect(resp).toBe(80);
    });

    it('Debe de retorna 50 de vida, si recibe dano de 50', () => {

        //const jugador = new Jugador();
        const resp = jugador.recibeDano(50);
        expect(resp).toBe(50);
    });

    it('Debe de retorna 0 de vida, si recibe dano de 100 o mas', () => {

        //const jugador = new Jugador();
        const resp = jugador.recibeDano(100);
        expect(resp).toBe(0);
    });
});