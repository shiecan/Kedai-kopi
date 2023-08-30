// Toogle kelas active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika menu di klik
document.querySelector("#burger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar side bar untuk menghilangkan nav
const menu = document.querySelector("#burger-menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");
});
