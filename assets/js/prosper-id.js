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
    document.getElementById(
      "userName"
    ).textContent = `${user.firstName} ${user.lastName}`;
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
          <button class="btn-modal w-1/2 md:w-1/3 mt-4">LEARN MORE</button>
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

  if (type === "watch-intro-video") {
    setupModalVideoControls();
  }
}

function closeModal() {
  document.getElementById("modalOverlay").classList.add("hidden");
  document.getElementById("modalOverlay").classList.remove("flex");

  // Restore body scroll
  document.body.style.overflow = "";
}

function addToContacts(user) {
  // Create a URL-safe version of the name
  const safeName = `${user.firstName}_${user.lastName}`
    .toLowerCase()
    .replace(/\s+/g, "_");
  // Open the vCard URL directly
  window.open(`/assets/vcards/${safeName}.vcf`, "_blank");
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

  // Pop-up blocked modal events
  document
    .getElementById("closePopupBlockedModal")
    .addEventListener("click", function () {
      document.getElementById("popupBlockedModal").classList.add("hidden");
      document.getElementById("popupBlockedModal").classList.remove("flex");
    });

  document
    .getElementById("popupBlockedModal")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        this.classList.add("hidden");
        this.classList.remove("flex");
      }
    });

  // Escape key to close
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
      document.getElementById("popupBlockedModal").classList.add("hidden");
      document.getElementById("popupBlockedModal").classList.remove("flex");
    }
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

  // Add Contact button functionality
  const addContactBtn = document.getElementById("addContactBtn");
  if (addContactBtn) {
    addContactBtn.addEventListener("click", async function (e) {
      e.preventDefault();
      try {
        const res = await fetch("/assets/data/users.json");
        const data = await res.json();
        const user = data[id];

        if (!user) {
          alert("User data not found");
          return;
        }

        // Create a URL-safe version of the name
        const safeName = `${user.firstName}_${user.lastName}`
          .toLowerCase()
          .replace(/\s+/g, "_");
        const vcardUrl = `/assets/vcards/${safeName}.vcf`;

        // Try to open the vCard
        const newWindow = window.open(vcardUrl, "_blank");

        // Check if pop-up was blocked
        if (
          !newWindow ||
          newWindow.closed ||
          typeof newWindow.closed === "undefined"
        ) {
          // Pop-up was blocked, show modal with link
          const vcardLink = document.getElementById("vcardLink");
          vcardLink.href = vcardUrl;
          vcardLink.textContent = vcardUrl;

          const popupBlockedModal =
            document.getElementById("popupBlockedModal");
          popupBlockedModal.classList.remove("hidden");
          popupBlockedModal.classList.add("flex");
        }
      } catch (err) {
        console.error("Failed to load user data:", err);
        alert("Failed to load contact information");
      }
    });
  }
});

// After openModal function, add this logic to handle modal video controls
function setupModalVideoControls() {
  const video = document.querySelector("#modalContent video");
  if (!video) return;

  const button = video.parentElement.querySelector(".video-controls button");
  const controls = button?.closest(".video-controls");
  const wrapper = video.closest(".tv-video");
  if (!button || !controls || !wrapper) return;

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
