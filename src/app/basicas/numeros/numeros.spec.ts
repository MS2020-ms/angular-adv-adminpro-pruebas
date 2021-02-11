import { incrementar } from './numeros';

describe('Prueba de numeros', () => {

    it('Debe de retorna 100, si el numero ingresado es mayor a 100', () => {
        const res = incrementar(300);
        expect(res).toBe(100);
    });

    it('Debe de retorna el numero + 1, si el numero ingresado es menor a 100', () => {
        const res = incrementar(50);
        expect(res).toBe(51);
    });
});