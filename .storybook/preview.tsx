import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "storybook-msw-addon";

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
        order: ["Pages", "Components"],
      },
    },
    showPanel: true,
  },
};

initialize();

export default preview;
export const loaders = [mswLoader];
