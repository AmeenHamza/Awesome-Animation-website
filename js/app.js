let cursor = document.getElementById("cursor");
let blur = document.getElementById("cursor-blur");

document.addEventListener("mousemove", (dets) => {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    blur.style.left = dets.x - 200 + "px";
    blur.style.top = dets.y - 200 + "px";
})

// Nav Menu Toggle 

let toggleMenu = document.querySelector("#menu");
let navLinks = document.querySelector(".navLinks");
let navBar = document.querySelector("#nav");
toggleMenu.addEventListener("click", () => {
    if (navLinks.style.display === "none" || navLinks.style.display === "") {
        navLinks.style.display = "block";
    } else {
        navLinks.style.display = "none";
    }
});


// Food & Drink

let foodImage = document.querySelector("#foodImage");
let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");

first.addEventListener("click", () => {
    foodImage.src = "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5-1002x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1";
    first.style.backgroundColor = "#95C11E";
    third.style.backgroundColor = "#fff";
    second.style.backgroundColor = "#fff";
    const style = document.createElement('style');
    style.innerHTML = `
    .pictures span#first::after {
        display: block;
    }
        .pictures span#second::after {
            display: none;
        }
        .pictures span#third::after {
            display: none;
        }
    `;
    document.head.appendChild(style);
})

second.addEventListener("click", () => {
    foodImage.src = "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu-682x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1";
    const style = document.createElement('style');
    second.style.backgroundColor = "#95C11E";
    first.style.backgroundColor = "#fff";
    third.style.backgroundColor = "#fff";
    style.innerHTML = `
    .pictures span#second::after {
        display: block;
    }
        .pictures span#first::after {
            display: none;
        }
        .pictures span#third::after {
            display: none;
        }
    `;
    document.head.appendChild(style);
})

third.addEventListener("click", () => {
    foodImage.src = "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1-682x1024.jpg?strip=all&lossy=1&sharp=1&ssl=1";
    third.style.backgroundColor = "#95C11E";
    first.style.backgroundColor = "#fff";
    second.style.backgroundColor = "#fff";
    const style = document.createElement('style');
    style.innerHTML = `
    .pictures span#third::after {
        display: block;
    }
        .pictures span#first::after {
            display: none;
        }
        .pictures span#second::after {
            display: none;
        }
    `;
    document.head.appendChild(style);
})

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "80px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers : true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from(".about-us img, .about-us-in", {
    y : 60, // y-axis se kitna
    opacity : 0,
    duration : 1, // slow karne k lye
    stagger : 0.4, // elements ko alg alg render karwane k lye
    scrollTrigger : {
        trigger : ".about-us",
        scroller : "body",
        // markers : true,
        start : "top 70%",
        end : "top 65%",
        scrub : 2
    }
})

// gsap.from(".card", {
//     scale : 0.8, // y-axis se kitna
//     opacity : 0,
//     duration : 1, // slow karne k lye
//     stagger : 0.1, 
//     scrollTrigger : {
//         trigger : ".card",
//         scroller : "body",
//         // markers : true,
//         start : "top 70%",
//         end : "top 65%",
//         scrub : 2
//     }
// })

gsap.from("#colon1", {
    y : -70,
    x : -70,
    scrollTrigger : {
        trigger : "#colon1",
        scroller : "body",
        // markers : true,
        start : "top 55%",
        end : "top 45%",
        scrub : 4
    }
})

gsap.from("#colon2", {
    y : 70,
    x : 70,
    scrollTrigger : {
        trigger : "#colon2",
        scroller : "body",
        // markers : true,
        // start : "top 35%",
        // // end : "top 75%",
        scrub : 3
    }
})

gsap.from("#page4 h1", {
    y : 50,
    scrollTrigger : {
        trigger : "#page4 h1",
        scroller : "body",
        // markers : true,
        start : "top 90%",
        end : "top 80%",
        scrub : 2
    }
})