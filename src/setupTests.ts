import "@testing-library/jest-dom";
import { vi } from "vitest";
import "vitest-canvas-mock";
import createFetchMock from "vitest-fetch-mock";

vitest.mock("@lordicon/react");

const fetchMocker = createFetchMock(vi);

const intersectionObserverMock = () => ({
  observe: () => null,
});

window.IntersectionObserver = vitest
  .fn()
  .mockImplementation(intersectionObserverMock);

fetchMocker.enableMocks();
