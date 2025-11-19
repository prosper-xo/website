import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'ETHOS | Prosper XO',
  description:
    'Discover why Prosper XO is the platform that puts artists back at the center of the industry.',
  openGraph: {
    title: 'ETHOS | Prosper XO',
    description:
      'Discover why Prosper XO is the platform that puts artists back at the center of the industry.',
    url: 'https://www.prosperxo.com/ethos',
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
    title: 'ETHOS | Prosper XO',
    description:
      'Discover why Prosper XO is the platform that puts artists back at the center of the industry.',
    images: ['/assets/thumbnail/prosper-website-thumbnail.jpg'],
  },
};

export default function EthosPage() {
  return (
    <>
      <section className={styles.hero}>
          <Image
            src="/assets/graphics/prosper-website-ethos-hero.png"
            alt="Prosper XO Ethos Title"
            width={500}
            height={150}
            className={styles.ethosTitle}
            priority
          />
        </section>

        <section className={styles.ethosGridWrapper}>
          <div className={styles.ethosGrid}>
            <Image
              src="/assets/graphics/prosper-website-ethos-img1.jpg"
              alt="Artists First"
              width={400}
              height={400}
              className={styles.ethosImage}
            />
            <Image
              src="/assets/graphics/prosper-website-ethos-img2.jpg"
              alt="Radical Transparency"
              width={400}
              height={400}
              className={styles.ethosImage}
            />
            <Image
              src="/assets/graphics/prosper-website-ethos-img3.jpg"
              alt="Equity in Action"
              width={400}
              height={400}
              className={styles.ethosImage}
            />
            <Image
              src="/assets/graphics/prosper-website-ethos-img4.jpg"
              alt="Sustainability Over Stardom"
              width={400}
              height={400}
              className={styles.ethosImage}
            />
            <Image
              src="/assets/graphics/prosper-website-ethos-img5.jpg"
              alt="Co-Creation with Community"
              width={400}
              height={400}
              className={styles.ethosImage}
            />
            <Image
              src="/assets/graphics/prosper-website-ethos-img6.jpg"
              alt="Data is Power"
              width={400}
              height={400}
              className={styles.ethosImage}
            />
          </div>
        </section>
    </>
  );
}