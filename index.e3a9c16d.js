var calculator=document.getElementById("calculator"),timeCalculator=document.getElementById("time-calculator"),biggestNumber=document.getElementById("biggest-number"),rockPaper=document.getElementById("rock-paper"),dinosaur=document.getElementById("dinosaur"),games=[{id:rockPaper,name:"Камінь-Ножиці-Папір",category:"game"},{id:calculator,name:"Калькулятор",category:"numerical"},{id:timeCalculator,name:"Калькулятор часу",category:"numerical"},{id:dinosaur,name:"Google динозаврик",category:"game"},{id:biggestNumber,name:"Найбільше число",category:"numerical"}],allSections=document.querySelectorAll("section"),numerical=document.getElementById("numerical"),numericalGames=games.filter((function(e){return"numerical"===e.category}));console.log(numericalGames);var game=document.getElementById("game"),gameGames=games.filter((function(e){return"game"===e.category})),acquaintance=document.getElementById("acquaintance"),acquaintanceGames=games.filter((function(e){return"acquaintance"===e.category}));numerical.addEventListener("click",(function(){allSections.forEach((function(e){e.style.display="none"})),numericalGames.forEach((function(e){e.id.style.display="block"}))})),game.addEventListener("click",(function(){allSections.forEach((function(e){e.style.display="none"})),gameGames.forEach((function(e){e.id.style.display="block"}))}));var showSections=document.getElementById("showSections");showSections.addEventListener("click",(function(){allSections.forEach((function(e){e.style.display="block"}))}));var clickText=document.querySelector(".clickText"),dropMenu=document.querySelector(".dropdown-menu"),arrow=document.querySelector(".drop-menu__img");clickText.addEventListener("click",(function(){dropMenu.classList.toggle("is-open"),arrow.classList.toggle("rotated")}));var btn=document.querySelector(".header-right__btn"),btnDiv=document.querySelector(".header-right-btn-div"),img1=document.querySelector(".header-right-btn-div__img.img1"),img2=document.querySelector(".header-right-btn-div__img.img2"),link=document.querySelectorAll("a");link.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault()}))})),btn.addEventListener("click",(function(){"none"!==img1.style.display?(img1.style.display="none",img2.style.display="block"):(img1.style.display="block",img2.style.display="none"),btnDiv.classList.toggle("clicked"),document.documentElement.classList.toggle("dark")}));
//# sourceMappingURL=index.e3a9c16d.js.map
