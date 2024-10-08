function toggleSubMenu(event) {
    // Mencegah href default jika ada
    event.preventDefault();
    
    // Ambil elemen submenu (anak dari item dropdown yang diklik)
    const submenu = event.target.nextElementSibling;

    // Jika submenu memiliki class hidden, hapus hidden (tampilkan submenu), jika tidak, tambahkan hidden (sembunyikan submenu)
    if (submenu.classList.contains('hidden')) {
        submenu.classList.remove('hidden');
    } else {
        submenu.classList.add('hidden');
    }
}
// Fungsi untuk mengubah konten tombol selama 3 detik
function setLoading(button, originalText) {
// Ubah konten tombol menjadi loading
button.innerHTML = `
    <span class="loading loading-spinner"></span>
    loading
`;

// Kembalikan konten tombol ke teks asli setelah 3 detik
setTimeout(function() {
    button.innerHTML = originalText;
}, 3000);
}


  function toggleChildOptions() {
  const childOptions = document.getElementById('childOptions');
  if (childOptions.style.display === 'flex') {
      childOptions.style.display = 'none';
  } else {
      childOptions.style.display = 'flex';
  }
}
// Fungsi untuk toggle "Read More" dan "Baca Sedikit"
function toggleReadMore() {
  var moreText = document.getElementById("moreText");
  var btnText = document.querySelector("button[onclick='toggleReadMore()']");

  if (moreText.classList.contains("hidden")) {
      moreText.classList.remove("hidden");
      btnText.innerHTML = "Baca Sedikit";
  } else {
      moreText.classList.add("hidden");
      btnText.innerHTML = "Lihat Lebih";
  }
}
// Update carousel indicators
const indicators = document.querySelectorAll('.carousel-indicator');
const carouselItems = document.querySelectorAll('.carousel-item');

function updateIndicators() {
  // Remove 'active' class from all indicators
  indicators.forEach((indicator, index) => {
      indicator.classList.remove('bg-gray-600');
      indicator.classList.add('bg-gray-400');
  });

  // Get the current active slide
  const activeSlide = Array.from(carouselItems).findIndex(item => {
      return item.classList.contains('active');
  });

  // Add 'active' class to the corresponding indicator
  indicators[activeSlide].classList.remove('bg-gray-400');
  indicators[activeSlide].classList.add('bg-gray-600');
}

// Add event listeners to track carousel slide changes
document.querySelectorAll('.carousel').forEach(carousel => {
  carousel.addEventListener('slid.bs.carousel', updateIndicators);
});

// Initialize indicators on page load
document.addEventListener('DOMContentLoaded', updateIndicators);

// Fungsi untuk menampilkan atau menyembunyikan sub-menu
function toggleSubMenu(event) {
  const submenu = event.target.nextElementSibling;
  submenu.classList.toggle('hidden');
}

// Fungsi untuk memilih ukuran produk
function selectSize(element) {
  const buttons = document.querySelectorAll('.size-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
}


// Fungsi untuk toggle menu
function toggleMenu() {
  const menuItems = document.getElementById('menu-items');
  menuItems.classList.toggle('hidden');
}
// Filter produk berdasarkan kategori
document.querySelectorAll('.category-link').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      const category = this.getAttribute('data-category');

      document.querySelectorAll('.product').forEach(product => {
          if (product.id === category) {
              product.style.display = 'block';
          } else {
              product.style.display = 'none';
          }
      });
  });
});