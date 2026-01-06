// Typewriter effect for any element
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
      // Remove cursor after typing is done
      setTimeout(() => {
        element.style.borderRight = "none";
      });
    }
  }

  type();
}

// Wait for page to load
window.addEventListener("load", () => {
  // For specific paragraph - add a class to target it
  const typingParagraph = document.querySelector(".typewriter-text");

  if (typingParagraph) {
    const originalText = typingParagraph.textContent;
    const delay = 0;
    setTimeout(() => {
      typeWriter(typingParagraph, originalText, 30);
    }, delay);
  }
});
