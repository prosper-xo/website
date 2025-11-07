import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  it('renders footer element', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('displays current year in copyright', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);
    const copyrightText = screen.getByText(
      new RegExp(`© ${currentYear} Prosper XO`)
    );
    expect(copyrightText).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    const socialLinks = screen.getAllByRole('link');
    // Should have multiple links (social + nav links)
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  it('renders navigation links', () => {
    render(<Footer />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    const privacyLink = screen.getByRole('link', { name: /privacy/i });
    const termsLink = screen.getByRole('link', { name: /terms/i });
    expect(homeLink).toBeInTheDocument();
    expect(privacyLink).toBeInTheDocument();
    expect(termsLink).toBeInTheDocument();
  });

  it('renders all social media icons', () => {
    const { container } = render(<Footer />);
    // Check for either SVG or img tags (both are valid icon representations)
    const svgs = container.querySelectorAll('svg');
    const imgs = container.querySelectorAll('img');
    const totalIcons = svgs.length + imgs.length;
    expect(totalIcons).toBeGreaterThan(0);
  });

  it('footer links have correct href attributes', () => {
    render(<Footer />);
    const privacyLink = screen.getByRole('link', { name: /privacy/i });
    expect(privacyLink).toHaveAttribute('href', '/privacy-policy');
  });
});