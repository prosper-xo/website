import Image from 'next/image';
import Link from 'next/link';
import TerminalVideo from '@/components/TerminalVideo';
import styles from './page.module.css';

export const metadata = {
  title: 'Prosper XO',
  description: "We're building something exciting to put artists back at the center of the industry. Stay tuned!",
  openGraph: {
    title: 'PROSPER XO',
    description: "We're building something exciting to put artists back at the center of the industry. Stay tuned!",
    images: [
      {
        url: '/assets/thumbnail/prosper-website-thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Prosper XO',
      },
    ],
    url: 'https://www.prosperxo.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PROSPER XO',
    description: "We're building something exciting to put artists back at the center of the industry. Stay tuned!",
    images: ['https://www.prosperxo.com/assets/thumbnail/prosper-website-thumbnail.jpg'],
    url: 'https://www.prosperxo.com',
  },
};

export default function Home() {
  return (
    <main className={styles.splashContainer}>
      <TerminalVideo />
      
      <Link href="/welcome" className={styles.enterButton}>
        <Image
          src="/assets/text/prosper-website-stylizedtext-enterhere.svg"
          alt="Enter Here"
          width={280}
          height={47}
          className={styles.default}
        />
        <Image
          src="/assets/text/prosper-website-stylizedtext-enterhere-ro.svg"
          alt="Enter Here Hover"
          width={280}
          height={47}
          className={styles.hover}
        />
      </Link>
    </main>
  );
}