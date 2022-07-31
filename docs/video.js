

let videoWork = (maxVolume) => {


const videoArea = document.querySelectorAll('.video__area');
    const video = document.querySelectorAll('video');


    for (let i in video) {
        video[i].volume=0;



        videoArea[i].addEventListener("click", () => {
                      
            if( !video[i].classList.contains(".paused")) { // если видео не на паузе то
                video[i].pause();                           // ставим на паузу при клике
                video[i].classList.toggle(".paused")        // добавляем класс на паузе
            }
            else {
                video[i].play();                        //если видео на паузе то запускаем
                 video[i].classList.toggle(".paused")   //класс паузы убирается
        }          
    });


    videoArea[i].addEventListener("focusin", () => {  console.log("eee"); video[i].volume=maxVolume;});
    videoArea[i].addEventListener("focusout", () => {  video[i].volume=0;});
    videoArea[i].addEventListener("mouseenter", () => { console.log("eee"); video[i].volume=maxVolume;});
    videoArea[i].addEventListener("mouseleave", () => {  video[i].volume=0;});

        
        }






         for (let i in video) {  
        
            videoArea[i].addEventListener("focusin", () => {  console.log("eee"); video[i].volume=maxVolume;});
            videoArea[i].addEventListener("focusout", () => {  video[i].volume=0;});
            videoArea[i].addEventListener("mouseenter", () => { console.log("eee"); video[i].volume=maxVolume;});
            videoArea[i].addEventListener("mouseleave", () => {  video[i].volume=0;});
        
         }


 }

 export function videoWork()