'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = [
    {
      href: 'https://instagram.com/prosperxo',
      src: '/assets/icons/prosper-website-social-ig.svg',
      alt: 'Instagram',
    },
    {
      href: 'https://x.com/prosperxoxoxo',
      src: '/assets/icons/prosper-website-social-x.svg',
      alt: 'X',
    },
    {
      href: 'https://www.linkedin.com/company/prosper-xo/',
      src: '/assets/icons/prosper-website-social-linkedin.svg',
      alt: 'LinkedIn',
    },
    {
      href: 'https://youtube.com/@prosperxo',
      src: '/assets/icons/prosper-website-social-youtube.svg',
      alt: 'YouTube',
    },
    {
      href: 'https://facebook.com/prosperxo',
      src: '/assets/icons/prosper-website-social-fb.svg',
      alt: 'Facebook',
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header className={styles.header}>
      <div id="header-top-bottom-container" className="max-w-7xl mx-auto w-full">
        <div className={styles.headerTop}>
          <div className={styles.logoContainer}>
            <div className={styles.logoXo}>
              <Link href="/welcome">
                <Image
                  src="/assets/logos/prosper-website-logo.png"
                  alt="Prosper XO"
                  width={150}
                  height={150}
                  priority
                />
              </Link>
            </div>
            <button
              className={`${styles.hamburgerMenu} ${isMenuOpen ? styles.active : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <div className={styles.socialIcons}>
            {socialLinks.map((link) => (
              <a
                key={link.alt}
                href={link.href}
                aria-label={link.alt}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={link.src}
                  alt={link.alt}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>

        <nav className={styles.headerBottomNav}>
          <div className={styles.textNav}>
            <Link href="/why-prosper" className={`${styles.textNavLink} ${styles.textNavWhy}`}>
              WHY PROSPER
            </Link>
            <Link href="/team" className={`${styles.textNavLink} ${styles.textNavTeam}`}>
              TEAM
            </Link>
            <Link href="/ethos" className={`${styles.textNavLink} ${styles.textNavEthos}`}>
              ETHOS
            </Link>
            <Link href="/events" className={`${styles.textNavLink} ${styles.textNavEvents}`}>
              EVENTS
            </Link>
            <Link href="/get-involved" className={`${styles.textNavLink} ${styles.textNavInvolved}`}>
              GET INVOLVED
            </Link>
          </div>

          <div className={`${styles.secondaryNav} ${isMenuOpen ? styles.navOpen : ''}`} onClick={closeMenu}>
            <Link href="/why-prosper" className={styles.textNavWhy}>WHY PROSPER</Link>
            <Link href="/team" className={styles.textNavTeam}>TEAM</Link>
            <Link href="/ethos" className={styles.textNavEthos}>ETHOS</Link>
            <Link href="/events" className={styles.textNavEvents}>EVENTS</Link>
            <Link href="/get-involved" className={styles.textNavInvolved}>GET INVOLVED</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}