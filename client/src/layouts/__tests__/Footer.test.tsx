import { render, screen } from '@testing-library/react';
import Footer from '@layouts/Footer';

describe('Footer', () => {
  test('renders correctly', () => {
    render(<Footer />);

    const element = screen.getByTestId('footer');
    expect(element).toBeInTheDocument();
  });

  test('text content is visible', () => {
    render(<Footer />);

    const element = screen.getByTestId('footer');
    expect(element).toHaveTextContent('All Rights Reserved');
  });
});
