const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav-bar");
const logo = document.querySelector("#logo");

burger.addEventListener("click", () => {
  nav.style.display = "flex";
  burger.style.display = "none";
  logo.style.display = "none";
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  nav.style.display = "none";
  burger.style.display = "block";
  logo.style.display = "block";
  document.body.style.overflow = "unset";
});
