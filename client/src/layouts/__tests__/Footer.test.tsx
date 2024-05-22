import { render, screen } from '@testing-library/react';
import Footer from '@layouts/Footer';

describe('Footer', () => {
  test('renders corectly', () => {
    render(<Footer />);

    const element = screen.getByTestId('footer');
    expect(element).toBeInTheDocument();
  });

  test('title and sibtitle are visible', () => {
    render(<Footer />);

    const element = screen.getByTestId('footer');
    expect(element).toBeInTheDocument();
  });
});
