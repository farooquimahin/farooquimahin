// main.js

// Initialize AOS (Animation on Scroll)
AOS.init();

// GSAP Background Animation
gsap.to("body", {
    duration: 60,
    backgroundColor: "#00bcd4",
    ease: "power1.inOut",
    repeat: -1, // Infinite loop
    yoyo: true, // Make it reverse after reaching the end
});

// GSAP for moving elements in the background (can be particles or gradient)
gsap.to(".header", {
    backgroundPosition: "200% 200%",
    duration: 120,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
});

// GSAP Hover Animations for Team Members
const teamMembers = document.querySelectorAll('.team-member');
teamMembers.forEach(member => {
    member.addEventListener('mouseover', () => {
        gsap.to(member, {
            scale: 1.1,
            rotation: 5,
            duration: 0.5,
            ease: "power1.inOut",
        });
    });

    member.addEventListener('mouseout', () => {
        gsap.to(member, {
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "power1.inOut",
        });
    });
});
