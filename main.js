const scrollToTop = document.querySelector(".backp");

window.onscroll = function () {
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		backToTopButton.style.display = "block"; // Show button
	} else {
		backToTopButton.style.display = "none"; // Hide button
	}
};

scrollToTop.onclick = function () {
	window.scrollTo({ top: 0, behavior: "smooth" });
};
