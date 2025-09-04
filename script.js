document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('bookingForm');
  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const service = document.getElementById('service').value;

      if(!name || !phone || !service) {
        [name, phone, service].forEach((val, idx) => {
          if(!val) {
            form[idx].style.borderColor = '#f7c8e0';
            setTimeout(()=>{form[idx].style.borderColor = '';}, 1800);
          }
        });
        return;
      }

      const message =
        'Hello Nail Goals ✨,%0A' +
        'I’d like to book an appointment. Here are my details:%0A%0A' +
        'Name: ' + encodeURIComponent(name) + '%0A' +
        'Phone: ' + encodeURIComponent(phone) + '%0A' +
        'Service: ' + encodeURIComponent(service) + '%0A%0A' +
        'Please confirm a suitable time.';

      const whatsappUrl = `https://wa.me/919902817053?text=${message}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // Subtle animation
  const revealOnScroll = (selector) => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll(selector).forEach(el => observer.observe(el));
  };
  revealOnScroll('.service');
  revealOnScroll('.gallery-img, .gallery-placeholder, .review');

  // Fade-in effect styles
  const style = document.createElement('style');
  style.innerHTML = `
    .fade-in {
      opacity: 1 !important;
      transform: translateY(0) scale(1) !important;
      transition: opacity 0.9s cubic-bezier(.4,0,.2,1), transform 0.9s cubic-bezier(.4,0,.2,1);
    }
    .service, .gallery-img, .gallery-placeholder, .review {
      opacity: 0;
      transform: translateY(24px) scale(0.98);
    }
  `;
  document.head.appendChild(style);
});