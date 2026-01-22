
anime({
  targets: '.line',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutQuad',
  duration: 2000,
  delay: anime.stagger(100),
  loop: true,
  direction: 'alternate', 
});