"use client"
import { render, screen } from '@testing-library/react';
import Header from './header';
import Textproduct from './textproduct';
test('renders learn react link', () => {
  render(<Header />);
  render(<Textproduct />);
  const linkElement = screen.getByText(/learn react/);
  expect(linkElement).toBeInTheDocument();
});
