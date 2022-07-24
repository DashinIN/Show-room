

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
    
});

const headButton = document.querySelector(".down")
headButton.addEventListener("click", () => {
    scroll.scrollTo(".main");
}
);