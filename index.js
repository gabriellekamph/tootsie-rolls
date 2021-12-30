// FUNCTION TO TOGGLE MENU

function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("navbar").classList.toggle("active");
}

// FUNCTION TO CLOSE COOKIES BAR

function closeCookies() {
  document.getElementById("cookies").style.display = "none";
}

// FUNCTION TO CREATE WAVE IN HERO SECTION

const hero = document.querySelector(".hero");
let heroWave = document.createElement("img");
heroWave.src = window.innerWidth < 740 ? "./img/mobile-wave.svg" : "./img/hero-wave-desktop.svg";
heroWave.classList.add("hero-wave");
hero.insertAdjacentElement("beforeend", heroWave);

window.addEventListener("resize", () => {
  heroWave.src = window.innerWidth < 740 ? "./img/mobile-wave.svg" : "./img/hero-wave-desktop.svg";
});