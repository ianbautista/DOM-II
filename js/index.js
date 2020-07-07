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

// alerts a message when load finishes using load.
window.addEventListener("load", () => {
	alert(`Welcome to Fun Bus!`);
});

// flips the photo with mouseover. toggle the flip with mouseleave.
const funBus = document.querySelector("header.intro img");
funBus.addEventListener("mouseover", (evt) => {
	evt.target.style.transform = "scaleX(-1)";
});
funBus.addEventListener("mouseleave", (evt) => {
	evt.target.style.transform = null;
});

// inverts the color of the photo with mousedown. toggles with mouseup.
funBus.addEventListener("mousedown", (evt) => {
	evt.target.style.filter = "invert(1)";
});
funBus.addEventListener("mouseup", (evt) => {
	evt.target.style.filter = null;
});

// change header color when clicked
const header = document.querySelector("header.main-navigation");
header.addEventListener("click", () => {
	header.style.background = "#34C1DB";
});
header.addEventListener("mouseleave", () => {
	header.style.background = null;
});

// alert message when resized
window.addEventListener("resize", () => {
	alert(`Stop resizing me!`);
});

// preventing nav-items from refreshing page
navLinks.forEach((link) => {
	link.addEventListener("click", (evt) => {
		evt.preventDefault();
	});
});

// change paragraph text to uppercase on doubleclick
const p = document.querySelectorAll("p");
console.log(p);
p.forEach((para) => {
	para.addEventListener("dblclick", (evt) => {
		evt.target.style.textTransform = "uppercase";
	});
});
