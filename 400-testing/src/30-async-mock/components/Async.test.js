const { render, screen } = require("@testing-library/react");
const { default: Async } = require("./Async.js");

describe(`Async`, () => {
  it(`renders posts if request is succesful`, async () => {
    // jest.fn stands for "function" --> returns a new instance of mock function
    window.fetch = jest.fn();
    // This allows you to mock what is returned by the fn; each `mockResolvedValueOnce` corresponds to the return value of ONE call, but you can chain many `mockResolvedValueOnce` together
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: null }],
    });

    render(<Async />);

    // Use findBy* queries for elements that will only show up asynchronously; = getBy + waitFor
    // Default timeout is 1000ms, you can change this in the third parameter (waitForOptions)
    // Need to use await as it returns a promise
    const listItemsArr = await screen.findAllByRole("listitem");
    expect(listItemsArr.length).toBeGreaterThan(0);
  });
});
