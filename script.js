const menuButton = document.getElementById("menu-button");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {
  navigation.classList.toggle("show");
});

const currentYear = document.getElementById("current-year");
currentYear.textContent = new Date().getFullYear();