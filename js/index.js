// Your code goes here

// mouseover to change the nav item colors
const navLinks = document.querySelectorAll("a.nav-link");
console.log(navLinks);
navLinks.forEach((link) => {
	link.addEventListener("mouseover", (evt) => {
		evt.target.style.background = "#34C1DB";
		evt.target.style.color = "white";
	});
	link.addEventListener("mouseout", (evt) => {
		evt.target.style.background = "none";
		evt.target.style.color = "#212529";
	});
});

// shows a message upon press of any key, used event keydown

window.addEventListener("keydown", () => {
	alert(`Ooops!!! Stop pressing that!`);
});

// wheel

// window.addEventListener("wheel");
