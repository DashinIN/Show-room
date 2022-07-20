


document.addEventListener('DOMContentLoaded', function() {
	
	
	let a = document.querySelector(".logo-back");
	a.classList.add("clear");

});

document.addEventListener('DOMContentLoaded', function() {
const audio = document.querySelectorAll('audio');
const items = document.querySelectorAll(".flexitem");

    for (let i in items) {
items[i].addEventListener("focusin", () => { audio[i].play();});
items[i].addEventListener("focusout", () => { audio[i].pause();});
items[i].addEventListener("mouseenter", () => { audio[i].play();});
items[i].addEventListener("mouseleave", () => { audio[i].pause();});
}
});

