
document.addEventListener('DOMContentLoaded', function() {

	let a = document.querySelector(".logo-back");
	a.classList.add("clear");

});

document.addEventListener('DOMContentLoaded', function() {

const audio = document.querySelectorAll('audio');
console.log(audio);
const items = document.querySelectorAll(".flexitem");
console.log(items);

    for (let i in items) {
items[i].addEventListener("mouseenter", () => { audio[i].play();});
items[i].addEventListener("mouseleave", () => { audio[i].pause();});
}
});