// gsap.registerPlugin(ScrollTrigger);

let revealContainer = document.querySelectorAll(".reveal");
let stackContainer = document.querySelector(".stack-container");
let first = document.querySelector(".scroll-magic-image-first");
const imageScroll = document.querySelector('.scroll-magic');

// console.log(stackContainer);
// stackContainer.addEventListener("scroll", function (e) {
//   console.log(stackContainer);
// });

// window.addEventListener('scroll', function(e) {
//     var bottom = window.height - imageScroll.height;

//     if(window.scrollTop > imageScroll.offsetTop) {
//         imageScroll.style.position = 'relative';
//     } else {
//         stackContainer.style.position = 'fixed';
//     }

//     console.log(bottom.offsetTop - bottom);
// })

// gsap.from(".reveal-1", {
//   opacity: 1,
//   scrollTrigger: {
//     trigger: "#img-01",
//     start: "top top",
//     end: "top top",
//     scrub: true,
//   },
// });

// gsap.to("#reveal-1", {
//   autoAlpha: 1,
//   yPercent: -100,
//   transformOrigin: "0% 150%",
//   scrollTrigger: {
//     trigger: ".scroll-magic-image-first",
//     start: "top top",
//     end: "bottom top",
//     scrub: true,
//   },
// });

// gsap.to("#reveal-2", {
//   autoAlpha: 1,
//   yPercent: -100,
//   scrollTrigger: {
//     trigger: "#img-02",
//     start: "top top",
//     end: "bottom top",
//     scrub: true,
//   },
// });

// gsap.to("#reveal-3", {
//   autoAlpha: 1,
//   yPercent: -100,
//   scrollTrigger: {
//     trigger: "#img-02",
//     start: "top top",
//     end: "bottom top",
//     scrub: true,
//   },
// });




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

// const controller = ScrollMagic.Controller();

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".scroll-magic",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: 0.8,
//     invalidateOnRefresh: true,
//   },
// });

// tl.set("#reveal-1", {
//     autoAlpha: 1,
// });

// tl.to("#reveal-1", 1.5, {
//   autoAlpha: 1,
//   yPercent: -100,
//   ease: Power2.out,
// });

// tl.to("#reveal-2", 1.5, {
//   autoAlpha: 1,
//   yPercent: -100,
//   ease: Power2.out,
// });

// const scene = new ScrollMagic.Scene({
//   triggerElement: ".stack-container",
//   triggerHook: "onLeave",
//   duration: "100%",
// }).setPin(".stack-container").setTween(tl).addTo(controller);

var tl = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();

tl.from("#reveal-1", 2, { y: 400, opacity: 0, autoAlpha: 1, ease: Power4.easeInOut });
tl.from("#reveal-2", 1.5, { y: 250, opacity: 0, ease: Power4.easeInOut });
tl.from("#reveal-3", 1.5, { y: 250, opacity: 0, ease: Power4.easeInOut });
tl.from("#reveal-4", 1.5, { y: 100, opacity: 0, ease: Power4.easeInOut });
tl.from("#reveal-5", 1.5, { y: 100, opacity: 0, ease: Power4.easeInOut });


// tl2.from("#box", 1, { opacity: 0, scale: 0 });
// tl2.to("#box", 0.5, {
//   left: "20%",
//   scale: 1.3,
//   borderColor: "white",
//   borderWidth: 12,
//   boxShadow: "1px 1px 0px 0px rgba(0,0,0,0.09)",
// });

const scene = new ScrollMagic.Scene({
  triggerElement: ".stack-container",
  triggerHook: "onLeave",
  duration: "100%",
})
  .setPin(".stack-container")
  .setTween(tl)
  .addTo(controller);


function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  console.log(tl.progress());
}