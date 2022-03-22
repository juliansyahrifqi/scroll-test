gsap.registerPlugin(ScrollTrigger);

let revealContainer = document.querySelectorAll(".reveal");
let stackContainer = document.querySelector(".stack-container");
let first = document.querySelector(".scroll-magic-image-first");
const imageScroll = document.querySelector('.scroll-magic');

// console.log(stackContainer);
// stackContainer.addEventListener("scroll", function (e) {
//   console.log(stackContainer);
// });

stackContainer.style.position = "fixed";

// gsap.from(".reveal-1", {
//   opacity: 1,
//   scrollTrigger: {
//     trigger: "#img-01",
//     start: "top top",
//     end: "top top",
//     scrub: true,
//   },
// });

gsap.to("#reveal-1", {
  autoAlpha: 1,
  yPercent: -100,
  scrollTrigger: {
    trigger: ".scroll-magic-image-first",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to("#reveal-2", {
  autoAlpha: 1,
  yPercent: -100,
  scrollTrigger: {
    trigger: "#img-03",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});




// revealContainer.forEach((stack) => {
//     let image = stack.querySelector("img");

//     let tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: stackContainer,
//         },
//     });

//     // tl.set(stack, {
//     //     autoAlpha: 1,
//     // });

//     tl.to(stack, {
//         rotation: -270, duration: 1, ease: "elastic"
//     });
//     // tl.from(stack, 1.5, {
//     //     xPercent: 100,
//     //     ease: Power2.out
//     // });

//     // tl.from(image, 1.5, {
//     //     yPercent: 20,
//     //     scale: 1.3,
//     //     delay: -1.5,
//     //     ease: Power2.out
//     // })

//     // gsap.to(first, {
//     //     duration: 1,
//     //     top: 10,
//     //     width: "100%",
//     // })

//     stackContainer.style.position = 'fixed';

//     // console.log(revealContainer);
// })