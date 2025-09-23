document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.querySelector(".download-button");
  const readNowButtons = document.querySelectorAll(".read-now-button");
  const exploreButtons = document.querySelectorAll("#download-options button");

  downloadButton.addEventListener("click", function () {
    alert("Downloading the full case study...");
  });

  readNowButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Loading the article...");
    });
  });

  exploreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert(`Downloading ${button.innerText} version...`);
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.querySelector(".image-container img");
  const mask = document.querySelector(".mask");

  window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;

    // Parallax Effect: Move image at a slower pace than the scroll
    imageContainer.style.transform = `translateY(${scrollPos * 0.5}px)`;

    // Mask Fade Out: As you scroll, the mask becomes transparent
    mask.style.opacity = 1 - scrollPos / 800;
  });
});
