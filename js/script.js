window.addEventListener('scroll', function() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.querySelector("nav").classList.add('sticky');
  } else {
    document.querySelector("nav").classList.remove('sticky');
  }
})


const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('opened');
})
