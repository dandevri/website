const scrollToTopBtn = document.getElementById("scrollToTopBtn")
const rootElement = document.documentElement;

// Scroll to top logic
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
