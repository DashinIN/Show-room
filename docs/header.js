



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



const videoArea = document.querySelectorAll('.video__area'); //площадь видео
const video = document.querySelectorAll('video'); //видео тэг

let videoWork = (maxVolume) => {
    
    
        for (let i=0; i<=videoArea.length-1; i++) {
            video[i].volume=0;
            video[i].play(); 

            videoArea[i].addEventListener("click", () => {
                          
                if(!video[i].classList.contains("paused"))  { // если видео не на паузе то
                    video[i].pause();                
                    console.log("pause");           // ставим на паузу при клике
                    video[i].classList.toggle("paused") ;       // добавляем класс на паузе
                    } else {
                        video[i].play();     
                        console.log("play");                       //если видео на паузе то запускаем
                         video[i].classList.toggle("paused");  //класс паузы убирается
                    }      

             });
          
        
    
        videoArea[i].addEventListener("focusin", () => {   video[i].volume=maxVolume;});
        videoArea[i].addEventListener("focusout", () => {  video[i].volume=0;});
        videoArea[i].addEventListener("mouseenter", () => { video[i].volume=maxVolume;});
        videoArea[i].addEventListener("mouseleave", () => {  video[i].volume=0;});
    
            
        }
 }
    

 const audio = document.querySelectorAll('audio');
 const title = document.querySelectorAll(".audioitem__title");
 const items = document.querySelectorAll(".audioitem");

let audioPlay = (maxVolume) => {  
   
    for (let i=0;   i<=audio.length-1; i++) {
        audio[i].volume=maxVolume;
       }

       let audioIn = (title, i) => {
        if (title.length===0) {
            audio[i].play();
        } else {
            
            title[i].classList.add("hover") ; audio[i].play();
        }
       }

       let audioOut = (title, i) => {
        if (title.length===0) {
            audio[i].pause();
            
        } else {
            title[i].classList.remove("hover") ; audio[i].pause();
        }
       }

       for (let i=0;   i<=items.length-1; i++) {
            items[i].addEventListener("focusin", () => { audioIn(title,i);});
            items[i].addEventListener("focusout", () => { audioOut(title,i);});
            items[i].addEventListener("mouseenter", () => { audioIn(title,i)});
            items[i].addEventListener("mouseleave", () => { audioOut(title,i);});
            }
 }
    
let media =(volume) => {
    if (videoArea) {
        videoWork(volume);
    }
    if (audio) {
        audioPlay(volume);
    }
}

     document.addEventListener('DOMContentLoaded', function() {
        let a = document.querySelector(".logo-back");
        let check = document.querySelector(".audiocheck");
        let checkNo = document.querySelector(".audiocheck__left");
        let checkYes = document.querySelector(".audiocheck__right");

        checkNo.addEventListener("click", () => {
            console.log("net");
            media(0);
            check.style.display="none";
            a.classList.add("clear");
        })

        checkYes.addEventListener("click", () => {
            console.log("da");
            media(0.5);
            check.style.display="none";
            a.classList.add("clear");
        })
        
    });


    window.onload = function () {

        const paralax = document.querySelector('.paralax');
    
        if (paralax) {
 
            const headText = document.querySelector('.paralax__text');
    
         
            const forText = 50;
            
            const speed = 0.1;
    
            let positionX = 0, positionY = 0;
            let coordXpencent = 0, coordYpencent = 0;
    
    
    
    
    
            function setMouseParalaxStyle() {
                const distX = coordXpencent - positionX;
                const distY = coordYpencent - positionY;
    
                positionX+=distX*speed;
                positionY+=distY*speed;
    
                
                headText.style.cssText = `transform: translate(${-positionX/forText}%, ${-positionY/forText}%);`;
    
              requestAnimationFrame(setMouseParalaxStyle);
    
            }
    
            setMouseParalaxStyle();
    
            paralax.addEventListener('mousemove', function(e) {
    
                const paralaxWidth = paralax.offsetWidth;
                const paralaxHeight = paralax.offsetHeight;
    
                const coordX = e.pageX- paralaxWidth/2;
                const coordY = e.pageY - paralaxHeight/2;
    
                coordXpencent = coordX / paralaxWidth*100;
                coordYpencent = coordY / paralaxHeight *100;
                
    
            
    
            })
        }
    
    }