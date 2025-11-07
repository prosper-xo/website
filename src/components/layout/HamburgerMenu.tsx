'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './HamburgerMenu.module.css';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <button
        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`${styles.secondaryNav} ${isOpen ? styles.navOpen : ''}`}
        onClick={closeMenu}
      >
        <Link href="/why-prosper">WHY PROSPER</Link>
        <Link href="/team">TEAM</Link>
        <Link href="/ethos">ETHOS</Link>
        <Link href="/events">EVENTS</Link>
        <Link href="/get-involved">GET INVOLVED</Link>
      </nav>

      {isOpen && (
        <div className={styles.overlay} onClick={closeMenu} />
      )}
    </>
  );
}