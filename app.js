// Clock
const deg = 6;
const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');

// set every 1 seconds, jarum bergerak
setInterval(function(){
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;

	hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
	mn.style.transform = `rotateZ(${mm}deg)`;
	sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000); 

// Mode Handle
const darkToggle = document.getElementById('toggle-dark-mode');
const ligthToggle = document.getElementById('toggle-ligth-mode');
darkToggle.addEventListener('click', function() {
  document.body.style.background = '#091921';
})

ligthToggle.addEventListener('click', function() {
  document.body.style.background = '#ffffff';
})


// Mendaftarkan service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js').then(function(registration) {
      // Registration was successful
      // Berhasil mendaftarkan Service worker di halaman situs
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      // Gagal mendaftarkan Service worker di halaman situs
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
