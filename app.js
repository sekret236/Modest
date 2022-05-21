const contactForm = document.querySelector(".contact-form");
const closeBtn = document.querySelector(".close-button");

console.log (contactForm);
console.log (closeBtn);

function openContactForm() {
    contactForm.classList.add("show");
    contactForm.classList.remove("hide");
  }
  
  function closeContactForm() {
    contactForm.classList.add("hide");
    contactForm.classList.remove("show");
  }
function showContactFormByScroll() {

    if (window.pageYOffset > document.body.scrollHeight / 2) {
        openContactForm() ;
        window.removeEventListener("scroll", showContactFormByScroll);
    } 
}
window.addEventListener("scroll", showContactFormByScroll);

closeBtn.addEventListener("click", closeContactForm);

contactForm.addEventListener("click", function(e){
    if (e.target === contactForm) {
        closeContactForm();
    }
});


//mobile menu 

const mobileMenu = document.querySelector(".nav-mobile-menu");
const mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active-menu");
    if (mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    }
});

