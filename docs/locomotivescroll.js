

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



const headButton = document.querySelector(".down");
headButton.addEventListener("click", () => {
    scroll.scrollTo(".main");
}
);

const footerButton = document.querySelector(".footer__button");
footerButton.addEventListener("click", () => {
    scroll.scrollTo(".header");
}
);




  
    


