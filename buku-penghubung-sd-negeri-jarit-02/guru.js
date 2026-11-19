document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('userEmail');
  if (el) el.textContent = 'Portal Guru - Belum terhubung';
  console.log('[GURU] Aplikasi dimuat. Backend:', APP_CONFIG.BACKEND_URL);
});