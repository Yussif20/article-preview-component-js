const shareButton = document.querySelector(".share-btn");
const shareContent = document.querySelector(".share__info");

const clickHandler =()=>{
    shareContent.classList.toggle("active")
    shareButton.classList.toggle("active")
}

shareButton.addEventListener("click",clickHandler)
