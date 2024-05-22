import { render, screen, waitFor } from '@testing-library/react';
import Banner from '@layouts/Banner';

describe('Banner', () => {
  test('renders correctly', () => {
    render(<Banner />);

    waitFor(() => {
      expect(screen.getByTestId('page-banner')).toBeInTheDocument();
    });
  });

  test('title and subtitle are visible', () => {
    const title = 'Test Title';
    const subtitle = 'Test Subtitle';

    render(<Banner title={title} subtitle={subtitle} />);

    waitFor(() => {
      expect(screen.getByTestId('page-banner')).toHaveTextContent(title);
    });

    waitFor(() => {
      expect(screen.getByTestId('page-banner')).toHaveTextContent(subtitle);
    });
  });
});
