


document.addEventListener('DOMContentLoaded', function() {
const audio = document.querySelectorAll('audio');
for (let i in audio) {
  audio[i].volume=0.3;
}


const title = document.querySelectorAll(".flexitem__title");
const items = document.querySelectorAll(".flexitem");


    for (let i in items) {
items[i].addEventListener("focusin", () => { title[i].classList.add("hover"); audio[i].play();});
items[i].addEventListener("focusout", () => { title[i].classList.remove("hover"); audio[i].pause();});
items[i].addEventListener("mouseenter", () => { title[i].classList.add("hover"); audio[i].play();});
items[i].addEventListener("mouseleave", () => { title[i].classList.remove("hover"); audio[i].pause();});
}
});


    

