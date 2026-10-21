document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('guestbookForm');
  const reviewsGrid = document.getElementById('reviewsGrid');
  const STORAGE_KEY = 'benteng_pendem_reviews';

  // Data awal jika localStorage masih kosong
  const initialReviews = [
    {
      name: "Budi Santoso",
      city: "Semarang",
      rating: "5",
      comment: "Tempat sejarah yang sangat menarik! Suasana rindang dan kawanan rusanya sangat ramah anak.",
      date: "20/10/2026"
    },
    {
      name: "Siti Rahmawati",
      city: "Yogyakarta",
      rating: "4",
      comment: "Arsitektur bentengnya eksotis sekali untuk foto-foto. Sangat direkomendasikan jika ke Cilacap.",
      date: "15/10/2026"
    }
  ];

  // Fungsi Ambil Data Ulasan
  function getReviews() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialReviews;
  }

  // Fungsi Render Ulasan ke HTML
  function renderReviews() {
    if (!reviewsGrid) return;
    const reviews = getReviews();
    reviewsGrid.innerHTML = '';

    reviews.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card-beranda';
      card.style.borderTop = '4px solid #1b3b2b';
      
      const stars = '⭐'.repeat(parseInt(item.rating));

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <h4 style="margin:0; color: #1b3b2b;">${escapeHTML(item.name)}</h4>
          <small style="color: #888;">${item.date}</small>
        </div>
        <p style="font-size: 0.85rem; color: #666; margin-bottom: 0.5rem;">📍 ${escapeHTML(item.city)}</p>
        <div style="margin-bottom: 0.8rem;">${stars}</div>
        <p style="color: #444; font-size: 0.95rem;">"${escapeHTML(item.comment)}"</p>
      `;
      reviewsGrid.appendChild(card);
    });
  }

  // Sanitasi Input untuk Keamanan (XSS)
  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  // Event Submit Form
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('gbName').value.trim();
      const city = document.getElementById('gbCity').value.trim();
      const rating = form.querySelector('input[name="rating"]:checked').value;
      const comment = document.getElementById('gbComment').value.trim();
      const today = new Date().toLocaleDateString('id-ID');

      if (!name || !city || !comment) return;

      const newReview = { name, city, rating, comment, date: today };
      const reviews = getReviews();
      reviews.unshift(newReview); // Tambahkan ke paling atas

      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
      form.reset();
      renderReviews();
      alert('Terima kasih! Ulasan Anda telah berhasil disimpan.');
    });
  }

  renderReviews();
});