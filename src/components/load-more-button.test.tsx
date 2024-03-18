import { render, fireEvent } from '@testing-library/react';
import LoadMoreButton from './load-more-button';

describe('LoadMoreButton component', () => {
  test('increments "end" state when clicked', () => {
    const setEndMock = jest.fn();
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const end = 5;

    const { getByText } = render(
      <LoadMoreButton setEnd={setEndMock} ids={ids} end={end} />
    );

    const loadMoreButton = getByText("Load More");
    fireEvent.click(loadMoreButton);

    expect(setEndMock).toHaveBeenCalledWith(end+5);
  });
});
