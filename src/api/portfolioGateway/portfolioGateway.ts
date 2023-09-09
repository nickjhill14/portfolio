import { BasicInfo, CvInfo } from "../../domain";

async function getBasicInfo(): Promise<BasicInfo> {
  const res: Response = await fetch("/portfolioConfig/basic-info.json", {
    method: "GET",
  });
  const body = await res.json();

  return body;
}

async function getCvInfo(): Promise<CvInfo> {
  const res: Response = await fetch("/portfolioConfig/cv-info.json", {
    method: "GET",
  });
  const body = await res.json();

  return body;
}

export { getBasicInfo, getCvInfo };
