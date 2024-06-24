import { ReactElement } from "react";
import { type MockedFunction } from "vitest";

type Component<Props> = (props: Props) => ReactElement | null | undefined;

export const mockComponent = <Props,>(
  component: Component<Props>,
): MockedFunction<Component<Props>> =>
  vitest.mocked(component).mockReturnValue(<div>{component.name}</div>);

export const getProps = <Props,>(
  component: Component<Props>,
): { calls: Props[]; lastCall: Props } => {
  const { lastCall, calls } = vitest.mocked(component).mock;

  if (!lastCall) {
    throw new Error(`${component.name} was not called`);
  }

  return { calls: calls.map((call) => call[0]), lastCall: lastCall[0] };
};
