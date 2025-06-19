function toggleMenu() {
  document.getElementById("nav-list").classList.toggle("show");
}

function showTab(tabId) {
  // Hide all tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  // Show selected tab
  document.getElementById(tabId).classList.add('active');

  // Close menu if open (mobile)
  document.getElementById("nav-list").classList.remove("show");
}
