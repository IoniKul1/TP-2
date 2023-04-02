window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const content = document.querySelector('.content');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    content.style.transform = 'translateY(' + scrollPosition * 1 + 'px)';
    const link = document.querySelector('.navigation_1-link');
const tooltip = document.querySelector('.navigation_1-tooltip');

link.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none';
});
});
