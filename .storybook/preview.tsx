import type { Preview, StoryFn } from "@storybook/react";
import { initialize, mswLoader } from "storybook-msw-addon";
import { ThemeProvider } from "../src/contexts/themeContext/ThemeContext";

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

function withTheme(StoryFn: StoryFn) {
  return (
    <ThemeProvider>
      <StoryFn />
    </ThemeProvider>
  );
}

initialize();

export default preview;
export const loaders = [mswLoader];
export const decorators = [withTheme];
