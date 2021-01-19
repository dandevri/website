// https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/

window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`.post ul:first-of-type li a[href="#${id}"]`).parentElement.classList.add('active', 'read');
      } else {
        document.querySelector(`.post ul:first-of-type li a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  });

  // Track all h2 that have an `id` applied
  document.querySelectorAll('h2[id]').forEach((section) => {
    observer.observe(section);
  });

});


const toc = document.querySelector('.guide ul:first-of-type');
toc.insertAdjacentHTML('afterbegin', '<li><button>✕</button></li>');

const button = document.querySelector('.guide ul li button');

button.addEventListener('click', () => {
  toc.classList.toggle('hidden')
})
