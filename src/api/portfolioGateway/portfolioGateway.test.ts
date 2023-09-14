import { buildBasicInfo, buildCv } from "../../utils/builders";
import { getBasicInfo, getCv } from "./portfolioGateway";

describe("portfolioGateway", () => {
  describe(getBasicInfo, () => {
    it("calls the basic info endpoint", async () => {
      const basicInfo = buildBasicInfo();

      fetchMock.mockResponse(JSON.stringify({ basicInfo }));

      const actualBasicInfo = await getBasicInfo();

      expect(fetch).toHaveBeenCalledWith("/portfolioConfig/basic-info.json", {
        method: "GET",
      });
      expect(actualBasicInfo).toEqual({ basicInfo });
    });
  });

  describe(getCv, () => {
    it("calls the CV endpoint", async () => {
      const cv = buildCv();

      fetchMock.mockResponse(JSON.stringify({ cv }));

      const actualCv = await getCv();

      expect(fetch).toHaveBeenCalledWith("/portfolioConfig/cv.json", {
        method: "GET",
      });
      expect(actualCv).toEqual({ cv });
    });
  });
});
