// Video controls functionality
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("terminalVideo");
  const controls = document.querySelector(".video-controls");
  const btn = document.getElementById("playPauseBtn");
  const wrapper = video?.closest(".tv-video");

  if (video && controls && btn && wrapper) {
    // ▶︎ click: hide controls & play (with sound)
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      controls.classList.add("controls--hidden");
      video.muted = false; // Enable sound
      video.play();
    });

    // wrapper click: if playing, pause & show ▶︎
    wrapper.addEventListener("click", () => {
      if (!video.paused) {
        video.pause();
        controls.classList.remove("controls--hidden");
        btn.textContent = "PLAY ▶︎";
      }
    });

    // Reset button to ▶︎ when video ends
    video.addEventListener("ended", () => {
      controls.classList.remove("controls--hidden");
      btn.textContent = "PLAY ▶︎";
    });
  }
});
