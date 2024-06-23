import { NextUIProvider } from "@nextui-org/react";
import type { Preview, StoryFn } from "@storybook/react";
import { initialize, mswLoader } from "storybook-msw-addon";
import "./../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ["Pages", "Features", "Components"],
      },
    },
    showPanel: true,
  },
};

const withNextUi = (StoryFn: StoryFn) => (
  <NextUIProvider>
    <StoryFn />
  </NextUIProvider>
);

initialize().then(() => console.log("MSW running"));

export const loaders = [mswLoader];

export const decorators = [withNextUi];

export default preview;
