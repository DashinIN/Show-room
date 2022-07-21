


document.addEventListener('DOMContentLoaded', function() {
	
	
	let a = document.querySelector(".logo-back");
  let b = document.querySelector("body");
  b.style.overflow = "all";
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



window.onload = function () {

  const paralax = document.querySelector('.paralax');

  if (paralax) {
     

      const headText = document.querySelector('.hi__body');

   
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
          

          console.log(coordX);
          console.log(coordY);
          console.log(coordXpencent);
          console.log(coordYpencent);


      })
  }

}