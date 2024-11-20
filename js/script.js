console.log("Hello world")

// Set Current Year
const yearEl = document.querySelector(".year")
const currentYear = new Date().getFullYear()
console.log(currentYear)
yearEl.textContent = currentYear

//Make Mobile Navigation Work
const btnNavEl = document.querySelector(".btn-mobile-nav")
const headerEl = document.querySelector(".header")

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open")
})
