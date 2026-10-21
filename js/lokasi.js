document.addEventListener('DOMContentLoaded', () => {
  // 1. Pengecekan Jam Operasional (08:00 - 18:00 WIB)
  const statusDot = document.getElementById('statusDot');
  const statusTitle = document.getElementById('statusTitle');
  
  if (statusTitle && statusDot) {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 8 && hours < 18) {
      statusDot.style.backgroundColor = '#22c55e'; // Hijau
      statusTitle.textContent = '🟢 Buka Sekarang (08.00 - 18.00 WIB)';
      statusTitle.style.color = '#15803d';
    } else {
      statusDot.style.backgroundColor = '#ef4444'; // Merah
      statusTitle.textContent = '🔴 Tutup Sekarang (Buka Kembali Besok Pukul 08.00 WIB)';
      statusTitle.style.color = '#b91c1c';
    }
  }

  // 2. Fitur Salin Alamat
  const copyBtn = document.getElementById('copyAddressBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const address = "Jl. Benteng No. 1, Kebonjati, Cilacap Selatan, Kabupaten Cilacap, Jawa Tengah 53211";
      navigator.clipboard.writeText(address).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✅ Alamat Berhasil Disalin!';
        setTimeout(() => {
          copyBtn.textContent = originalText;
        }, 2000);
      });
    });
  }

  // 3. Interaktif FAQ Accordion
  const faqBtns = document.querySelectorAll('.faq-btn');
  faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      
      // Tutup semua FAQ lainnya
      faqBtns.forEach(otherBtn => {
        otherBtn.setAttribute('aria-expanded', 'false');
        const icon = otherBtn.querySelector('.faq-icon');
        if (icon) icon.textContent = '+';
        const answer = otherBtn.nextElementSibling;
        if (answer) answer.style.display = 'none';
      });

      // Toggle FAQ yang diklik
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        const icon = btn.querySelector('.faq-icon');
        if (icon) icon.textContent = '−';
        const answer = btn.nextElementSibling;
        if (answer) answer.style.display = 'block';
      }
    });
  });
});