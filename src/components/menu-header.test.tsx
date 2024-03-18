import { fireEvent, render } from "@testing-library/react";
import MenuHeader from "./menu-header";

describe("MenuHeader component", () => {
  test("calls handleChange function with appropriate arguments when Past button is clicked", () => {
    const setApiMock = jest.fn();
    const setStartMock = jest.fn();
    const setEndMock = jest.fn();

    const { getByText } = render(
      <MenuHeader
        setApi={setApiMock}
        setStart={setStartMock}
        setEnd={setEndMock}
      />
    );

    const newButton = getByText("New");
    const pastButton = getByText("Past");

    fireEvent.click(newButton);

    expect(setApiMock).toHaveBeenCalledWith('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
    expect(setStartMock).toHaveBeenCalledWith(0);
    expect(setEndMock).toHaveBeenCalledWith(5);

    fireEvent.click(pastButton);
    expect(setApiMock).toHaveBeenCalledWith('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
  });
});
