// JAVASCRIPT UTAMA - WISATA BENTENG PENDEM

document.addEventListener('DOMContentLoaded', () => {
  // Toggle Menu Navbar Responsive (Mobile)
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nama = document.getElementById('nama').value;
      alert(`Terima kasih ${nama}, pesan Anda telah berhasil dikirim!`);
      contactForm.reset();
    });
  }
});