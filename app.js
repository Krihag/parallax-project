const parallaxEl = document.querySelectorAll(".parallax");
const main = document.querySelector("main");
const mainText = document.querySelector(".main-text");

let x = 0;
let y = 0;

// parallaxEl.forEach((element) => {});

window.addEventListener("scroll", () => {
  let newValue = window.scrollY * 2.5 + "px";
  mainText.style.left = newValue;
});

window.addEventListener("mousemove", function (e) {
  x = e.clientX - window.innerWidth / 2;
  y = e.clientY - window.innerHeight / 2;

  parallaxEl.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    let isInLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

    el.style.transform = ` translateY(calc(-50% + ${
      y * speedy
    }px)) translateX(calc(-50% + ${x * speedx}px))`;
  });
});

if (window.innerWidth >= 725) {
  main.style.maxHeight = `${window.innerWidth * 0.46}px`;
} else {
  main.style.maxHeight = `${window.innerWidth * 1.45}px`;
}
