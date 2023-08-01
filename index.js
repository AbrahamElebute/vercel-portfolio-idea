function changeColorWithDelay(element, className, delay) {
  setTimeout(function () {
    element.classList.add(className);
    setTimeout(function () {
      element.classList.remove(className);
      var nextElement = element.nextElementSibling;
      if (nextElement && nextElement.classList.contains("text_bg")) {
        changeColorWithDelay(nextElement, className, delay);
      } else {
        // Start all over again after the current cycle finishes
        var firstElement = document.querySelector(".text_bg");
        changeColorWithDelay(firstElement, className, delay);
      }
    }, delay);
  }, delay / 100);
}

window.onload = function () {
  var animatedTextBg1 = document.querySelector(".animated-text_bg-1");
  changeColorWithDelay(animatedTextBg1, "on", 3000);
};
document.addEventListener("mousemove", (event) => {
  const cursorCircle = document.querySelector(".cursor-circle");
  cursorCircle.style.left = event.pageX + "px";
  cursorCircle.style.top = event.pageY + "px";
  // Get the background color of the text at the cursor position
  const elementAtCursor = document.elementFromPoint(
    event.clientX,
    event.clientY
  );
  const textColor = window.getComputedStyle(elementAtCursor).backgroundImage;
  cursorCircle.style.backgroundImage = textColor;
  console.log(textColor);
});
