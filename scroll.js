
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
});
/*Home*/ 
sr.reveal('.home__social-icon',{ interval: 200}); 
/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 
/*Scroll FAQs */
sr.reveal('.parent-tab',{interval: 180}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 
/*Skill*/
sr.reveal('.skill-right-col', {interval:200});
/*About*/
sr.reveal('.about-right-col',{});
sr.reveal('.about-info',{delay:200});
sr.reveal('.CV',{delay: 200}); 