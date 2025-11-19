'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './TerminalVideo.module.css';

export default function TerminalVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
      setShowControls(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
      setShowControls(true);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className={styles.tvVideo}>
      <video
        ref={videoRef}
        id="terminalVideo"
        poster="/assets/placeholders/prosper-website-placeholder12.png"
        autoPlay
        playsInline
        muted
        loop
        preload="metadata"
      >
        <source src="/assets/video/prosperxo-video-terminaltext.mp4" type="video/mp4" />
        <img src="/assets/placeholders/prosper-website-placeholder12.png" alt="Fallback" />
      </video>

      <div className={`${styles.videoControls} ${!showControls ? styles.controlsHidden : ''}`}>
        <button onClick={togglePlayPause} className={styles.videoButton}>
          {isPlaying ? 'PAUSE ⏸︎' : 'PLAY ▶︎'}
        </button>
      </div>
    </div>
  );
}