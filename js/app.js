// slide fade header
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// show login   
let btnMembers = document.querySelector('.js-account')
let openModal = document.querySelector('.js-modal')
let btnClose = document.querySelector('.js-close')
let modalContainer = document.querySelector('.js-container')
function showModalLogin(){
    openModal.classList.add('open')
}
function hiddenModalLogin(){
    openModal.classList.remove('open')
}
btnMembers.addEventListener('click', showModalLogin)
btnClose.addEventListener('click',hiddenModalLogin)
openModal.addEventListener('click',hiddenModalLogin)
modalContainer.addEventListener('click',function(event){
    event.stopPropagation()
})
// sliderm list product file
