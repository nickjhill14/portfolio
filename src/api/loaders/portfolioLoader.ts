import { makeLoader } from "react-router-typesafe";
import { getBasicInfo, getCv } from "../gateways/portfolioGateway";

const getBasicInfoLoader = makeLoader(() => getBasicInfo());

const getCvLoader = makeLoader(() => getCv());

export { getBasicInfoLoader, getCvLoader };
