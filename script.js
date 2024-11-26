const preloader = document.querySelector('.preloader');
const fadeEffect = setInterval(() => {
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 0.1;
  } else {
    clearInterval(fadeEffect);
  }
}, 100);

window.onload = function(){
  let boot = new Audio('./media/start.mp3');
  boot.play();
};
window.addEventListener('load', () => {
  fadeEffect;
  preloader.style.zIndex = "1";
  startupSeq();
});

function startupSeq(){
  let t1 = gsap.timeline({delay: 0});
  t1.to(".col", {
    top: 0,
    duration: 3,
    ease: "power4.inOut"
  });
  t1.to(".c-1 .item",{
    top: 0,
    stagger: 0.25,
    duration: 3,
    ease: "power4.inOut"
  }, "-=2");
  t1.to(".c-2 .item",{
    top: 0,
    stagger: -0.25,
    duration: 3,
    ease: "power4.inOut"
  }, "-=4");
  t1.to(".c-3 .item",{
    top: 0,
    stagger: 0.25,
    duration: 3,
    ease: "power4.inOut"
  }, "-=4");
  t1.to(".c-4 .item",{
    top: 0,
    stagger: -0.25,
    duration: 3,
    ease: "power4.inOut"
  }, "-=4");
  t1.to(".c-5 .item",{
    top: 0,
    stagger: 0.25,
    duration: 3,
    ease: "power4.inOut"
  }, "-=4");
  t1.to(".container",{
    scale: 6,
    duration: 4,
    ease: "power4.inOut"
  }, "-=2");
  t1.to(".nav-item a, .title p, .preview img",{
    top: 0,
    stagger: 0.075,
    duration: 1,
    ease: "power3.out"
  }, "-=1.5");
  t1.to(".icon ion-icon, .icon-2 ion-icon",{
    scale: 1,
    stagger: 0.05,
    ease: "power3.out"
  }, "-=1");
}

function clickAudio(){
  new Audio('./media/click.wav').play();
}