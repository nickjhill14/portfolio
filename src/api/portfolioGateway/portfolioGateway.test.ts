import { BasicInfo, CvInfo } from "../../domain";
import { buildBasicInfo, buildCvInfo } from "../../utils/builders";
import { getBasicInfo, getCvInfo } from "./portfolioGateway";

describe("portfolioGateway", () => {
  describe(getBasicInfo, () => {
    it("calls the basic info endpoint", async () => {
      const basicInfo = buildBasicInfo();

      fetchMock.mockResponse(JSON.stringify({ basicInfo }));

      const actualBasicInfo: BasicInfo = await getBasicInfo();

      expect(fetch).toHaveBeenCalledWith("/portfolioConfig/basic-info.json", {
        method: "GET",
      });
      expect(actualBasicInfo).toEqual({ basicInfo });
    });
  });

  describe(getCvInfo, () => {
    it("calls the CV info endpoint", async () => {
      const cvInfo: CvInfo = buildCvInfo();

      fetchMock.mockResponse(JSON.stringify({ cvInfo }));

      const actualCvInfo: CvInfo = await getCvInfo();

      expect(fetch).toHaveBeenCalledWith("/portfolioConfig/cv-info.json", {
        method: "GET",
      });
      expect(actualCvInfo).toEqual({ cvInfo });
    });
  });
});
