import Image from 'next/image';
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Why Prosper? | Prosper XO',
  description:
    'Discover why Prosper XO is the platform that puts artists back at the center of the industry.',
  openGraph: {
    title: 'Why Prosper? | Prosper XO',
    description:
      'Discover why Prosper XO is the platform that puts artists back at the center of the industry.',
    images: [
      {
        url: '/assets/thumbnail/prosper-website-thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'Prosper XO Why Prosper',
      },
    ],
    url: 'https://www.prosperxo.com/why-prosper',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Prosper? | Prosper XO',
    description:
      'Discover why Prosper XO is the platform that puts artists back at the center of the industry.',
    images: ['/assets/thumbnail/prosper-website-thumbnail.jpg'],
  },
};

export default function WhyProsperPage() {
  const gridItems = [
    {
      image: '/assets/graphics/prosper-website-ill-guitarist.png',
      title: 'Build equity',
    },
    {
      image: '/assets/graphics/prosper-website-ill-guitarist.png',
      title: 'Empower creatives',
    },
    {
      image: '/assets/graphics/prosper-website-ill-guitarist.png',
      title: 'Fuel local economies',
    },
    {
      image: '/assets/graphics/prosper-website-ill-guitarist.png',
      title: 'Restore balance',
    },
  ];

  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>
          {/* Video Wrapper */}
          <div className={styles.videoWrapper}>
            <video
              controls
              poster="/assets/video/prosperxo-video-launchvideo-preview.jpg"
              className={styles.video}
            >
              <source
                src="/assets/video/prosperxo-video-launchvideo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Grid Items */}
          <div className={styles.grid}>
            {gridItems.map((item, index) => (
              <div key={index} className={styles.gridItem}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className={styles.gridImage}
                />
                <h3 className={styles.gridTitle}>{item.title}</h3>
              </div>
            ))}
          </div>

          {/* Statement */}
          <p className={styles.statement}>
            We&apos;re not just building a platform.
            <br className={styles.mobileBreak} />
            We&apos;re building a future where artists can create, grow, and prosper
            on their own terms.
          </p>

          {/* Welcome Section */}
          <div className={styles.welcomeGrid}>
            <div className={styles.welcomeText}>
              <p className={styles.welcome}>Welcome to Prosper XO.</p>
            </div>
            <div className={styles.welcomeLogo}>
              <Image
                src="/assets/logos/prosper-website-logo-face.png"
                alt="Prosper XO"
                width={200}
                height={200}
                className={styles.logoImage}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}