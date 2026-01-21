  /*document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal();

    sr.reveal('.about-text', {
      origin: 'left',
      distance: '50px',
      duration: 1200,
      delay: 100,
      easing: 'ease-in-out',
      reset: false
    });

    sr.reveal('.about-image', {
      origin: 'right',
      distance: '50px',
      duration: 1200,
      delay: 300,
      easing: 'ease-in-out',
      reset: false
    });
  });
*/


  //Bugged

  document.querySelectorAll('.accordion-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('active');
  });
});

function openTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}
