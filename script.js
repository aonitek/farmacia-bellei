// NAV scroll
var nav = document.getElementById('nav');
window.addEventListener('scroll', function(){
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu
document.getElementById('menuBtn').addEventListener('click', function(){
  document.getElementById('mobileMenu').classList.add('open');
});
document.getElementById('menuClose').addEventListener('click', function(){
  document.getElementById('mobileMenu').classList.remove('open');
});
document.querySelectorAll('.menu-link').forEach(function(el){
  el.addEventListener('click', function(){
    document.getElementById('mobileMenu').classList.remove('open');
  });
});

// Reveal on scroll
var revealEls = document.querySelectorAll('.reveal');
var revObs = new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){
      e.target.classList.add('visible');
      revObs.unobserve(e.target);
    }
  });
}, {threshold:0.08, rootMargin:'0px 0px -40px 0px'});
revealEls.forEach(function(el){ revObs.observe(el); });

// Form
function handleForm(e){
  e.preventDefault();
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('formOk').style.display = 'block';
}