import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../not-found';

describe('404 Not Found Page', () => {
  it('renders the page without crashing', () => {
    const { container } = render(<NotFound />);
    expect(container).toBeInTheDocument();
  });

  it('displays 404 error message', () => {
    render(<NotFound />);
    const heading = screen.getByText(/404/i);
    expect(heading).toBeInTheDocument();
  });

  it('displays helpful text', () => {
    render(<NotFound />);
    const text = screen.getByText(/not found/i);
    expect(text).toBeInTheDocument();
  });

  it('provides a link to home page', () => {
    render(<NotFound />);
    const homeLink = screen.getByRole('link', { name: /home|back/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('renders main content area', () => {
    render(<NotFound />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('is accessible', () => {
    const { container } = render(<NotFound />);
    const main = screen.getByRole('main');
    expect(main.tagName).toBe('MAIN');
  });
});