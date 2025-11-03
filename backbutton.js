document.addEventListener('DOMContentLoaded', function() {
  const backBtn = document.querySelector('.back');
  if (backBtn) {
    backBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});