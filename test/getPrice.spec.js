const main = require("../model/index.js");

describe("Get Price", () => {
  it("should be able to get price of product in html page", async () => {
    const price = await main.main();

    expect(price).toBe("R$474,05");
  });
});
