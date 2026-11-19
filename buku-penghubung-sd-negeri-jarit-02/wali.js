document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('t');
  if (!token) {
    console.log('[WALI] Token tidak ditemukan di URL');
    return;
  }
  console.log('[WALI] Token diterima:', token.substring(0, 8) + '...');
  // Nanti: panggil backend untuk validasi dan ambil catatan
});