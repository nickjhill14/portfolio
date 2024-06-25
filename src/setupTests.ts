import "@testing-library/jest-dom";
import { vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";

const fetchMocker = createFetchMock(vi);

const intersectionObserverMock = () => ({
  observe: () => null,
});

window.IntersectionObserver = vitest
  .fn()
  .mockImplementation(intersectionObserverMock);

fetchMocker.enableMocks();
