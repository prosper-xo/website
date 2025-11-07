import { render, screen } from '@testing-library/react';
import WelcomePage from '../page';

describe('Welcome Page', () => {
  it('renders the page with hero section', () => {
    render(<WelcomePage />);
    expect(screen.getByAltText('When Artists Prosper, Culture Thrives')).toBeInTheDocument();
  });

  it('renders the survey section with title', () => {
    render(<WelcomePage />);
    expect(screen.getByAltText(/In a system that's long profited/)).toBeInTheDocument();
  });

  it('renders letter buttons', () => {
    render(<WelcomePage />);
    const dearAustinButton = screen.getByRole('link', { name: /DEAR AUSTIN/i });
    const dearArtistsButton = screen.getByRole('link', { name: /DEAR ARTISTS/i });
    const dearGlobalButton = screen.getByRole('link', { name: /DEAR GLOBAL/i });
    
    expect(dearAustinButton).toBeInTheDocument();
    expect(dearArtistsButton).toBeInTheDocument();
    expect(dearGlobalButton).toBeInTheDocument();
  });

  it('renders survey buttons for different user types', () => {
    render(<WelcomePage />);
    const allLinks = screen.getAllByRole('link');
    const surveyLinks = allLinks.filter((link) => {
      const href = link.getAttribute('href');
      return href && href.includes('forms.gle');
    });
    
    expect(surveyLinks.length).toBeGreaterThanOrEqual(4);
    expect(screen.getByRole('link', { name: /^Artist$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^Venue$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^Brand$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^Fan$/i })).toBeInTheDocument();
  });

  it('renders share button', () => {
    render(<WelcomePage />);
    const shareButton = screen.getByRole('button', { name: /Share/i });
    expect(shareButton).toBeInTheDocument();
  });

  it('renders why artists section title', () => {
    render(<WelcomePage />);
    expect(screen.getByAltText(/Why Artists Don't Prosper/)).toBeInTheDocument();
  });

  it('renders poster links', () => {
    render(<WelcomePage />);
    const posterLinks = screen.getAllByRole('link', { name: /a letter from the founder|Press Inquiries|Join the Waitlist|Why Prosper/i });
    expect(posterLinks.length).toBeGreaterThanOrEqual(4);
  });

  it('renders main element', () => {
    const { container } = render(<WelcomePage />);
    const main = container.querySelector('main');
    expect(main).toBeInTheDocument();
  });
});