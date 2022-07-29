

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    mobile: {
        smooth: true
    },
    tablet: {
        smooth: true,
        breakpoint: 0,
    }
});


const headButton = document.querySelector(".down")
headButton.addEventListener("click", () => {
    scroll.scrollTo(".main");
}
);


const videoLink = document.querySelectorAll('.video');
const video = document.querySelectorAll('video');
video[0].volume=0;
for (let i in video) {
    videoLink[i].addEventListener("focusin", () => {  console.log("eee"); video[i].volume=1;});
    videoLink[i].addEventListener("focusout", () => {  video[i].volume=0;});
    videoLink[i].addEventListener("mouseenter", () => { console.log("eee"); video[i].volume=1;});
    videoLink[i].addEventListener("mouseleave", () => {  video[i].volume=0;});
 }
  
    


