const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
const yearTarget = document.querySelector('[data-year]');
const contactForm = document.querySelector('[data-contact-form]');
const formMessage = document.querySelector('[data-form-message]');

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement && window.innerWidth <= 768) {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

if (contactForm && formMessage) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameField = contactForm.elements.namedItem('name');
    const emailField = contactForm.elements.namedItem('email');
    const messageField = contactForm.elements.namedItem('message');

    const name = nameField instanceof HTMLInputElement ? nameField.value.trim() : '';
    const email = emailField instanceof HTMLInputElement ? emailField.value.trim() : '';
    const message = messageField instanceof HTMLTextAreaElement ? messageField.value.trim() : '';

    if (!name || !email || !message) {
      formMessage.textContent = 'Lengkapi nama, email, dan pesan terlebih dahulu.';
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      formMessage.textContent = 'Gunakan format email yang valid.';
      return;
    }

    formMessage.textContent = 'Pesan siap dikirim. Form ini hanya demo lokal tanpa backend.';
    contactForm.reset();
  });
}