import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Get Involved | Prosper XO',
  description:
    'Get involved with Prosper XO, the artist-first technology platform.',
  openGraph: {
    title: 'Prosper XO – Get Involved',
    description:
      'Get involved with Prosper XO, the artist-first technology platform.',
    url: 'https://www.prosperxo.com/get-involved',
    siteName: 'Prosper XO',
    images: [
      {
        url: '/assets/thumbnail/prosper-website-thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Prosper XO',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prosper XO – Get Involved',
    description:
      'Get involved with Prosper XO, the artist-first technology platform.',
    images: ['/assets/thumbnail/prosper-website-thumbnail.jpg'],
  },
};

export default function GetInvolvedPage() {
  return (
    <>
      {/* Newsletter Section */}
        <div className={styles.newsletterContainer}>
          <h1 className={styles.getInvolvedTitle}>Join the Newsletter</h1>
          <p className={styles.getInvolvedContent}>
            Stay connected with Prosper XO. Drop your email below to get <br />
            the exclusive <i>XO Insider</i> newsletter.
          </p>
          <a
            href="/newsletter-signup"
            className={`${styles.btnLg} ${styles.btnBlue}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN THE <i>XO INSIDER</i>
          </a>
        </div>

        {/* Rainbow Separator */}
        <div className={styles.separator}></div>

        {/* Beta Access Section */}
        <div className={styles.betaAccessSection}>
          <div className={styles.betaAccessContentContainer}>
            <h2 className={styles.getInvolvedTitle}>
              BE THE FIRST TO <br />
              TRY PROSPER XO!
            </h2>
            <p className={styles.betaAccessContent}>
              Want early access to our app? Join our beta group and help shape
              what we&apos;re building. You&apos;ll get a sneak peek at new
              features and a chance to share your feedback before anyone else.
            </p>
            <p className={styles.betaAccessContent}>Sign up at the link below!</p>
            <a
              href="/beta-signup"
              className={styles.btnBetaAccess}
              target="_blank"
              rel="noopener noreferrer"
            >
              SIGN UP FOR BETA ACCESS
            </a>
          </div>
        </div>

        {/* Second Rainbow Separator */}
        <div className={styles.separator2}></div>

        {/* Work With Us Section */}
        <div className={styles.workWithUsSection}>
          <div className={styles.workWithUsContentContainer}>
            <h2 className={styles.getInvolvedTitle}>WANT TO WORK WITH US?</h2>
            <p className={styles.workWithUsContent}>
              Are you passionate about music, media, and empowering artists? Do
              you live on socials, love storytelling, and have a camera (or
              iPhone) always ready?
            </p>
            <p className={styles.workWithUsResume}>
              Send us your resume to:
              <a
                className={styles.workWithUsContentLink}
                href="mailto:jobs@prosperxo.com"
              >
                &nbsp;jobs@prosperxo.com
              </a>
            </p>
            <h3 className={styles.getInvolvedTitle}>
              Let&apos;s Build the Future of Music Together.
            </h3>
          </div>
        </div>
    </>
  );
}