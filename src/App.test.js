import { render, screen } from '@testing-library/react';
import App from './App';
import AboutView from './Components/AboutView/AboutView';
import ProjectsView from './Components/ProjectsView/ProjectsView';



test('renders a name of a human', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rebecca Kelley/i);
  expect(linkElement).toBeInTheDocument();
});


test('that personal website displays information abt professional skills', () => {
  render(<AboutView />);
  const braggingAbtSkills = screen.getByText(/software skills/i);
  expect(braggingAbtSkills).toBeInTheDocument();
});

test('that projects view displays a blurb abt projects', () => {
  render(<ProjectsView />);
  const blabberingAbtProjects = screen.getByText(/This suite of projects/i);
  expect(blabberingAbtProjects).toBeInTheDocument();
});