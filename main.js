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
