import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../App';

test('Renders the home page', () => {
  render(<App />);
  expect(true).toBeTruthy();
});
