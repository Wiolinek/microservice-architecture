import { render, screen, waitFor } from '@testing-library/react';
import { /*Router,*/ MemoryRouter /*, Router, Route*/ } from 'react-router-dom';
import CustomMenu from '@components/Menu';

describe('Menu', () => {
  test('renders correctly', () => {
    render(
      <MemoryRouter>
        <CustomMenu />
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByTestId('menu')).toBeInTheDocument();
    });
  });

  test('menu items are visible', () => {
    render(
      <MemoryRouter>
        <CustomMenu />
      </MemoryRouter>
    );

    const element = screen.getByTestId('menu');
    expect(element).toHaveTextContent('Register');
    expect(element).toHaveTextContent('Rides');
    expect(element).toHaveTextContent('Add ride');
  });
});
