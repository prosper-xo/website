function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

async function loadUserData(id) {
  try {
    const res = await fetch('./users.json');
    const data = await res.json();
    const user = data[id];

    if (!user) {
      document.getElementById('output').innerHTML = 'User not found.<br><br>';
      return;
    }

    document.getElementById('output').innerHTML = `
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Title:</strong> ${user.title}</p>
      <p><strong>Bio:</strong> ${user.bio}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>LinkedIn:</strong> <a href="${user.linkedin}">${user.linkedin}</a></p>
      <p><strong>Instagram:</strong> <a href="${user.instagram}">${user.instagram}</a></p>
      <p><strong>Thumbnail:</strong> ${user.thumbnail}</p>
    `;
  } catch (error) {
    document.getElementById('output').innerText = 'Error loading data.';
  }
}

const id = getQueryParam('id');
loadUserData(id);