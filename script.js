// You can add interactivity like FAQ toggle or promotional banners here
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
  });
  