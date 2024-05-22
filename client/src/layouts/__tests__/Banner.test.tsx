import { render, screen } from '@testing-library/react';
import Banner from '@layouts/Banner';

describe('Banner', () => {
  test('renders corectly', () => {
    render(<Banner />);

    const element = screen.getByTestId('page-banner');
    expect(element).toBeInTheDocument();
  });

  test('title and sibtitle are visible', () => {
    const title = 'Test Title';
    const subtitle = 'Test Subtitle';

    render(<Banner title={title} subtitle={subtitle} />);

    const element = screen.getByTestId('page-banner');
    expect(element).toHaveTextContent(title);
    expect(element).toHaveTextContent(subtitle);
  });
});
