/* ===== Typing Effect ===== */

const text = "Développeur Web & Étudiant en Génie Logiciel"

let index = 0

function type(){

if(index < text.length){

document.getElementById("typing").innerHTML += text.charAt(index)

index++

setTimeout(type,70)

}

}

type()



/* ===== Animation des compétences ===== */

window.addEventListener("scroll", function(){

let skills = document.querySelector("#skills")

let position = skills.getBoundingClientRect().top

let screenPosition = window.innerHeight / 1.3

if(position < screenPosition){

document.querySelector(".html").style.width = "90%"
document.querySelector(".css").style.width = "85%"
document.querySelector(".js").style.width = "75%"
document.querySelector(".network").style.width = "70%"

}

})



/* ===== Fade-in des sections ===== */

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show")

}

})

})

const hiddenElements = document.querySelectorAll("section")

hiddenElements.forEach(el => {

el.classList.add("hidden")

observer.observe(el)

})