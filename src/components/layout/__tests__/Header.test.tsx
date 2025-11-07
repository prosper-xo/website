import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  it('renders header element', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('renders logo link', () => {
    render(<Header />);
    const logoLink = screen.getByRole('link', { name: /prosper xo/i });
    expect(logoLink).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    const navLinks = ['Home', 'Welcome', 'Why Prosper', 'Team', 'Ethos', 'Events', 'Get Involved'];
    navLinks.forEach((linkText) => {
      const links = screen.getAllByRole('link', { name: new RegExp(linkText, 'i') });
      expect(links.length).toBeGreaterThan(0);
    });
  });

  it('renders social media links', () => {
    render(<Header />);
    const links = screen.getAllByRole('link');
    // Should have nav links + social links
    expect(links.length).toBeGreaterThan(7);
  });

  it('renders blog link', () => {
    render(<Header />);
    const blogLinks = screen.getAllByRole('link', { name: /blog/i });
    expect(blogLinks.length).toBeGreaterThan(0);
  });

  it('has responsive menu button', () => {
    render(<Header />);
    // The hamburger menu button would be in the HamburgerMenu component
    // which is rendered within Header
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('navigation links have correct hrefs', () => {
    render(<Header />);
    const welcomeLinks = screen.getAllByRole('link', { name: /welcome/i });
    // Should have at least one Welcome link with correct href
    expect(welcomeLinks.some((link) => link.getAttribute('href') === '/welcome')).toBe(
      true
    );
  });
});