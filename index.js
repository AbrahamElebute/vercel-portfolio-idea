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

document.addEventListener("touchstart", (event) => {
  handleTouch(event);
});

document.addEventListener("touchmove", (event) => {
  handleTouch(event);
});

function handleTouch(event) {
  const cursorCircle = document.querySelector(".cursor-circle");
  const touch = event.touches[0];

  if (touch) {
    cursorCircle.style.left = touch.pageX + "px";
    cursorCircle.style.top = touch.pageY + "px";

    // Get the background color of the element at the touch position
    const elementAtTouch = document.elementFromPoint(
      touch.clientX,
      touch.clientY
    );
    const textColor = window.getComputedStyle(elementAtTouch).backgroundImage;
    cursorCircle.style.backgroundImage = textColor;
    console.log(textColor);
  }
}

let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 3000);
    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 3300);
  });
});
