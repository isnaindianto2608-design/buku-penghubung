/**
 * Konfigurasi aplikasi
 * ISI URL backend setelah Anda men-deploy Google Apps Script
 */

const APP_CONFIG = {
  // ⚠️ GANTI dengan URL Web App GAS Anda setelah deploy
  BACKEND_URL: 'https://script.google.com/macros/s/AKfy.../exec',

  SCHOOL_NAME: 'SD NEGERI JARIT 02',
  CLASS_NAME: '1',
  TEACHER_NAME: 'Mohammad Isna Indianto, S.Pd.',
  ACADEMIC_YEAR: '2026/2027',

  APP_VERSION: '1.0.0'
};

// Helper untuk panggil backend
async function callBackend(action, data) {
  const response = await fetch(APP_CONFIG.BACKEND_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action, data })
  });
  return response.json();
}