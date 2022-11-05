// Scripts

// Start from the loading 
let tl = gsap.timeline({ delay: 1 });
tl.from("header", { duration: 0.6, ease: "power2. out", y: -60 });
tl.from(".hero-content", {
   duration: 0.6,
   ease: "power2. out",
   opacity: 0,
   y: -40,
});

// show my svg and start the moving
tl.from(".illustration", { duration: 0.6, ease: "power2. out", opacity: 0 });


// moving the red car
gsap.to("#red-car", {
   duration: 8,
   x: 1960,
   y: 439,
   ease: "none",
   repeat: 4,
   repeatDelay: 2,
});

// moving the blue car
gsap.to("#blue-car", {
   duration: 16,
   x: 572,
   y: 210,
   ease: "none",
   repeat: 5,
   repeatDelay: 1,
});

//moving the yellow car
gsap.to("#yellow-car", {
   duration: 7,
   x: 884,
   y: 1114,
   ease: "none",
   repeat: 4,
   repeatDelay: 1,
});





// gsap.from('header', { duration: 0.6, ease: "power2. out", y: -60 });
// gsap.from('.hero-content', { duration: 0.6, ease: "power2. out", opacity:0,  y: -40, delay: 1});
// gsap.from('.illustration', { duration: 0.6, ease: "power2. out", opacity:0, delay: 1.7});
