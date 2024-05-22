import '@testing-library/jest-dom';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RidesList from '@components/RidesList';

describe('Rides list', () => {
  test('renders correctly', () => {
    render(
      <MemoryRouter>
        <RidesList />
      </MemoryRouter>
    );

    expect(screen.getByTestId('rides-list')).toBeInTheDocument();
  });

  test('items are visible', () => {
    render(
      <MemoryRouter>
        <RidesList />
      </MemoryRouter>
    );

    const element = screen.getAllByTestId('ride-card');
    expect(element.length).toBeGreaterThan(0);
  });

  test('single ride details are visible', async () => {
    render(
      <MemoryRouter>
        <RidesList />
      </MemoryRouter>
    );

    waitFor(() => {
      expect(screen.queryByTestId('single-ride-page')).not.toBeInTheDocument();
    });

    const button = await screen.findAllByText('Check details');
    expect(button.length).toBeGreaterThan(0);

    act(() => {
      button.forEach((button) => fireEvent.click(button));
    });

    waitFor(() => {
      expect(screen.getByTestId('single-ride-page')).toBeInTheDocument();
    });
  });
});
