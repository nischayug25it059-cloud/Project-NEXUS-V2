gsap.registerPlugin(ScrollTrigger);

/* Hero */

gsap.from(".hero-left",{

    y:80,

    opacity:0,

    duration:1.2,

    ease:"power4.out"

});

gsap.from(".hero-right",{

    scale:.8,

    opacity:0,

    duration:1.4,

    delay:.2,

    ease:"power4.out"

});

/* Section Titles */

gsap.utils.toArray(".section-title").forEach(title=>{

    gsap.from(title,{

        scrollTrigger:{

            trigger:title,

            start:"top 85%"

        },

        y:60,

        opacity:0,

        duration:1,

        ease:"power3.out"

    });

});

/* Cards */

gsap.utils.toArray(

".skill-card,.project-box,.certificate-slide,.timeline-card,.about-card"

).forEach(card=>{

    gsap.from(card,{

        scrollTrigger:{

            trigger:card,

            start:"top 85%"

        },

        y:70,

        opacity:0,

        duration:1,

        ease:"power4.out"

    });

});