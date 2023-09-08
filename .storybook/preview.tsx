import type { Preview, StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

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
        order: ["Pages", "Sections", "Components"],
      },
    },
  },
};

function withRouter(StoryFn: StoryFn) {
  return (
    <MemoryRouter>
      <StoryFn />
    </MemoryRouter>
  );
}

const decorators = [withRouter];

export default preview;
export { decorators };
