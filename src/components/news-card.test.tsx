import React from 'react';
import { render } from '@testing-library/react';
import NewsCard from './news-card';

describe('NewsCard component', () => {
  const mockNews = {
    title: 'Test News Title',
    time: 1616072400, // Assuming timestamp in seconds
    score: '10',
    url: 'https://example.com/test-news',
  };

  it('renders news card with correct content', () => {
    const { getByText, getByRole } = render(<NewsCard news={mockNews} />);

    // Assert title
    expect(getByText(mockNews.title)).toBeInTheDocument();

    // Assert timestamp
    const expectedTimestampRegex = /\d{1,2}\/\d{1,2}\/\d{4}, \d{1,2}:\d{2}:\d{2} (AM|PM)/;
    expect(getByText(expectedTimestampRegex)).toBeInTheDocument();

    // Assert score
    const expectedScoreRegex = new RegExp(`${mockNews.score} Comments`);
    expect(getByText(expectedScoreRegex)).toBeInTheDocument();
    // Assert link
    const linkElement = getByRole('link', { name: /test news title/i });
    expect(linkElement).toHaveAttribute('href', mockNews.url);
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
