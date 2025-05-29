// Responsive nav toggle
const toggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Form handling
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  formMessage.textContent = '';
  formMessage.className = 'form-message';

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name) {
    formMessage.textContent = 'Please enter your name.';
    formMessage.classList.add('error');
    form.name.focus();
    return;
  }
  if (!email || !validateEmail(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.classList.add('error');
    form.email.focus();
    return;
  }
  if (!message) {
    formMessage.textContent = 'Please enter your message.';
    formMessage.classList.add('error');
    form.message.focus();
    return;
  }

  // Since no backend, simulate a successful submission
  formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
  formMessage.classList.add('success');
  form.reset();
});

function validateEmail(email) {
  // Basic email validation regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
