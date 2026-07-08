//==============================
// NEXUS CURSOR
//==============================

const dot=document.querySelector(".cursor-dot");
const ring=document.querySelector(".cursor-ring");

let mouseX=0;
let mouseY=0;

window.addEventListener("mousemove",(e)=>{

mouseX=e.clientX;
mouseY=e.clientY;

gsap.set(dot,{
x:mouseX,
y:mouseY
});

});

gsap.ticker.add(()=>{

gsap.to(ring,{

x:mouseX,

y:mouseY,

duration:.18,

ease:"power3.out"

});

});

document.querySelectorAll(
"a,button,.skill-card,.project-card"
).forEach(item=>{

item.addEventListener("mouseenter",()=>{

ring.classList.add("cursor-hover");

});

item.addEventListener("mouseleave",()=>{

ring.classList.remove("cursor-hover");

});

});