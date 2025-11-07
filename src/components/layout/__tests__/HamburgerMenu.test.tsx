import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HamburgerMenu from '../HamburgerMenu';

describe('HamburgerMenu Component', () => {
  it('renders menu button', () => {
    render(<HamburgerMenu />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('starts with menu closed', () => {
    render(<HamburgerMenu />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens menu when button is clicked', () => {
    render(<HamburgerMenu />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  it('closes menu when button is clicked again', () => {
    render(<HamburgerMenu />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders navigation menu when open', () => {
    render(<HamburgerMenu />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBeGreaterThan(0);
  });

  it('closes menu on Escape key', () => {
    render(<HamburgerMenu />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders menu navigation links', () => {
    render(<HamburgerMenu />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });

  it('menu button has aria-label for accessibility', () => {
    render(<HamburgerMenu />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label');
  });
});