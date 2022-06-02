import { render, screen } from '@testing-library/react';
import ProjectsView from '../src/Components/ProjectsView/ProjectsView';

test('that projects view displays a blurb abt projects', () => {
  render(<ProjectsView />);
  const blabberingAbtProjects = screen.getByText(/This suite of projects/i);
  expect(blabberingAbtProjects).toBeInTheDocument();
});