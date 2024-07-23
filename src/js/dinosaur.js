const container=document.querySelector(".dinosaur__container");
const dinosaur=document.querySelector(".dinosaur__dino");

const jump = function(){
    dinosaur.classList.add("jump");
};
container.addEventListener("click",()=> {
    jump();
})
