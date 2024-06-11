import { BasicInfo } from "../../domain/basicInfo";
import { Cv } from "../../domain/cv";

export const getBasicInfo = async (): Promise<BasicInfo> => {
  const res: Response = await fetch("/portfolioConfig/basic-info.json", {
    method: "GET"
  });

  return await res.json();
};

export const getCv = async (): Promise<Cv> => {
  const res: Response = await fetch("/portfolioConfig/cv.json", {
    method: "GET"
  });

  return await res.json();
};
