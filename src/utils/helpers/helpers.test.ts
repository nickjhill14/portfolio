import { upperCaseFirstChar } from "./helpers";

describe("helpers", () => {
  describe(upperCaseFirstChar, () => {
    it("returns an empty string when an empty string is passed", () => {
      expect(upperCaseFirstChar("")).toEqual("");
    });

    it("returns the first letter upper-cased if the length is 1", () => {
      const lowerCasedWord = "t";
      const upperCasedWord = "T";

      const transformedWord = upperCaseFirstChar(lowerCasedWord);

      expect(transformedWord).toEqual(upperCasedWord);
    });

    it("upper-cases the first char of a word", () => {
      const lowerCasedFirstLetterWord = "test";
      const upperCasedFirstLetterWord = "Test";

      const transformedWord = upperCaseFirstChar(lowerCasedFirstLetterWord);

      expect(transformedWord).toEqual(upperCasedFirstLetterWord);
    });
  });
});
