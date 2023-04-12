// toogle kelas aktif
const navbarNav = document.querySelector(".navbar-nav");

// ketika humberger menu diklik

document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik dluar sidebar untuk mwnghilangkan menu nav
const humburger = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
