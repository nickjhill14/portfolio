import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { downloadJson } from "../../utils/helpers/helpers";
import { ConfigPreview } from "./ConfigPreview";

vitest.mock("../../utils/helpers/helpers");

describe(ConfigPreview, () => {
  it("renders the preview", () => {
    render(<ConfigPreview json="" fileName="" />);

    expect(
      screen.getByRole("heading", { name: "Preview" }),
    ).toBeInTheDocument();
  });

  it("displays the JSON provided in the preview window", async () => {
    const json = { key1: "value1", key2: "value2" };
    const jsonAsString = JSON.stringify(json);

    render(<ConfigPreview json={jsonAsString} fileName="" />);

    expect(
      screen.getByText(`"key1":"${json.key1}"`, { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`"key2":"${json.key2}"`, { exact: false }),
    ).toBeInTheDocument();
  });

  it("copies the preview JSON to the clipboard when the clipboard icon has been clicked", async () => {
    const json = JSON.stringify({ key1: "value1", key2: "value2" });

    userEvent.setup();
    render(<ConfigPreview json={json} fileName="" />);
    await userEvent.click(
      screen.getByRole("button", { name: "Copy to clipboard" }),
    );
    const clipboardText = await navigator.clipboard.readText();

    expect(clipboardText).toEqual(json);
    expect(screen.getByText("Copied to clipboard")).toBeInTheDocument();
  });

  it("removes the copied to clipboard tooltip on click away", async () => {
    render(<ConfigPreview json="" fileName="" />);
    await userEvent.click(
      screen.getByRole("button", { name: "Copy to clipboard" }),
    );
    await userEvent.click(screen.getByRole("heading", { name: "Preview" }));

    await waitFor(() => {
      expect(screen.queryByText("Copied to clipboard")).not.toBeInTheDocument();
    });
  });

  it("downloads the JSON when the download button has been clicked", async () => {
    const json = JSON.stringify({ key1: "value1", key2: "value2" });
    const fileName = "test";

    vitest.mocked(downloadJson);

    render(<ConfigPreview json={json} fileName={fileName} />);
    await userEvent.click(screen.getByRole("button", { name: "Download" }));

    expect(downloadJson).toHaveBeenCalledWith(fileName, json);
  });
});
