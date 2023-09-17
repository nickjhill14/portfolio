import { downloadJson, upperCaseFirstChar } from "./helpers";

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

  describe(downloadJson, () => {
    it("downloads the file", () => {
      const fileName = "test";
      const json = JSON.stringify({});
      const link = {
        href: "",
        download: vitest.fn(),
        click: vitest.fn(),
      };

      vitest
        .spyOn(document, "createElement")
        .mockImplementation(() => link as unknown as HTMLElement);

      downloadJson(fileName, json);

      expect(link.download).toEqual(`${fileName}.json`);
      expect(link.href).toEqual(
        `data:text/json;charset=utf-8,${encodeURIComponent(json)}`,
      );
      expect(link.click).toHaveBeenCalled();
    });
  });
});
