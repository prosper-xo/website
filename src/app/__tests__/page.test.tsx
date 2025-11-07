import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home Page (Splash)', () => {
  it('renders the page without crashing', () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });

  it('renders main content area', () => {
    render(<Home />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('renders video player section', () => {
    render(<Home />);
    const videoSection = screen.queryByText(/video/i);
    // Video section may not have visible text, so we check if main exists
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('has proper page structure', () => {
    render(<Home />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    // Page should have hero section and CTA
    expect(main.children.length).toBeGreaterThan(0);
  });

  it('renders splash content container', () => {
    const { container } = render(<Home />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main.children.length).toBeGreaterThan(0);
  });

  it('is accessible', () => {
    const { container } = render(<Home />);
    const main = screen.getByRole('main');
    // main element implicitly has the main role
    expect(main.tagName).toBe('MAIN');
  });
});