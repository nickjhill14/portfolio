import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe(Button, () => {
  it("calls the on click func when clicked", async () => {
    const onClickMock = vitest.fn();

    render(<Button onClick={onClickMock} text="" />);
    await userEvent.click(screen.getByRole("button"));

    expect(onClickMock).toHaveBeenCalled();
  });

  it("renders the button text", async () => {
    const text = "My Button";

    render(<Button onClick={() => undefined} text={text} />);

    expect(screen.getByRole("button", { name: text })).toBeInTheDocument();
  });
});
