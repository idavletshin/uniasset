const burger = document.querySelector(".burger");
const headerMenuList = document.querySelector(".header .menu__list-wrap");
const body = document.querySelector("body")

// window.addEventListener("load", function () {
//   setTimeout(function () {
//     window.scrollTo(0, 1);
//   }, 0);
// });

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  headerMenuList.classList.toggle('active')
  body.classList.toggle('--scroll-off')
})