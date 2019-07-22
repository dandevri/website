console.log('%c Computer says no', 'background: black; color: white; display: block; font-size: 5em;');

const animateButton = document.querySelector(".animate-button");

animateButton.addEventListener("click", () => {
  const parent = animateButton.closest(".image-motion");
  const picture = parent.querySelector("picture");
  picture.querySelector("source[media]").remove();
  animateButton.classList.add('animate-button-hide');
});
