import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Prueba a 09-Promesas", () => {
  test("getHeroesByIdAsync debe de retornar un heroe", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });

  });

  test('getHeroesByIdAsync debe de retornar un mensaje de error si no existe heroe con ID', (done) => { 
    const id = 100;

    getHeroeByIdAsync(id).catch(error=>{
        expect(error).toBe('No se pudo encontrar el héroe con el ID: ' + id);
        done();
    });

   })

});
