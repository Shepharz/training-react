import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";
describe("Pruebas en 07-deses-arr", () => {
  test("Debe de retornar un string y un número", () => {
    const [letters, numbers] = retornaArreglo();
    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    //Comparando tipos
    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    //Comparando tipos con Jest
    expect( letters ).toEqual( expect.any( String ) );
    expect( numbers ).toEqual( expect.any ( Number ) );

  });
});