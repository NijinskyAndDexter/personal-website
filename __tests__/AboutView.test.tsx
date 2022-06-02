import { render, screen } from '@testing-library/react';
import AboutView from '../src/Components/AboutView/AboutView';

test('that personal website displays information abt professional skills', () => {
  render(<AboutView />);
  const braggingAbtSkills = screen.getByText(/software skills/i);
  expect(braggingAbtSkills).toBeInTheDocument();
});