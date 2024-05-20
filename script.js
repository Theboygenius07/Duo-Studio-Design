function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`
  };

  trailer.animate(keyframes, {
    duration: 800,
    fill: "forwards"
  });
};


  window.onmousemove = e => {
    const interactable = e.target.closest(".page1 video, .page2-cta, .page2-purple, .text-div");
    interacting = interactable !== null;    interacting = interactable !== null;

  const icon = document.getElementById("trailer-icon");

  animateTrailer(e, interacting);

  trailer.dataset.type = interacting ? interactable.dataset.type : "";

  if (interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  } else {
    // Hide the link when not interacting with the video or .navlink
    icon.className = "";
  }
};

const getTrailerClass = type => {
  switch (type) {
    case "video":
      return "link";
    default:
      return ""; // Empty string for other types
  }
};

// const cursorDot = document.querySelector("[data-cursor]");



    

init();gsap.registerPlugin(ScrollTrigger);

gsap.from(".tdv h1,.tdv h2", {
    y: 30,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.8,
    scale: 1.5,
   
})

var textTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-content",
    scroller: ".main",
    start: "top 90%",
    end: "top 0",
    scrub: 3,
  },
  // filter: "blur(0px)"
});

textTl.from(".text-content", {
  duration: 2,
  filter: "blur(0px)",
  ease: "power2.inOut", // You can adjust the easing function for a smoother effect
});

textTl.to(".text-content", {
  duration: 2,
  filter: "blur(15px)",
  ease: "power2.inOut", // You can adjust the easing function for a smoother effect
});


var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-content",
    scroller: ".main",
    start: "top 40%",
    end: "top 0",
    scrub: 1,
    pin: true,
    pinSpacing: false,
  },
});

tl.to(".page1 h1", { x: -100, y: 0, }, "anim");
tl.to(".page1 h2", { x: 100, y: 0 }, "anim");
tl.to(".page1 p", { x: -100, y: 0 }, "anim");

var videoTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 video",
    scroller: ".main",
    start: "top 90%",
    end: "top 0",
    scrub: 2,
  },
});

videoTl.to(".page1 video", { width: "90%" }, "anim");

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -115%",
    end: "top -120%",
    scrub: 3,
  },
});

tl2.to(".main, .page2", {
  backgroundColor: "white",
  color: "#000",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -280%",
    end: "top -300%",
    scrub: 3,
  },
});

tl3.to(".main", {
  backgroundColor: "black",
  color: "#000",
});

gsap.registerPlugin(ScrollTrigger);

//const animateCTA = (selector, show) => {

// ScrollTrigger for entering .page2-cta
ScrollTrigger.create({
  trigger: '.page2',
  start: 'top 80%', // Adjust the start position based on your needs
  stagger: 0.7,
  markers: true,
  onEnter: onEnterPageCTA('.page2-cta'),
  onLeave: onLeavePageCTA('.page2-cta'),
  onEnterBack: onEnterPageCTA('.page2-cta'), // Trigger on scroll back up
  onLeaveBack: onLeavePageCTA('.page2-cta'), // Trigger on scroll back up
});

// Event listener for mouseenter
document.querySelector('.page2-cta').addEventListener('mouseenter', onEnterPageCTA('.page2-cta'));

// Event listener for mouseleave
document.querySelector('.page2-cta').addEventListener('mouseleave', onLeavePageCTA('.page2-cta'));

var turnText = gsap.timeline({
  scrollTrigger: {
      trigger: ".page3 h1",
      scroller: ".page3",
      // markers:true,
      start: "top -280%",
      end: "top -300%",
      scrub: 3,
      pin: true,
      pinSpacing: true,
  }
})
turnText.from(".text-div h1",{
  y: -20,
  color: "#000",
opacity: 0,
})