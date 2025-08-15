// -----------------card scroll up method and everthing animate---------------
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;
    if (revealtop < windowHeight - revealpoint) {
      reveals[i].classList.add("actives");
    } else {
      reveals[i].classList.remove("actives");
    }
  }
}

window.addEventListener("scroll", animationL);
function animationL() {
  var animation = document.querySelectorAll(".animationL");
  for (var i = 0; i < animation.length; i++) {
    var windowHeight = window.innerHeight;
    var animationtop = animation[i].getBoundingClientRect().top;
    var animationpoint = 100;
    if (animationtop < windowHeight - animationpoint) {
      animation[i].classList.add("animationLeft");
    } else {
      animation[i].classList.remove("animationLeft");
    }
  }
}
window.addEventListener("scroll", animationR);
function animationR() {
  var animationR = document.querySelectorAll(".animationR");
  for (var i = 0; i < animationR.length; i++) {
    var windowHeight = window.innerHeight;
    var animationRtop = animationR[i].getBoundingClientRect().top;
    var animationRpoint = 100;
    if (animationRtop < windowHeight - animationRpoint) {
      animationR[i].classList.add("animationRight");
    } else {
      animationR[i].classList.remove("animationRight");
    }
  }
}

// footer year
document.getElementById("y").textContent = new Date().getFullYear();

// reveal on scroll
const els = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in-view");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);
els.forEach((el) => io.observe(el));

// Client Testimonie

const slider = document.getElementById("slider");
let cards = Array.from(slider.children);
let currentIndex = 0;

function updateCards() {
  cards.forEach((card, index) => {
    card.classList.remove("active");
  });
  cards[1].classList.add("active");
}

function nextSlide() {
  slider.appendChild(cards[0]);
  cards = Array.from(slider.children);
  updateCards();
}

function prevSlide() {
  slider.insertBefore(cards[cards.length - 1], cards[0]);
  cards = Array.from(slider.children);
  updateCards();
}

document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

updateCards();
