import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
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
    {
      href: 'https://facebook.com/prosperxoxo',
      src: '/assets/icons/prosper-website-social-fb.svg',
      alt: 'Facebook',
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>WE WANT TO HEAR FROM YOU</p>

        <div className={styles.footerContact}>
          <div className={styles.footerColumn}>
            <p className={styles.pressInquiries}>
              PRESS INQUIRIES{' '}
              <a href="mailto:press@prosperxo.com">press@prosperxo.com</a>
            </p>
          </div>
          <div className={styles.footerColumn}>
            <p className={styles.getInvolved}>
              GET INVOLVED{' '}
              <a href="mailto:info@prosperxo.com">info@prosperxo.com</a>
            </p>
          </div>
        </div>

        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <a
              key={link.alt}
              href={link.href}
              aria-label={link.alt}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Image src={link.src} alt={link.alt} width={24} height={24} />
            </a>
          ))}
        </div>

        <div className={styles.footerLogo}>
          <Image
            src="/assets/logos/prosperxo-website-logo-melty-rainbow.png"
            alt="Prosper XO"
            width={150}
            height={50}
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </div>
    </footer>
  );
}