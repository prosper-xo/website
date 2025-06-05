function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

async function loadUserData(id) {
  try {
    // Fetch JSON from the correct location
    const res = await fetch('/assets/data/users.json');
    const data = await res.json();
    const user = data[id];

    if (!user) {
      document.getElementById('userName').textContent = 'User not found.';
      return;
    }

    // Populate elements
    document.getElementById('userImage').src = `/assets/graphics/id-illustrations/${user.thumbnail}`;
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userTitle').textContent = user.title;
    document.getElementById('userBio').textContent = user.bio;

    // Set social/contact links
    document.getElementById('emailLink').href = `mailto:${user.email}`;
    document.getElementById('phoneLink').href = `tel:${user.phone}`;
    document.getElementById('linkedinLink').href = user.linkedin;
    document.getElementById('instagramLink').href = user.instagram;

  } catch (err) {
    console.error('Failed to load user data:', err);
    document.getElementById('userName').textContent = 'Error loading profile.';
  }
}

// Run it
const id = getQueryParam('id') || '0';
loadUserData(id);
