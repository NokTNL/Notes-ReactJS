import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting", () => {
  it(`shows 'It's good to see you' intially`, () => {
    render(<Greeting />);

    expect(screen.getByText(/It's good to see you/)).toBeInTheDocument();
  });
  it("changes text when button clicked", async () => {
    // From user-event v14, it is recommended to use new instance of user in every test
    const user = userEvent.setup();
    render(<Greeting />);

    // Use getByRole to specificaly select the button. Full list of aria roles: https://www.w3.org/TR/html-aria/#docconformance
    // To simulate clicking a button by the user, use the user-event library: https://testing-library.com/docs/user-event/intro
    await user.click(screen.getByRole("button", { name: /Change Text/ }));

    expect(screen.getByText(/Changed!/)).toBeInTheDocument();
    expect(screen.queryByText(/It's good to see you/)).toBeNull();
  });
});
