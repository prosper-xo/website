
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.header-menu');
    hamburger.addEventListener('click', function () {
        const isOpen = menu.classList.toggle('open');
        hamburger.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
});

const video = document.getElementById('terminalVideo');
const button = document.getElementById('playPauseBtn');

button.addEventListener('click', () => {
  if (video.paused) {
    video.muted = false;
    video.play();
    button.textContent = '❚❚';
  } else {
    video.pause();
    button.textContent = '▶︎';
  }
});

// ✅ Reset button to ▶︎ when video ends
video.addEventListener('ended', () => {
  button.textContent = '▶︎';
});
