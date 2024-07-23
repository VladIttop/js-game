const container=document.querySelector(".dinosaur__container");
const dinosaur=document.querySelector(".dinosaur__dino");
const pointsEl = document.querySelector(".dinosaur__points");
const cactus = document.querySelector(".dinosaur__cactus");
let x = Math.floor(dinosaur.getBoundingClientRect().x + dinosaur.getBoundingClientRect().width/2)
let y = Math.floor(dinosaur.getBoundingClientRect().y + dinosaur.getBoundingClientRect().width/2)
let points = 0
let timer1;
let timer2;
let timer3;
let isanimation = false;
const jump = function(){
    dinosaur.classList.add("jump");
};
container.addEventListener("click",()=> {
    jump();
})
