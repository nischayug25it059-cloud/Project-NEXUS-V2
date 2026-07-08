// =============================
// MAGNETIC BUTTONS
// =============================

const magneticButtons = document.querySelectorAll(
".primary-btn,.secondary-btn,.resume-btn"
);

magneticButtons.forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

gsap.to(button,{

x:x*0.25,

y:y*0.25,

duration:.35,

ease:"power3.out"

});

});

button.addEventListener("mouseleave",()=>{

gsap.to(button,{

x:0,

y:0,

duration:.55,

ease:"elastic.out(1,.45)"

});

});

});