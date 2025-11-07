import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://instagram.com/prosperxo',
      src: '/assets/icons/prosper-website-social-ig-footer-ro.svg',
      alt: 'Instagram',
    },
    {
      href: 'https://www.tiktok.com/@prosper_xo_',
      src: '/assets/icons/prosper-website-social-tiktok.svg',
      alt: 'TikTok',
    },
    {
      href: 'https://x.com/prosperxoxoxo',
      src: '/assets/icons/prosper-website-social-x-footer-ro.svg',
      alt: 'X',
    },
    {
      href: 'https://www.linkedin.com/company/prosper-xo/',
      src: '/assets/icons/prosper-website-social-linkedin-footer-ro.svg',
      alt: 'LinkedIn',
    },
    {
      href: 'https://youtube.com/@prosperxo',
      src: '/assets/icons/prosper-website-social-youtube-footer-ro.svg',
      alt: 'YouTube',
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
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

        <nav className={styles.footerNav}>
          <Link href="/">Home</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
          <Link href="/code-of-conduct">Code of Conduct</Link>
        </nav>

        <div className={styles.copyright}>
          <p>&copy; {currentYear} Prosper XO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}