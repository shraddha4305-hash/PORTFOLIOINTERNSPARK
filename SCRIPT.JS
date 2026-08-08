```javascript
// Contact Form Success Message

document.addEventListener("DOMContentLoaded", function(){


const contactForm = document.getElementById("contactForm");



if(contactForm){


contactForm.addEventListener("submit", function(event){


event.preventDefault();



alert("✅ Your message has been successfully sent!");



contactForm.reset();



});


}





// Header Scroll Effect


const header = document.querySelector("header");



window.addEventListener("scroll", function(){


if(header){


if(window.scrollY > 50){


header.style.background =
"rgba(0,0,0,0.65)";


}


else{


header.style.background =
"rgba(0,0,0,0.25)";


}


}


});






// Card Animation


const cards = document.querySelectorAll(
".glass-card, .skill-card, .project-card, .internship-card"
);



cards.forEach(card=>{


card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="0.8s";


});




function animateCards(){


cards.forEach(card=>{


let position =
card.getBoundingClientRect().top;



let screen =
window.innerHeight;



if(position < screen - 100){


card.style.opacity="1";


card.style.transform="translateY(0)";


}


});


}



window.addEventListener("scroll",animateCards);


animateCards();

});
```
