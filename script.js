// THEME SWITCH
const themeBtn = document.getElementById("theme-btn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    let mode = document.body.classList.contains("dark") ? "dark" : "light";
    themeBtn.textContent = mode === "dark" ? "☀️" : "🌙";
    localStorage.setItem("theme", mode);
});

// PROFILE FADE-IN
const profile = document.querySelector(".profile");

const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        profile.classList.add("show");
    }
}, { threshold: 0.5 });

observer.observe(profile);

// TYPING EFFECT
function typeEffect(element, speed = 80) {
    const text = element.innerHTML;
    element.innerHTML = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".typing").forEach(el => typeEffect(el));
});

// NAVBAR ACTIVE SWITCH
const navItems = document.querySelectorAll(".curved-nav li");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});

const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop real submit

  // show popup
  popup.style.display = "flex";

  // clear form
  form.reset();
});

closePopup.addEventListener("click", function () {
  popup.style.display = "none";
});

const text = "WELCOME TO MY WEBSITE";
const typingElement = document.getElementById("typing");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 120); // typing speed
  }
}

typeEffect();
