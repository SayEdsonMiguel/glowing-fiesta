const calculadora = require("../model/calculadora");
const { soma } = calculadora;

describe("Calculadora", () => {
  it("should be able to some 5+10", () => {
    const result = soma(5, 10);

    expect(result).toBe(15);
  });
});
