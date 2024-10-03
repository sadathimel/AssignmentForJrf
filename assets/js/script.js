"use strict";

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

function scrollToWhatwedo() {
  document.getElementById("whatwedo").scrollIntoView({ behavior: "smooth" });
}
function scrollToDigikoein() {
  document.getElementById("Digikoein").scrollIntoView({ behavior: "smooth" });
}

// slider
// var arrow_one = document.querySelector(".arrow_one");
// var arrow_two = document.querySelector(".arrow_two");
// arrow_one.addEventListener("click", function () {
//   var lis = document.querySelectorAll(".carousel li");
//   lis.forEach((li) => {
//     if(li.value = 1){
//       console.log(li.value)
//       gsap.to(".card1",{x:"-400px"})
//     }
//   });
// });

const arrowOne = document.querySelector(".arrow_one");
const arrowTwo = document.querySelector(".arrow_two");
const lis = document.querySelectorAll(".carousel li");
let currentIndex = 0;
const totalItems = lis.length;

// Handle left arrow click
arrowOne.addEventListener("click", function () {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - 1;
  updateSlider();
});

// Handle right arrow click
arrowTwo.addEventListener("click", function () {
  currentIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : 0;
  updateSlider();
});

// Update slider position using GSAP
function updateSlider() {
  const targetX = -currentIndex * 400; // 400 is the width of each card
  gsap.to(".carousel ul", {
    x: targetX + "px",
    duration: 0.5,
    ease: "power2.out",
  });
  console.log(`Current Slide: ${currentIndex + 1}`);
}

var PaymentSystem = document.querySelector(".PaymentSystem");
var CurrencyExchange = document.querySelector(".CurrencyExchange");
var FoundTransfer = document.querySelector(".FoundTransfer");
var PaymentSystem1 = document.querySelector(".PaymentSystem1");
var CurrencyExchange1 = document.querySelector(".CurrencyExchange1");
var FundTransfer1 = document.querySelector(".FundTransfer1");

PaymentSystem.addEventListener("click", function () {
  one();
});
CurrencyExchange.addEventListener("click", function () {
  two();
});
FoundTransfer.addEventListener("click", function () {
  three();
});

function one() {
  PaymentSystem.classList.add("hidden");

  CurrencyExchange.classList.remove("hidden");
  FoundTransfer.classList.remove("hidden");

  PaymentSystem1.classList.remove("hidden");

  CurrencyExchange1.classList.add("hidden");
  FundTransfer1.classList.add("hidden");
}
function two() {
  PaymentSystem.classList.remove("hidden");

  CurrencyExchange.classList.add("hidden");
  FoundTransfer.classList.remove("hidden");

  PaymentSystem1.classList.add("hidden");

  CurrencyExchange1.classList.remove("hidden");
  FundTransfer1.classList.add("hidden");
}
function three() {
  PaymentSystem.classList.remove("hidden");

  CurrencyExchange.classList.remove("hidden");
  FoundTransfer.classList.add("hidden");

  PaymentSystem1.classList.add("hidden");

  CurrencyExchange1.classList.add("hidden");
  FundTransfer1.classList.remove("hidden");
}
