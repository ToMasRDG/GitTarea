describe("operaciones aritméticas", function () {
    it("adición", function () {
        var suma = 1 + 3;
        expect(suma).toEqual(4);
    });

    it("resta", function () {
        var resta = 3 - 1;  // Corregido de 2 + 1 a 3 - 1
        expect(resta).toBeLessThan(4);
    });

    it("multiplicación", function () {
        var multiplicacion = 2 * 10;
        expect(multiplicacion).toBeGreaterThan(19);  // Corregido de 9 a 19 para tener sentido
    });

    
}); F