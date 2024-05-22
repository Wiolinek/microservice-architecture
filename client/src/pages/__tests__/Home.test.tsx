import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home, { homeTitle } from '@pages/Home';

describe('Home', () => {
  test('banner renders correctly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByText(homeTitle)).toBeInTheDocument();
    });
  });

  test('rides section renders correctly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByTestId('home-page-rides')).toBeInTheDocument();
    });
  });

  test('drawer button renders correctly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByTestId('filters-drawer')).toBeInTheDocument();
    });
  });
});
