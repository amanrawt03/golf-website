// navbar scroll animation
gsap.to('#nav', {
    backgroundColor: "black",
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top: -10%",
        end: "top: -11%",
        scrub: 1
    }
})

// main scroll animation
gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top: -40%",
        end: "top: -80%",
        scrub: 2
    }
})

// follow cursor and torch
var bindu = document.querySelector(".bindu");
function followCursor() {

    var bindu_torch = document.querySelector(".bindu-torch");
    window.addEventListener("mousemove", (dets) => {

        bindu.style.left = dets.clientX + 3 + "px"
        bindu.style.top = dets.clientY + 3 + "px"

        bindu_torch.style.transform = `translate(${dets.clientX - 200}px, ${dets.clientY - 200}px)`
    })


}
followCursor();


// var h4all = document.querySelectorAll("#nav h4");
// h4all.forEach((el) => {
//     el.addEventListener("mouseenter", () => {
//         bindu.style.scale = 3
//         bindu.style.border = "1px solid white"
//         bindu.style.backgroundColor = "transparent"
//     })
//     el.addEventListener("mouseleave", () => {
//         bindu.style.scale = 1
//         bindu.style.border = "none"
//         bindu.style.backgroundColor = "#aad72e"
//     })
// });


gsap.from(".about-us img,#text", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {

        trigger: ".about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub:2
    }
})

gsap.from(".cards .card", {
    scale: .8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {

        trigger: ".cards",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub:1
    }
})

// quotes
gsap.from("#left", {
    y: -70,
    x: -70,

    scrollTrigger: {

        trigger: "#left",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub:4,
    }
})
gsap.from("#right", {
    y: 70,
    x: 70,

    scrollTrigger: {

        trigger: "#left",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub:4
    }
})


gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub:4
        // ease: Power3,
    }
})

