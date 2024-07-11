const clickText = document.querySelector(".clickText");
const dropMenu = document.querySelector(".dropdown-menu");
document.addEventListener("DOMContentLoaded", ()=>{
    clickText.addEventListener("click", ()=>{
        dropMenu.classList.toggle("is-open");
    });
});
const btn = document.querySelector(".header-right__btn");
const btnDiv = document.querySelector(".header-right-btn-div");
const img = document.querySelector(".header-right-btn-div__img");
btn.addEventListener("click", ()=>{
    btnDiv.classList.toggle("clicked");
});

//# sourceMappingURL=index.7afa73b1.js.map
