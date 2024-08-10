const shareButton = document.querySelector(".share-btn");
const shareContent = document.querySelector(".share__info");


shareButton.addEventListener("click",()=>{
    shareContent.classList.toggle("active")
    shareButton.classList.toggle("active")
})