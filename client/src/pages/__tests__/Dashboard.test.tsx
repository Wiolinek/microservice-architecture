import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '@pages/Dashboard';

describe('Dashboard', () => {
  test('renders correctly', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByTestId('dashboard-wrapper')).toBeInTheDocument();
    });
  });

  test('side menu renders correctly', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByTestId('dashboard-side-menu')).toBeInTheDocument();
    });
  });
});
