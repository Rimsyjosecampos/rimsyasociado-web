function showTab(id) {
document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
document.getElementById(id).classList.add('active');
const tabs = document.querySelectorAll('.nav-tab');
const index = ['inicio','carreras','caballos','hipodromos','historia','apuestas'].indexOf(id);
if (index >= 0) tabs[index].classList.add('active');
window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateCountdown() {
const target = new Date('2026-12-06T15:00:00');
const now = new Date();
const diff = target - now;
if (diff > 0) {
const d = Math.floor(diff / (1000 * 60 * 60 * 24));
const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
const m = Math.floor((diff / (1000 * 60)) % 60);
const s = Math.floor((diff / 1000) % 60);
document.getElementById('cd-days').textContent = String(d).padStart(2, '0');
document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
document.getElementById('cd-mins').textContent = String(m).padStart(2, '0');
document.getElementById('cd-secs').textContent = String(s).padStart(2, '0');
} else {
document.getElementById('cd-days').textContent = '00';
document.getElementById('cd-hours').textContent = '00';
document.getElementById('cd-mins').textContent = '00';
document.getElementById('cd-secs').textContent = '00';
}
}

updateCountdown();
setInterval(updateCountdown, 1000);
