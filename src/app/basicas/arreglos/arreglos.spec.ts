import { obtenerRobots } from './arreglos';

describe('Prueba de Arrays', () => {

    it('Debe de retornar 3 Robots', () => {

        const res = obtenerRobots();
        //expect(res.length).toBe(3);
        expect(res.length).toBeGreaterThanOrEqual(3); //que sea mayor o igual a..
    });

    it('Debe de existir C3PO y R2D2', () => {

        const res = obtenerRobots();
        expect(res).toContain('C3PO');
        expect(res).toContain('R2D2');
    });
});