"use client"
import { render, screen } from '@testing-library/react';
import Header from './header';
import Textproduct from './textproduct';
import Gift from './gift';
import Featureproduct from './teatureproduct';
test('renders learn react link', () => {
  render(<Header />);
  render(<Textproduct />);
  render(<Gift />);
  render(<Featureproduct />)
  const linkElement = screen.getByText(/learn react/);
  expect(linkElement).toBeInTheDocument();
});
