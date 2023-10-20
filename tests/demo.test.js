describe("Pruebas realizadas al componente <DemoComponent/>", () => {
  test("Esta prueba no debe fallar", () => {
    // Partes de la pruebas:
    //1. Inicialización.
    const messageOne = "Hola mundo";
    //2. Estímulo.
    const messageTwo = messageOne.trim();
    //3. Observar el comportamiento, el cual debe ser el esperado.
    expect(messageOne).toBe(messageTwo);
  });
});
