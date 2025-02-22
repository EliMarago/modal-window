"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".show-modal");


const openModal = function(){
  modal.classList.remove("hidden")
  overlay.classList.remove("hidden")
}

for(let i = 0; i < btnOpen.length; i++){
  btnOpen[i].addEventListener("click" , openModal)
}


const closeModal = function(){
  modal.classList.add("hidden")
  overlay.classList.add("hidden")
}
btnClose.addEventListener("click",closeModal)

overlay.addEventListener("click", closeModal)

document.addEventListener("keydown", function(e){
  if(e.key === "Escape" && !modal.classList.contains("hidden")){
    closeModal();
  }
})

document.querySelector("body").style.background = "#DF9755"