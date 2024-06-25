import { render, screen } from "@testing-library/react";
import { SkillsKey } from "./SkillsKey";

describe(SkillsKey, () => {
  it("renders the key", () => {
    render(<SkillsKey />);

    expect(
      screen.getByRole("heading", { name: "Key", level: 3 }),
    ).toBeInTheDocument();
    ["Language", "Framework", "Testing", "Infra", "Platform", "Other"].forEach(
      (key) => {
        expect(screen.getByText(key)).toBeInTheDocument();
      },
    );
  });
});
