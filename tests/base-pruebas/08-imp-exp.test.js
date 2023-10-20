import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas a 08-imp-exp", () => {
  test("getHeroeById debe de retonar heroes por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe de retornar undefenined si no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  test("getHeroeByOwner debe de retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const herosOwners = getHeroesByOwner(owner);
    expect(herosOwners).toEqual([
      { id: 1, name: "Batman", owner },
      { id: 3, name: "Superman", owner },
      { id: 4, name: "Flash", owner },
    ]);
  });

  test("getHeroeByOwner  debe de retornar un arreglo con una longitud de 3 para DC", () => {
    const owner = "DC";
    const herosOwners = getHeroesByOwner(owner);
    expect(herosOwners.length).toBe(3);
  });

  test("getHeroeByOwner debe de retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const herosOwners = getHeroesByOwner(owner);
    console.log(herosOwners)
    expect(herosOwners).toEqual([
      { id: 2, name: "Spiderman", owner },
      { id: 5, name: "Wolverine", owner },
    ]);
  });

  test("getHeroeByOwner  debe de retornar un arreglo con una longitud de 3 para Marvel", () => {
    const owner = "Marvel";
    const herosOwners = getHeroesByOwner(owner);
    expect(herosOwners.length).toBe(2);
  });
});
