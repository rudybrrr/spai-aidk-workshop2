const slides = Array.from(document.querySelectorAll(".slide"));

slides.forEach((slide) => {
  const existingStage = Array.from(slide.children).find(
    (child) => child.classList && child.classList.contains("stage"),
  );
  if (existingStage) return;

  const stage = document.createElement("div");
  stage.className = "stage";

  while (slide.firstChild) {
    stage.appendChild(slide.firstChild);
  }

  slide.appendChild(stage);
});

function fitSlide(index = window.deckNavigation?.current ?? 0) {
  const slide = slides[index];
  if (!slide) return;

  const stage = slide.querySelector(".stage");
  if (!stage) return;

  if (window.innerWidth <= 980) {
    stage.style.setProperty("--fit-scale", "1");
    return;
  }

  stage.style.setProperty("--fit-scale", "1");

  requestAnimationFrame(() => {
    const style = window.getComputedStyle(slide);
    const paddingX = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const paddingY = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);

    const availableWidth = Math.max(320, slide.clientWidth - paddingX);
    const availableHeight = Math.max(320, slide.clientHeight - paddingY);

    const neededWidth = Math.max(stage.scrollWidth, stage.getBoundingClientRect().width);
    const neededHeight = Math.max(stage.scrollHeight, stage.getBoundingClientRect().height);

    const scale = Math.min(1, availableWidth / neededWidth, availableHeight / neededHeight);
    stage.style.setProperty("--fit-scale", String(Math.max(0.68, scale)));
  });
}

window.deckSlides = slides;
window.fitSlide = fitSlide;
