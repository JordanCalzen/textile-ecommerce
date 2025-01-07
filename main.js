const scrollToTop = document.querySelector(".backp");

window.onscroll = function () {
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	);
};

scrollToTop.onclick = function () {
	window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollContainer = document.querySelector(".Category_pdt");

function customScrollLeft() {
	scrollContainer.scrollBy({
		left: -200, // Adjust the scroll amount
		behavior: "smooth", // Smooth scroll
	});
}

function scrollRight() {
	scrollContainer.scrollBy({
		left: 200, // Adjust the scroll amount
		behavior: "smooth", // Smooth scroll
	});
}

const menuBtn = document.querySelector(".menu_icon");
const sideBar = document.querySelector(".sidebar_and_overlay");
const xBtn = document.querySelector(".remove");

menuBtn.addEventListener("click", () => {
	menuBtn.style.display = "none";
	sideBar.classList.toggle("visible");
	document.body.classList.toggle("no-scroll");
});

xBtn.addEventListener("click", () => {
	menuBtn.style.display = "block";
	sideBar.classList.remove("visible");
	document.body.classList.remove("no-scroll");
});

overlay.addEventListener("click", () => {
	if (sideBar.classList.contains("visible")) {
		overlay.style.display = "block";
	} else {
		overlay.style.display = "none";
	}
	sideBar.classList.remove("visible");
	menuBtn.style.display = "block";
	document.body.classList.remove("no-scroll");
});
