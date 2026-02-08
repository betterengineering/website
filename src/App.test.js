import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header with site name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Mark Spicer/i);
  expect(nameElement).toBeInTheDocument();
});
