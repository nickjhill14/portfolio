import { buildBasicInfo, buildCv } from "../../utils/builders";
import { getBasicInfo, getCv } from "../gateways/portfolioGateway";
import { getBasicInfoLoader, getCvLoader } from "./portfolioLoader";

vitest.mock("../gateways/portfolioGateway");

describe("portfolioLoader", () => {
  it("returns a deferred basic info loader", async () => {
    const basicInfo = buildBasicInfo();

    vitest.mocked(getBasicInfo).mockResolvedValue(basicInfo);

    const deferredBasicInfo = getBasicInfoLoader();
    const resolvedBasicInfo = await deferredBasicInfo.data.basicInfo;

    expect(getBasicInfo).toHaveBeenCalled();
    expect(resolvedBasicInfo).toEqual(basicInfo);
  });

  it("returns a deferred CV loader", async () => {
    const cv = buildCv();

    vitest.mocked(getCv).mockResolvedValue(cv);

    const deferredCv = getCvLoader();
    const resolvedCv = await deferredCv.data.cv;

    expect(getCv).toHaveBeenCalled();
    expect(resolvedCv).toEqual(cv);
  });
});
