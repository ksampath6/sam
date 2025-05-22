function showTab(tabId) {
  // Hide all content sections
  const contents = document.querySelectorAll('.content');
  contents.forEach((content) => {
    content.style.display = 'none';
  });

  // Remove 'active' class from all tab buttons
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach((button) => {
    button.classList.remove('active');
  });

  // Show the selected content section
  const selectedContent = document.getElementById(tabId);
  if (selectedContent) {
    selectedContent.style.display = 'block';
  }

  // Add 'active' class to the clicked tab button
  const clickedButton = Array.from(tabButtons).find(
    (button) => button.textContent.toLowerCase() === tabId
  );
  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}

function toggleVideoSizes() {
  const guidelines = document.getElementById('video-guidelines');
  if (guidelines.style.display === 'none') {
    guidelines.style.display = 'block';
  } else {
    guidelines.style.display = 'none';
  }
}
