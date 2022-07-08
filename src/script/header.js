
const burgerMenu = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");
if(burgerMenu) {
    burgerMenu.addEventListener("click", function(e) {
        document.body.classList.toggle("_lock");
        burgerMenu.classList.toggle("_active");
        headerNav.classList.toggle("_active");
    })
}

// Переход по ссылкам

const menuLinks = document.querySelectorAll(".header__nav-link[data-goto]");
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    })
}

function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
    if (burgerMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        burgerMenu.classList.remove("_active");
        headerNav.classList.remove("_active");
    }
    window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
    });
    }
    
}