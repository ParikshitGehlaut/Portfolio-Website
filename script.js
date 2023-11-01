function smoothScroll(target) {
  const targetElement = document.querySelector(target);
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: "smooth",
  });
}

// Add click event listeners for navbar links
const navbarLinks = document.querySelectorAll("nav a");
navbarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("href");
    smoothScroll(target);
  });
});
