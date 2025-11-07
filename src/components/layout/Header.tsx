'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import styles from './Header.module.css';

export default function Header() {
  const socialLinks = [
    {
      href: 'https://instagram.com/prosperxo',
      src: '/assets/icons/prosper-website-social-ig.svg',
      alt: 'Instagram',
    },
    {
      href: 'https://www.tiktok.com/@prosper_xo_',
      src: '/assets/icons/prosper-website-social-tiktok.svg',
      alt: 'TikTok',
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
      href: 'https://facebook.com/prosperxoxo',
      src: '/assets/icons/prosper-website-social-fb.svg',
      alt: 'Facebook',
    },
  ];

  return (
    <header className={styles.header}>
      <div id="header-top-bottom-container">
        <div className={styles.headerTop}>
          <div className={styles.logoContainer}>
            <div className={styles.logoXo}>
              <Link href="/">
                <Image
                  src="/assets/logos/prosper-website-logo.png"
                  alt="Prosper XO"
                  width={50}
                  height={50}
                  priority
                />
              </Link>
            </div>
            <HamburgerMenu />
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
            <Link href="/" className={styles.textNavLink}>
              HOME
            </Link>
            <Link href="/welcome" className={styles.textNavLink}>
              WELCOME
            </Link>
            <Link href="/why-prosper" className={styles.textNavLink}>
              WHY PROSPER
            </Link>
            <Link href="/team" className={styles.textNavLink}>
              TEAM
            </Link>
            <Link href="/ethos" className={styles.textNavLink}>
              ETHOS
            </Link>
            <Link href="/events" className={styles.textNavLink}>
              EVENTS
            </Link>
            <Link href="/get-involved" className={styles.textNavLink}>
              GET INVOLVED
            </Link>
            <Link href="/blog" className={styles.textNavLink}>
              BLOG
            </Link>
          </div>

          <div className={styles.secondaryNav}>
            <Link href="/">HOME</Link>
            <Link href="/welcome">WELCOME</Link>
            <Link href="/why-prosper">WHY PROSPER</Link>
            <Link href="/team">TEAM</Link>
            <Link href="/ethos">ETHOS</Link>
            <Link href="/events">EVENTS</Link>
            <Link href="/get-involved">GET INVOLVED</Link>
            <Link href="/blog">BLOG</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}