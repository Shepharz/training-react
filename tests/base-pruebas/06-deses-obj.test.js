import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Prueba en 06-destructuracion", () => {
  test("usContext debe de retonar un objeto", () => {
    const clave = '500';
    const edad = 30;
    const objContext = {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };
    const context = usContext({clave, edad});
    expect(objContext).toStrictEqual(context);
  });
});
