// hardcoded data for v1, will be replaced by Cloudinary later
const timelineData = [
  {
    date: "2026-01-10",
    images: [
      { src: "https://picsum.photos/seed/10a/800/500", desc: "First entry for this day. Describe what happened here." },
      { src: "https://picsum.photos/seed/10b/800/500", desc: "Second image for the same day, different moment." }
    ]
  },
  {
    date: "2026-01-11",
    images: [
      { src: "https://picsum.photos/seed/11a/800/500", desc: "A new day, a new set of images and descriptions." }
    ]
  },
  {
    date: "2026-01-12",
    images: [
      { src: "https://picsum.photos/seed/12a/800/500", desc: "Third day entry, first image." },
      { src: "https://picsum.photos/seed/12b/800/500", desc: "Third day entry, second image." },
      { src: "https://picsum.photos/seed/12c/800/500", desc: "Third day entry, third image." }
    ]
  }
];

const timelineView = document.getElementById("timeline-view");
const galleryView = document.getElementById("gallery-view");
const timelineTrack = document.getElementById("timeline-track");
const galleryImage = document.getElementById("gallery-image");
const galleryDesc = document.getElementById("gallery-desc");

let currentDay = 0;
let currentImage = 0;
let typeTimer = null;

function renderTimeline() {
  timelineTrack.innerHTML = "";
  timelineData.forEach((day, i) => {
    const btn = document.createElement("button");
    btn.className = "day-btn";
    btn.textContent = day.date;
    btn.addEventListener("click", () => openDay(i));
    timelineTrack.appendChild(btn);
  });
}

function openDay(dayIndex) {
  currentDay = dayIndex;
  currentImage = 0;
  timelineView.classList.add("hidden");
  galleryView.classList.remove("hidden");
  renderGallery();
}

function renderGallery() {
  const img = timelineData[currentDay].images[currentImage];
  galleryImage.src = img.src;
  typeText(img.desc);
}

// reveals description character by character
function typeText(text) {
  clearInterval(typeTimer);
  galleryDesc.textContent = "";
  let i = 0;
  typeTimer = setInterval(() => {
    galleryDesc.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(typeTimer);
  }, 20);
}

document.getElementById("btn-prev").addEventListener("click", () => {
  const total = timelineData[currentDay].images.length;
  currentImage = (currentImage - 1 + total) % total;
  renderGallery();
});

document.getElementById("btn-next").addEventListener("click", () => {
  const total = timelineData[currentDay].images.length;
  currentImage = (currentImage + 1) % total;
  renderGallery();
});

document.getElementById("btn-back").addEventListener("click", () => {
  galleryView.classList.add("hidden");
  timelineView.classList.remove("hidden");
});

renderTimeline();
