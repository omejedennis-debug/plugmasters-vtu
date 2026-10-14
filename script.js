function openModal(type){
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById('modalTitle').innerText = 'Buy '+type.toUpperCase();
  }
  function closeModal(){ document.getElementById('modal').classList.add('hidden'); }
  function pay(){
    let phone = document.getElementById('phone').value;
    let amt = document.getElementById('amount').value;
    if(!phone || !amt) return alert('Fill phone and amount');
    alert('Demo: Will buy for '+phone+' - ₦'+amt+'\nNext step we connect real API');
    closeModal();
  }

//   function showAllServices(){
//     document.getElementById('allServicesModal').classList.remove('hidden');
//   }
//   function closeAllServices(){
//     document.getElementById('allServicesModal').classList.add('hidden');
//   }

  function showAllServices(){
    document.getElementById('allServicesModal').classList.add('active');
    document.body.style.overflow = 'hidden'; // stop background scroll
  }
  function closeAllServices(){
    document.getElementById('allServicesModal').classList.remove('active');
    document.body.style.overflow = 'auto';
  }


  let currentAd = 0;
const slides = document.querySelectorAll('.ad-slide');
const dots = document.querySelectorAll('.dot');

function showAd(index){
  slides.forEach(s=>s.classList.remove('active'));
  dots.forEach(d=>d.classList.remove('active'));
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

setInterval(()=>{
  currentAd = (currentAd + 1) % slides.length;
  showAd(currentAd);
}, 3000); // slide every 3 seconds like OPay

// swipe with finger
let startX=0;
document.getElementById('adsSlider').addEventListener('touchstart', e=> startX = e.touches[0].clientX);
document.getElementById('adsSlider').addEventListener('touchend', e=>{
  if(e.changedTouches[0].clientX < startX - 50) { currentAd=(currentAd+1)%slides.length; showAd(currentAd); }
  if(e.changedTouches[0].clientX > startX + 50) { currentAd=(currentAd-1+slides.length)%slides.length; showAd(currentAd); }
});

