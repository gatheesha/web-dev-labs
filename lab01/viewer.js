const params = new URLSearchParams(window.location.search);
const currentDay = Number(params.get("day")) || 0;
let currentImage = 0;
let typeTimer = null;

const galleryTitle = document.getElementById("gallery-title");
const galleryImage = document.getElementById("gallery-image");
const galleryDesc = document.getElementById("gallery-desc");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

function renderGallery() {
  const day = timelineData[currentDay];
  const img = day.images[currentImage];
  galleryTitle.textContent = `${day.title} — ${day.date}`;
  galleryDesc.textContent = "";
  clearInterval(typeTimer);

  // preload, then crossfade in and only start typing once loaded
  galleryImage.classList.remove("loaded");
  const preload = new Image();
  preload.onload = () => {
    galleryImage.src = img.src;
    galleryImage.classList.add("loaded");
    typeText(img.desc);
  };
  preload.src = img.src;

  updateButtons();
}

// reveals description character by character
function typeText(text) {
  let i = 0;
  typeTimer = setInterval(() => {
    galleryDesc.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(typeTimer);
  }, 20);
}

function updateButtons() {
  const total = timelineData[currentDay].images.length;
  btnPrev.disabled = currentImage === 0;
  btnNext.disabled = currentImage === total - 1;
}

btnPrev.addEventListener("click", () => {
  if (currentImage > 0) {
    currentImage--;
    renderGallery();
  }
});

btnNext.addEventListener("click", () => {
  const total = timelineData[currentDay].images.length;
  if (currentImage < total - 1) {
    currentImage++;
    renderGallery();
  }
});

renderGallery();
