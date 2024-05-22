import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '@layouts/Navbar';
import { navigationLogoText } from '@data/constants';

describe('home page component', () => {
  test('Navbar renders correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.getByTestId('navigation-bar')).toHaveTextContent(navigationLogoText);
    });
  });
});
