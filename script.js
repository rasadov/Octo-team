// Member's Cards
const cards = document.querySelectorAll(".member-link")

cards.forEach((card) => {
    card.addEventListener("click", ()=>{
        const infoBar = document.getElementById(card.dataset.member)
        cards.forEach((c)=>{c.classList.remove("team-member-active")})
        card.classList.add("team-member-active")
        document.querySelectorAll(".member-info").forEach((mi) => {mi.classList.add("hidden")})
        infoBar.classList.remove("hidden")
    })
})

// Fade-in animation while scrolling down for elements in hour of code

const lines = document.querySelectorAll(".line")
if (lines.length > 0){
// const hocs = document.querySelectorAll("section.hoc")

const observer = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            lines[0].classList.add("visible")
        }
    })
})
const observer2 = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            lines[1].classList.add("visible")
        }
    })
})
const observer3 = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            lines[2].classList.add("visible")
        }
    })
})

observer.observe(lines[0]);
observer2.observe(lines[1]);
observer3.observe(lines[2]);
}
// end


// third page's animations

// rockets coordination
// CHECK THE Website.html FOR INFORMATION ABOUT SCROLL BAR
let height = document.body.scrollHeight - window.innerHeight

let rockety = document.getElementById('rocket-y')
let flame = document.getElementById('rocket-flame')

window.onscroll = function() {
    let y = (window.scrollY / height) * 100
    console.log(rockety.style.height)
    rockety.style.height = y + "%"
    flame.style.height = y + "%"
}


// Fade-in animation while scrolling down for elements in third page

const wlines = document.querySelectorAll("div.web-info")
// const hocs = document.querySelectorAll("section.hoc")

if (wlines.length > 0){

const web1 = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            wlines[0].classList.add("visible")
        }
    })
})
const web2 = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            wlines[1].classList.add("visible")
        }
    })
})
const web3 = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            wlines[2].classList.add("visible")
        }
    })
})
// new
const h1web_3 = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            document.querySelector("h1.web-3").classList.add("visible")
        }
    })
})
const pweb_3 = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            document.querySelector("p.web-3").classList.add("visible")
        }
    })
})

const h1web_4 = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            document.querySelector("div.second").classList.add("visible")
        }
    })
})

const h1web_5 = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            document.querySelector("div.third").classList.add("visible")
        }
    })
})

codeacad = document.querySelectorAll("p.web-4")



web1.observe(wlines[0]);
web2.observe(wlines[1]);
web3.observe(wlines[2]);
pweb_3.observe(document.querySelector("p.web-3"))
h1web_3.observe(document.querySelector('h1.web-3'))
h1web_4.observe(document.querySelector('div.second'))
h1web_5.observe(document.querySelector('div.third'))

}
// end





