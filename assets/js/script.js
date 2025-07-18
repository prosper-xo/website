document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.header-menu');
    const body = document.body;
    
    hamburger.addEventListener('click', function () {
        const isOpen = menu.classList.toggle('open');
        hamburger.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        
        // Toggle body scroll lock when menu is open
        if (isOpen) {
            body.style.overflow = 'hidden';
            // Save current scroll position
            body.style.position = 'fixed';
            body.style.top = `-${window.scrollY}px`;
            body.style.width = '100%';
        } else {
            // Restore scroll position
            const scrollY = body.style.top;
            body.style.position = '';
            body.style.top = '';
            body.style.width = '';
            body.style.overflow = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
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
