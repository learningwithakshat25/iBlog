let hamberger = document.querySelector("#hamberger");
let cross = document.querySelector("#cross");
let subnav = document.querySelector(".sub-nav");

hamberger.addEventListener("click" , function(){
    subnav.style.display = "flex";
})
cross.addEventListener("click" , function(){
    subnav.style.display = "none";
})