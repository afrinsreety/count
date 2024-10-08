import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Result', () => {
  render(<App />);
  const linkElement = screen.getByText(/Result/i);
  expect(linkElement).toBeInTheDocument();
});
