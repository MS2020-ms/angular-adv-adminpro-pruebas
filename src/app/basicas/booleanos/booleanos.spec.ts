import { usuarioIngresado } from './booleanos';

describe('Prueba de Booleanos', () => {

    it('Debe de regresar true', () => {

        const res = usuarioIngresado();
        expect(res).toBeTruthy(); //que retorna un true
        //expect(res).toBeFalsy(); //que retorna un false
        //expect(res).not.toBeTruthy(); //que retorna un false
    });

});