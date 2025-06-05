function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

async function loadUserData(id) {
  try {
    // Fetch JSON from the correct location
    const res = await fetch("/assets/data/users.json");
    const data = await res.json();
    const user = data[id];

    if (!user) {
      document.getElementById("userName").textContent = "User not found.";
      return;
    }

    // Populate elements
    document.getElementById(
      "userImage"
    ).src = `/assets/graphics/id-illustrations/${user.thumbnail}`;
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userTitle").textContent = user.title;
    document.getElementById("userBio").textContent = user.bio;

    // Set social/contact links
    document.getElementById("emailLink").href = `mailto:${user.email}`;
    document.getElementById("phoneLink").href = `tel:${user.phone}`;
    document.getElementById("linkedinLink").href = user.linkedin;
    document.getElementById("instagramLink").href = user.instagram;
  } catch (err) {
    console.error("Failed to load user data:", err);
    document.getElementById("userName").textContent = "Error loading profile.";
  }
}

// Run it
const id = getQueryParam("id") || "0";
loadUserData(id);

// Modal content definitions
const modalContent = {
  "watch-intro-video": {
    title: "WATCH INTRO VIDEO",
    content: `
      <div class="space-y-4">
        <div class="relative">
          <video controls class="w-full rounded" poster="/assets/video/prosperxo-video-launchvideo-preview.jpg">
            <source src="/assets/video/prosperxo-video-launchvideo.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="text-center">
          <button class="btn-modal w-1/3 mt-4">LEARN MORE</button>
        </div>
      </div>
    `,
  },
};

// Modal functionality
function openModal(type) {
  const modal = modalContent[type];
  if (!modal) return;

  document.getElementById("modalTitle").textContent = modal.title;
  document.getElementById("modalContent").innerHTML = modal.content;
  document.getElementById("modalOverlay").classList.remove("hidden");
  document.getElementById("modalOverlay").classList.add("flex");

  // Prevent body scroll
  document.body.style.overflow = "hidden";

  if (type === "why-prosper") {
    setupModalVideoControls();
  }
}

function closeModal() {
  document.getElementById("modalOverlay").classList.add("hidden");
  document.getElementById("modalOverlay").classList.remove("flex");

  // Restore body scroll
  document.body.style.overflow = "";
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Close modal events
  document.getElementById("closeModal").addEventListener("click", closeModal);
  document
    .getElementById("modalOverlay")
    .addEventListener("click", function (e) {
      if (e.target === this) closeModal();
    });

  // Escape key to close
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  // Modal trigger buttons
  const modalButtons = document.querySelectorAll(".modal-button");

  modalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modalType = this.textContent
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-");
       openModal(modalType);
    });
  });
});

// After openModal function, add this logic to handle modal video controls
function setupModalVideoControls() {
  const video = document.getElementById("modalTerminalVideo");
  const button = document.getElementById("modalPlayPauseBtn");
  const controls = button && button.closest(".video-controls");
  const wrapper = video && video.closest(".tv-video");
  if (!video || !button || !controls || !wrapper) return;

  button.addEventListener("click", (e) => {
    e.stopPropagation();
    controls.classList.add("controls--hidden");
    video.play();
  });

  wrapper.addEventListener("click", () => {
    if (!video.paused) {
      video.pause();
      controls.classList.remove("controls--hidden");
      button.textContent = "PLAY ▶︎";
    }
  });

  video.addEventListener("play", () => {
    button.textContent = "❚❚";
  });
  video.addEventListener("pause", () => {
    button.textContent = "PLAY ▶︎";
  });
  video.addEventListener("ended", () => {
    button.textContent = "PLAY ▶︎";
  });
}
