// JAVASCRIPT KHUSUS HALAMAN BERANDA

document.addEventListener('DOMContentLoaded', () => {
  const btnHero = document.querySelector('.btn-hero');
  if (btnHero) {
    btnHero.addEventListener('click', (e) => {
      const targetId = btnHero.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  console.log("Modul Beranda beranda.js berhasil dijalankan.");
});