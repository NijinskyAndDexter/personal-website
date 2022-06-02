import LandingView from "../src/Components/LandingView/LandingView";

import { render, screen } from '@testing-library/react';

test('renders a name of a human', () => {
  render(<LandingView/>);
  const linkElement = screen.getByText(/Rebecca Kelley/i);
  expect(linkElement).toBeInTheDocument();
});