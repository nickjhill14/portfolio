import { defer, makeLoader } from "react-router-typesafe";
import { getBasicInfo, getCv } from "../gateways/portfolioGateway";

const getBasicInfoLoader = makeLoader(() => {
  const basicInfo = getBasicInfo();

  return defer({ basicInfo });
});

const getCvLoader = makeLoader(() => {
  const cv = getCv();

  return defer({ cv });
});

export { getBasicInfoLoader, getCvLoader };
