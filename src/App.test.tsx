import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import fetchMock from 'jest-fetch-mock';

jest.mock("./components/menu-header");
jest.mock("./components/site-name-header");
jest.mock("./components/news-card");
jest.mock("./components/load-more-button");
jest.mock("./components/footer-comp");

describe("App component", () => {
  test("renders basic elements", () => {
    render(<App />);
  });

  test("fetches IDs on initial render", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    });

    render(<App />);

    await Promise.resolve();

    expect(global.fetch).toHaveBeenCalledWith(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
  });

  test('loads more news when load more button is clicked', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([1, 2, 3, 4, 5]));
    fetchMock.mockResponseOnce(JSON.stringify([6, 7, 8, 9, 10]));
    })
});
