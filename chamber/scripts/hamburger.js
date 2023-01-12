const navbutton = document.querySelector("#nav-button");
const navitems = document.querySelectorAll(".nav-item");
// menuitems will be a Node List of the list items

navbutton.addEventListener("click", () => {
	navitems.forEach((item) => item.classList.toggle("open"));
	navbutton.classList.toggle("close");
});