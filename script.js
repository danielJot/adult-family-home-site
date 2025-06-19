function toggleMenu() {
  document.getElementById("nav-list").classList.toggle("show");
}

function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');

  // Close mobile nav if open
  document.getElementById("nav-list").classList.remove("show");
}
