// Parallax effect for hero background and fade-in
(function(){
  const hero = document.querySelector('.hero');
  const heroContent = document.querySelector('.hero-content');
  window.addEventListener('load', ()=>{
    // show hero content with fade
    heroContent.classList.add('visible');
  });
  window.addEventListener('scroll', ()=>{
    const offset = window.pageYOffset;
    // simple parallax: move background position
    if(hero){
      hero.style.backgroundPositionY = offset * 0.5 + 'px';
    }
  });
})();