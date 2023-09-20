import { BasicInfo } from "../../domain/basicInfo";
import { Cv } from "../../domain/cv";

async function getBasicInfo(): Promise<BasicInfo> {
  const res: Response = await fetch("/portfolioConfig/basic-info.json", {
    method: "GET",
  });
  const body = await res.json();

  return body;
}

async function getCv(): Promise<Cv> {
  const res: Response = await fetch("/portfolioConfig/cv.json", {
    method: "GET",
  });
  const body = await res.json();

  return body;
}

export { getBasicInfo, getCv };
