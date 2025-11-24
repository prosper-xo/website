import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'EVENTS | Prosper XO',
  description:
    'Discover why Prosper XO is the platform that puts artists back at the center of the industry.',
  openGraph: {
    title: 'EVENTS | Prosper XO',
    description:
      'Discover why Prosper XO is the platform that puts artists back at the center of the industry.',
    url: 'https://www.prosperxo.com/events',
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
    title: 'EVENTS | Prosper XO',
    description:
      'Discover why Prosper XO is the platform that puts artists back at the center of the industry.',
    images: ['/assets/thumbnail/prosper-website-thumbnail.jpg'],
  },
};

export default function EventsPage() {
  return (
    <>
      {/* Event Details Coming Soon Placeholder */}
        <section className={styles.eventsSection}>
          <div className={styles.eventItem}>
            <div className={styles.eventFlex}>
              <div className={styles.eventImage}>
                <a href="https://luma.com/qk6emzp9" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/graphics/events/event_placeholder.avif"
                    alt="Details Coming Soon"
                    width={350}
                    height={437}
                    className={styles.eventImageImg}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </a>
              </div>
              <div className={styles.eventDetails}>
                <span className={styles.eventTitle}>December Event</span>
                <p className={styles.eventSubtitle}>
                  December 10th · Capital Factory in Austin, TX · ACL Room, 16th floor
                </p>
                <p className={styles.eventBodyHead}>Details coming soon.</p>
                <br />
                <a
                  href="https://luma.com/qk6emzp9"
                  className={`${styles.btnLg} ${styles.btnBlue}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RSVP HERE!
                </a>
              </div>
            </div>
          </div>

          {/* Follow Box */}
          <section className={styles.followBox}>
            <div className={styles.followInner}>
              <p className={styles.followText}>
                Check out our calendar for more upcoming events!
              </p>
              <a
                href="https://lu.ma/prosperxo"
                className={`${styles.btnLg} ${styles.btnBlue}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                VIBE WITH US
              </a>
            </div>
          </section>

          {/* Past Events */}
          <section className={styles.pastEventsContainer}>
            <div className={styles.pastText}>
              <p>Past Town Halls</p>
            </div>
            <div className={styles.pastFlyers}>
              <div className={styles.poster}>
                <a href="https://luma.com/tr7hnhdr" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/graphics/events/prosperxo-event-251105-1080x1350.jpg"
                    alt="November 5th Town Hall"
                    width={300}
                    height={375}
                    className={styles.posterImg}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </a>
              </div>
              <div className={styles.poster}>
                <a href="https://luma.com/iam23xom" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/graphics/events/prosperxo-event-251008-1080x1350.jpg"
                    alt="October 8th Town Hall"
                    width={300}
                    height={375}
                    className={styles.posterImg}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </a>
              </div>
              <div className={styles.poster}>
                <a href="https://luma.com/pe001dzs" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/graphics/events/prosperxo-event-250910-1080x1350.jpg"
                    alt="September 10th Town Hall"
                    width={300}
                    height={375}
                    className={styles.posterImg}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </a>
              </div>
              <div className={styles.poster}>
                <a href="https://luma.com/ejjgtdfu" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/graphics/events/prosperxo-event-250813-1080x1350.jpg"
                    alt="August 13th Town Hall"
                    width={300}
                    height={375}
                    className={styles.posterImg}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </a>
              </div>
              <div className={styles.poster}>
                <a href="https://luma.com/askhi13d" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/graphics/events/prosperxo-event-250709-1080x1350.jpg"
                    alt="July 9th Town Hall"
                    width={300}
                    height={375}
                    className={styles.posterImg}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </a>
              </div>
              <div className={styles.poster}>
                <a href="https://luma.com/msjie2wy" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/graphics/events/prosperxo-event-250617-1080x1350.jpg"
                    alt="June 17th Town Hall"
                    width={300}
                    height={375}
                    className={styles.posterImg}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </a>
              </div>
              <div className={styles.poster}>
                <a href="https://luma.com/8dl5lzo0" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/graphics/events/prosperxo-event-250514-1080x1350.jpg"
                    alt="May 14th Town Hall"
                    width={300}
                    height={375}
                    className={styles.posterImg}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </a>
              </div>
            </div>
          </section>
        </section>
    </>
  );
}