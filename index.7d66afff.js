var slider1=document.querySelector(".slider-list"),slides=document.querySelectorAll(".slider-list__slide"),prevButton=document.querySelector(".button-previous"),nextButton=document.querySelector(".button-next"),currentIndex=0;function updateSliderPosition(){slider1.style.transform="translateX(-".concat(100*currentIndex,"%)");var e=610*currentIndex;slider1.style.transform="translateX(-".concat(e,"px)")}console.log(slider1),prevButton.addEventListener("click",(function(){currentIndex>0&&(currentIndex--,updateSliderPosition())})),nextButton.addEventListener("click",(function(){currentIndex<slides.length-1&&(currentIndex++,updateSliderPosition())}));
//# sourceMappingURL=index.7d66afff.js.map
