import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Register, { registerTitle } from '@pages/Register';

describe('Register', () => {
  test('banner renders correctly', async () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByText(registerTitle)).toBeInTheDocument();
    });
  });

  test('form renders correctly', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByTestId('register-form')).toBeInTheDocument();
    });
  });
});
