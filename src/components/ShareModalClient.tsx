'use client';

import { useState } from 'react';
import styles from './ShareModalClient.module.css';

export default function ShareModalClient() {
  const [isOpen, setIsOpen] = useState(false);

  const handleShare = (platform: string) => {
    const url = 'https://www.prosperxo.com/welcome';
    const title = 'Join Prosper XO - Take the survey!';
    const text = 'Join Prosper XO - A movement for artists, creators, and changemakers';

    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={styles.shareButton}
      >
        Share
      </button>

      {isOpen && (
        <div className={styles.shareModal} role="dialog" aria-modal="true">
          <div
            className={styles.shareModalBackdrop}
            onClick={() => setIsOpen(false)}
          />
          <div className={styles.shareModalContent}>
            <button
              className={styles.shareModalClose}
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <h2>Share Surveys</h2>
            <div className={styles.shareModalButtons}>
              <button
                onClick={() => {
                  handleShare('facebook');
                  setIsOpen(false);
                }}
                className={styles.shareButton}
                aria-label="Share on Facebook"
              >
                f
              </button>
              <button
                onClick={() => {
                  handleShare('twitter');
                  setIsOpen(false);
                }}
                className={styles.shareButton}
                aria-label="Share on X"
              >
                𝕏
              </button>
              <button
                onClick={() => {
                  handleShare('linkedin');
                  setIsOpen(false);
                }}
                className={styles.shareButton}
                aria-label="Share on LinkedIn"
              >
                in
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}