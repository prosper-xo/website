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
    console.log('User data:', user);
    console.log('ID:', id);

    if (!user) {
      console.error('User not found for ID:', id);
      document.getElementById("userName").textContent = "User not found.";
      return;
    }

    // Update page title
    document.title = `${user.firstName} ${user.lastName} | PROSPER ID`;
    
    // Debug: Check if elements exist
    const userNameEl = document.getElementById("userName");
    console.log('userName element:', userNameEl);
    if (!userNameEl) {
      console.error('Could not find element with id "userName"');
    }

    // Populate elements
    document.getElementById(
      "userImage"
    ).src = `/assets/graphics/id-illustrations/${user.thumbnail}`;
    document.getElementById(
      "userName"
    ).textContent = `${user.firstName} ${user.lastName}`;
    document.getElementById("userTitle").textContent = user.title;

    // Set social/contact links
    document.getElementById("emailLink").href = `mailto:${user.email}`;
    document.getElementById("phoneLink").href = `tel:${user.phone}`;
    document.getElementById("linkedinLink").href = user.linkedin;
    document.getElementById("instagramLink").href = user.instagram;

    // Handle meeting button
    const buttonContainer = document.getElementById('buttonContainer');

    if (user.meeting) {
      // Create meeting button
      const meetingBtn = document.createElement('a');
      meetingBtn.className = 'group relative w-3/5 md:w-4/5 mx-auto px-4 py-2 text-sm text-center font-bold text-black bg-gradient-to-r from-red-500 via-yellow-400 to-blue-400 rounded-lg border-2 border-black transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-red-600 hover:via-yellow-500 hover:to-blue-500';
      meetingBtn.href = user.meeting;
      meetingBtn.target = '_blank';
      meetingBtn.innerHTML = '<span class="relative z-10">BOOK A MEETING</span><div class="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-500 to-blue-500 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>';

      // Add the meeting button to the container
      buttonContainer.appendChild(meetingBtn);

      // Update container for 3 buttons
      buttonContainer.classList.remove('md:grid-cols-2');
      buttonContainer.classList.add('md:grid-cols-3');
      buttonContainer.classList.remove('max-w-md');
      buttonContainer.classList.add('max-w-2xl');
    }

  } catch (err) {
    console.error("Failed to load user data:", err);
    document.getElementById("userName").textContent = "Error loading profile.";
  }
}

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
  const id = getQueryParam("id") || "0";
  console.log('DOM fully loaded, loading user data for ID:', id);
  loadUserData(id);
});

// Modal content definitions
const modalContent = {
  "watch-intro-video": {
    title: "INTRO VIDEO",
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
  "let-s-connect": {
    title: "LET'S CONNECT",
    content: `
      <form id="leadForm" class="space-y-4">
        <div>
          <label for="fullName" class="block text-sm font-medium mb-1">Name *</label>
          <input type="text" id="fullName" name="fullName" required
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900">
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">How do you prefer to stay updated on news and events from Prosper XO? *</label>
          <div class="space-x-4">
            <label class="inline-flex items-center">
              <input type="radio" name="contactPreference" value="email" required class="mr-2" checked>
              Email
            </label>
            <label class="inline-flex items-center">
              <input type="radio" name="contactPreference" value="phone" required class="mr-2">
              Phone
            </label>
          </div>
        </div>
        <div id="contactContainer">
          <div id="emailContainer">
            <label for="emailInput" class="block text-sm font-medium mb-1">Email Address *</label>
            <input type="email" id="emailInput" name="email" required
              class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              placeholder="Enter your email address">
          </div>
          <div id="phoneContainer" class="hidden">
            <label for="phoneInput" class="block text-sm font-medium mb-1">Phone Number *</label>
            <input type="tel" id="phoneInput" name="phone"
              class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              placeholder="Enter your phone number">
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn-modal w-1/2 md:w-1/3 mt-4">SUBMIT</button>
        </div>
      </form>
    `,
  },
  "success-message": {
    title: "THANK YOU!",
    content: `
      <div class="text-center space-y-6 py-4">
        <div class="text-4xl mb-4">✨</div>
        <h3 class="text-xl font-semibold">Thank you for connecting with us!</h3>
        <p class="text-gray-600">We'll be in touch soon.</p>
        <button class="btn-modal w-1/2 md:w-1/3 mt-4" onclick="closeModal()">CLOSE</button>
      </div>
    `,
  },
  "loading-state": {
    title: "SUBMITTING",
    content: `
      <div class="text-center space-y-6 py-4">
        <div class="flex justify-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
        <p class="text-gray-600">Please wait while we process your submission...</p>
      </div>
    `,
  },
};

// Modal functionality
let isInteractingWithModal = false;

function openModal(type) {
  const modal = modalContent[type];
  if (!modal) {
    console.error("Modal type not found:", type);
    return;
  }

  document.getElementById("modalTitle").textContent = modal.title;
  document.getElementById("modalContent").innerHTML = modal.content;
  document.getElementById("modalOverlay").classList.remove("hidden");
  document.getElementById("modalOverlay").classList.add("flex");

  // Set up modal event listeners
  const modalOverlay = document.getElementById("modalOverlay");
  const modalContainer = document.getElementById("modalContainer");

  // Track all mouse interactions with modal content
  modalContainer.addEventListener("mousedown", () => {
    isInteractingWithModal = true;
  });

  modalContainer.addEventListener("mouseup", () => {
    // Small delay to ensure any text selection is complete
    setTimeout(() => {
      isInteractingWithModal = false;
    }, 100);
  });

  // Close modal events
  document.getElementById("closeModal").addEventListener("click", closeModal);

  // Handle overlay click
  modalOverlay.addEventListener("click", function (e) {
    // Only close if clicking the overlay itself and not interacting with modal content
    if (e.target === this && !isInteractingWithModal) {
      closeModal();
    }
  });

  // Prevent body scroll
  document.body.style.overflow = "hidden";

  if (type === "watch-intro-video") {
    setupModalVideoControls();
  } else if (type === "let-s-connect") {
    setupLeadForm();
  }
}

function closeModal() {
  document.getElementById("modalOverlay").classList.add("hidden");
  document.getElementById("modalOverlay").classList.remove("flex");

  // Reset interaction state
  isInteractingWithModal = false;

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
        .replace(/\s+/g, " ") // Replace all whitespace (including newlines) with a single space
        .trim()
        .toLowerCase()
        .replace(/['\s]+/g, "-") // Replace both apostrophes and spaces with hyphens
        .replace(/-+/g, "-"); // Replace multiple hyphens with single hyphen
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

        // Check if device is mobile
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
          // Mobile: Try to open in new window
          const newWindow = window.open(
            vcardUrl,
            "_blank",
            "noopener,noreferrer,width=600,height=400"
          );

          if (
            !newWindow ||
            newWindow.closed ||
            typeof newWindow.closed === "undefined"
          ) {
            const vcardLink = document.getElementById("vcardLink");
            vcardLink.href = vcardUrl;
            vcardLink.textContent = vcardUrl;

            const popupBlockedModal =
              document.getElementById("popupBlockedModal");
            popupBlockedModal.classList.remove("hidden");
            popupBlockedModal.classList.add("flex");
          }
        } else {
          // Desktop: Trigger direct download
          const link = document.createElement("a");
          link.href = vcardUrl;
          link.download = `${safeName}.vcf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
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

// Add form handling logic
function setupLeadForm() {
  const form = document.getElementById("leadForm");
  const contactPreferenceInputs = document.querySelectorAll(
    'input[name="contactPreference"]'
  );
  const emailContainer = document.getElementById("emailContainer");
  const phoneContainer = document.getElementById("phoneContainer");
  const emailInput = document.getElementById("emailInput");
  const phoneInput = document.getElementById("phoneInput");
  const nameInput = document.getElementById("fullName");

  if (
    !form ||
    !contactPreferenceInputs.length ||
    !emailContainer ||
    !phoneContainer ||
    !emailInput ||
    !phoneInput ||
    !nameInput
  ) {
    console.error("Required form elements not found");
    return;
  }

  // Function to validate name
  const validateName = (name) => {
    if (!name || name.trim().length < 2) {
      nameInput.setCustomValidity(
        "Please enter a valid name (at least 2 characters)"
      );
      return false;
    }
    if (name.trim().length > 100) {
      nameInput.setCustomValidity("Name is too long (maximum 100 characters)");
      return false;
    }
    nameInput.setCustomValidity("");
    return true;
  };

  // Function to validate phone
  const validatePhone = (phone) => {
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(phone)) {
      phoneInput.setCustomValidity(
        "Please enter a valid phone number (minimum 10 digits)"
      );
      return false;
    }
    phoneInput.setCustomValidity("");
    return true;
  };

  // Add input validation for name
  nameInput.addEventListener("input", (e) => {
    validateName(e.target.value);
  });

  // Add input validation for phone
  phoneInput.addEventListener("input", (e) => {
    validatePhone(e.target.value);
  });

  // Function to update contact input visibility
  const updateContactInputs = (type) => {
    if (type === "email") {
      emailContainer.classList.remove("hidden");
      phoneContainer.classList.add("hidden");
      emailInput.required = true;
      phoneInput.required = false;
      phoneInput.value = ""; // Clear phone input when hidden
    } else if (type === "phone") {
      emailContainer.classList.add("hidden");
      phoneContainer.classList.remove("hidden");
      emailInput.required = false;
      phoneInput.required = true;
      emailInput.value = ""; // Clear email input when hidden
    }
  };

  // Set initial state
  updateContactInputs("email");

  // Add change event listeners to radio buttons
  contactPreferenceInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      updateContactInputs(e.target.value);
    });
  });

  // Handle form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Validate all fields
    const nameValid = validateName(nameInput.value);
    const contactType = document.querySelector(
      'input[name="contactPreference"]:checked'
    )?.value;
    let contactValid = true;

    if (contactType === "email") {
      contactValid = emailInput.checkValidity();
    } else if (contactType === "phone") {
      contactValid = validatePhone(phoneInput.value);
    }

    if (nameValid && contactValid) {
      // Show loading state
      document.getElementById("modalTitle").textContent =
        modalContent["loading-state"].title;
      document.getElementById("modalContent").innerHTML =
        modalContent["loading-state"].content;

      try {
        // Prepare form data using URLSearchParams
        const payload = new URLSearchParams({
          name: nameInput.value.trim(),
          email: emailInput.value.trim(),
          phone: phoneInput.value.trim(),
          timestamp: new Date().toISOString(),
        }).toString();

        // Log the data being sent
        console.log("Submitting form data:", payload);

        // Send data to Google Apps Script
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbw6s-gpUrH2PAc9Pl4ta9k8AnMQG-vBkwlVEU__3mngfTncOE7WpvSle3Y_lx9GzC9Q/exec",
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: payload,
          }
        );

        // Log the response
        console.log("Form submission response:", response);

        // Show success message
        document.getElementById("modalTitle").textContent =
          modalContent["success-message"].title;
        document.getElementById("modalContent").innerHTML =
          modalContent["success-message"].content;

        // Reset form
        form.reset();
        updateContactInputs("email");
      } catch (error) {
        console.error("Error submitting form:", error);
        // Show error state
        document.getElementById("modalTitle").textContent = "ERROR";
        document.getElementById("modalContent").innerHTML = `
          <div class="text-center space-y-6 py-4">
            <div class="text-4xl mb-4">⚠️</div>
            <h3 class="text-xl font-semibold">Something went wrong</h3>
            <p class="text-gray-600">Please try submitting the form again.</p>
            <button class="btn-modal w-1/2 md:w-1/3 mt-4" onclick="openModal('let-s-connect')">TRY AGAIN</button>
          </div>
        `;
      }
    }
  });
}