import { getBasicInfoLoader, getCvLoader } from "./portfolioLoader";

vitest.mock("../gateways/portfolioGateway");

describe("portfolioLoader", () => {
  it("returns a deferred basic info loader", async () => {
    getBasicInfoLoader();
  });

  it("returns a deferred CV loader", async () => {
    getCvLoader();
  });
});
