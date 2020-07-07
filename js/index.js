// Your code goes here
const navLinks = document.querySelectorAll("a.nav-link");
console.log(navLinks);

// navLinks[0].setAttribute("onMouseOver", "this.style.background='#34C1DB'");
// navLinks[0].setAttribute("onMouseOut", "this.style.background='none'");

// change background color for nav items on mouse hover
navLinks[0].addEventListener("mouseover", function (event) {
	event.target.style.background = "#34C1DB";
	event.target.style.color = "white";
});

navLinks[0].addEventListener("mouseout", function (event) {
	event.target.style.background = "none";
	event.target.style.color = "#212529";
});

navLinks[1].addEventListener("mouseover", function (event) {
	event.target.style.background = "#34C1DB";
	event.target.style.color = "white";
});

navLinks[1].addEventListener("mouseout", function (event) {
	event.target.style.background = "none";
	event.target.style.color = "#212529";
});

navLinks[2].addEventListener("mouseover", function (event) {
	event.target.style.background = "#34C1DB";
	event.target.style.color = "white";
});

navLinks[2].addEventListener("mouseout", function (event) {
	event.target.style.background = "none";
	event.target.style.color = "#212529";
});

navLinks[3].addEventListener("mouseover", function (event) {
	event.target.style.background = "#34C1DB";
	event.target.style.color = "white";
});

navLinks[3].addEventListener("mouseout", function (event) {
	event.target.style.background = "none";
	event.target.style.color = "#212529";
});

//
