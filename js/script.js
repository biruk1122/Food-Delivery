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

//Smooth Scrolling
const allLinks = document.querySelectorAll("a:Link")

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    const href = link.getAttribute("href")

    //Scrol back to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })

    //Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href)
      sectionEl.scrollIntoView({ behavior: "smooth" })
    }

    //Close Mobile Navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open")
  })
})
