const { categorieAge } = require("../src/index");

describe("En tant que développeur", () => {
  describe("je crée une fonction qui retourne", () => {
    test("la categorie de l'age passé en paramètre", () => {
      expect(categorieAge(7)).toEqual("Poussin");
      expect(categorieAge(9)).toEqual("Pupille");
      expect(categorieAge(11)).toEqual("Minime");
      expect(categorieAge(13)).toEqual("Cadet");
    });
  });
});
