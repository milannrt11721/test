document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-btn");
    const navbarIzgled = document.getElementById("navbar-izgled");
    const spanIcon = document.querySelector(".span1 span");

    toggleBtn.addEventListener("click", function () {
        navbarIzgled.classList.toggle("active"); 
        spanIcon.classList.toggle("rotated");  
    });
});


const { innerHeight } = window;
/*
gsap.from("#zoom-out h2", {
    scale: 50, stagger: 0.25, duration: 3,
    scrollTrigger: {
        trigger: "#zoom-out",
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 3
    }
});*/
