/*=========================================
        PROJECT FILTER
=========================================*/

const filterButtons = document.querySelectorAll(".project-filters button");

const cards = document.querySelectorAll(".project-box");

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        filterButtons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        const filter=button.textContent.trim().toLowerCase();

        cards.forEach(card=>{

            if(

                filter==="all" ||

                card.classList.contains(filter) ||

                (filter==="data analytics" && card.classList.contains("data"))

            ){

                card.style.display="block";

                setTimeout(()=>{

                    card.style.opacity="1";

                    card.style.transform="translateY(0px)";

                },50);

            }

            else{

                card.style.opacity="0";

                card.style.transform="translateY(30px)";

                setTimeout(()=>{

                    card.style.display="none";

                },300);

            }

        });

    });

});