/* Typewriter effekt */
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = "";
  element.style.borderRight = "2px solid #14293f";
  element.style.paddingRight = "5px";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      setTimeout(() => {
        element.style.borderRight = "none";
      });
    }
  }

  type();
}

window.addEventListener("load", () => {
  const typingParagraph = document.querySelector(".typewriter-text");

  if (typingParagraph) {
    const originalText = typingParagraph.textContent;
    const delay = 0;
    setTimeout(() => {
      typeWriter(typingParagraph, originalText, 30);
    }, delay);
  }
});

/* reveal animation */
window.addEventListener("load", () => {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
  });
});
