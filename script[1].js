document.getElementById('demoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent =
    'Demo only — on the live site, this would send the request directly to the business.';
});