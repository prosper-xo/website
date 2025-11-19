import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './page.module.css';
import ShareModalClient from '@/components/ShareModalClient';

export const metadata: Metadata = {
  title: 'Welcome | Prosper XO',
  description:
    'Discover why Prosper XO is the platform that puts artists back at the center of the industry.',
  openGraph: {
    title: 'Welcome | Prosper XO',
    description:
      'Discover why Prosper XO is the platform that puts artists back at the center of the industry.',
    images: [
      {
        url: '/assets/thumbnail/prosper-website-thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Prosper XO Welcome',
      },
    ],
    url: 'https://www.prosperxo.com/welcome',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welcome | Prosper XO',
    description:
      'Discover why Prosper XO is the platform that puts artists back at the center of the industry.',
    images: ['/assets/thumbnail/prosper-website-thumbnail.jpg'],
  },
};

export default function WelcomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image
          src="/assets/text/prosper-website-stylizedtext-tagline.svg"
          alt="When Artists Prosper, Culture Thrives"
          width={800}
          height={200}
          className={styles.textHeader}
          style={{ width: '100%', height: 'auto' }}
        />
        <div className={styles.definitionsContainer}>
          <Image
            src="/assets/definitions/prosper-website-definition1.jpg"
            alt="Prosper"
            width={300}
            height={300}
            className={styles.definitions}
            style={{ width: '100%', height: 'auto' }}
          />
          <Image
            src="/assets/definitions/prosper-website-definition2.jpg"
            alt="XO"
            width={300}
            height={300}
            className={styles.definitions}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <Image
          src="/assets/text/prosper-website-stylizedtext-rooted.svg"
          alt="Prosper XO is a movement rooted in artist sustainability, radical transparency, and true equity."
          width={600}
          height={150}
          className={styles.rootedText}
          style={{ width: '100%', height: 'auto' }}
        />
      </section>

      {/* Rainbow Separator */}
      <div className={styles.separator}>
        <Image
          src="/assets/graphics/prosper-website-sep-rainbow.jpg"
          alt="Rainbow Separator"
          width={1200}
          height={50}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      {/* Survey Section */}
      <section className={styles.survey}>
        <Image
          src="/assets/text/prosper-website-stylizedtext-profited.svg"
          alt="In a system that's long profited off our talent while keeping us underpaid and undervalued, we believe it's time for something better."
          width={600}
          height={150}
          className={styles.textInasystem}
          style={{ width: '100%', height: 'auto' }}
        />

        <Image
          src="/assets/text/prosper-website-stylizedtext-readme.png"
          alt="Read Me"
          width={400}
          height={100}
          className={styles.readMeText}
          style={{ width: '100%', height: 'auto' }}
        />

        <div className={styles.readButtonWrap}>
          <Link
            href="/assets/letters/prosperxo-website-letters-austin.pdf"
            target="_blank"
            className={`${styles.btn} ${styles.btnRed}`}
          >
            DEAR AUSTIN
            <br />
            MUSIC INDUSTRY
          </Link>

          <Link
            href="/assets/letters/prosperxo-website-letters-artists.pdf"
            target="_blank"
            className={`${styles.btn} ${styles.btnYellow}`}
          >
            DEAR
            <br />
            ARTISTS
          </Link>

          <Link
            href="/assets/letters/prosperxo-website-letters-global.pdf"
            target="_blank"
            className={`${styles.btn} ${styles.btnPink}`}
          >
            DEAR GLOBAL
            <br />
            MUSIC INDUSTRY
          </Link>
        </div>

        <Image
          src="/assets/logos/prosper-website-logo-face.png"
          alt="Prosper XO"
          width={200}
          height={200}
          className={styles.logoFace}
        />

        <div className={styles.surveyButtons}>
          <Link
            href="https://forms.gle/14LM4yptHkYyJiGdA"
            target="_blank"
            className={`${styles.btn} ${styles.btnRed}`}
          >
            Artist
          </Link>
          <Link
            href="https://forms.gle/fEw3hWdYoLfSobPy7"
            target="_blank"
            className={`${styles.btn} ${styles.btnPink}`}
          >
            Venue
          </Link>
          <Link
            href="https://forms.gle/nMoYZT6Eb5v1i7Vh7"
            target="_blank"
            className={`${styles.btn} ${styles.btnYellow}`}
          >
            Brand
          </Link>
          <Link
            href="https://forms.gle/qY3A2TAucn7S5p1t6"
            target="_blank"
            className={`${styles.btn} ${styles.btnBlue}`}
          >
            Fan
          </Link>
        </div>

        <p className={styles.sharePrompt}>Share with someone you know!</p>
        <ShareModalClient />
      </section>

      {/* Why Artists Section */}
      <section className={styles.whyArtistsSection}>
        <Image
          src="/assets/text/prosper-website-stylizedtext-why.svg"
          alt="Why Artists Don't Prosper"
          width={600}
          height={100}
          className={styles.whyTitle}
        />

        <div className={styles.scrollMask}>
          <div className={styles.scrollColumns}>
            {/* Left Column (scrolls up) */}
            <div className={`${styles.column} ${styles.up}`}>
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((num, idx) => (
                <div key={idx} className={styles.tanBox}>
                  <Image
                    src={`/assets/graphics/prosper-website-movingbox-v${num}.jpg`}
                    alt={`Moving box ${num}`}
                    width={200}
                    height={200}
                  />
                </div>
              ))}
            </div>

            {/* Right Column (scrolls down) */}
            <div className={`${styles.column} ${styles.down}`}>
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((num, idx) => (
                <div key={idx} className={styles.tanBox}>
                  <Image
                    src={`/assets/graphics/prosper-website-movingbox-v${num}.jpg`}
                    alt={`Moving box ${num}`}
                    width={200}
                    height={200}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posters Section */}
      <section className={styles.posters}>
        <Link href="/letter/" className={styles.poster}>
          <Image
            src="/assets/posters/prosper-website-poster1.jpg"
            alt="a letter from the founder"
            width={300}
            height={400}
          />
        </Link>
        <Link href="/get-involved/" className={styles.poster}>
          <Image
            src="/assets/posters/prosper-website-poster2.jpg"
            alt="Press Inquiries"
            width={300}
            height={400}
          />
        </Link>
        <Link href="/get-involved/" className={styles.poster}>
          <Image
            src="/assets/posters/prosper-website-poster3.jpg"
            alt="Join the Waitlist"
            width={300}
            height={400}
          />
        </Link>
        <Link href="/why-prosper/" className={styles.poster}>
          <Image
            src="/assets/posters/prosper-website-poster4.jpg"
            alt="Why Prosper?"
            width={300}
            height={400}
          />
        </Link>
      </section>
    </main>
  );
}