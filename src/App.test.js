"use client"
import { render, screen } from '@testing-library/react';
import Header from './header';
import Textproduct from './textproduct';
import Gift from './gift';
import Featureproduct from './teatureproduct';
import Person from './person';
import Byuget from './Byuget ';
import Top10 from './top10';
test('renders learn react link', () => {
  render(<Header />);
  render(<Textproduct />);
  render(<Gift />);
  render(<Featureproduct />);
  render(<Person />);
  render(<Byuget />);
  render(<Top10 />);
  const linkElement = screen.getByText(/learn react/);
  expect(linkElement).toBeInTheDocument();
});
