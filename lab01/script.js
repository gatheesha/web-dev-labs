// hardcoded data for v1, will be replaced by Cloudinary later
const timelineData = [
  {
    date: "12 Jan 2026",
    title: "Freshers Icebreaker",
    caption: "First meetup of the semester, welcoming new members.",
    images: [
      { src: "https://picsum.photos/seed/bb1a/800/500", desc: "New members introducing themselves in English for the first time at Basha Buddy." },
      { src: "https://picsum.photos/seed/bb1b/800/500", desc: "Icebreaker games to help freshers get comfortable speaking in front of a group." }
    ]
  },
  {
    date: "19 Jan 2026",
    title: "Impromptu Speaking Session",
    caption: "Members speak on random topics with no preparation.",
    images: [
      { src: "https://picsum.photos/seed/bb2a/800/500", desc: "Members picking random topics and speaking for two minutes with no preparation." }
    ]
  },
  {
    date: "26 Jan 2026",
    title: "Debate Night",
    caption: "Two teams debate a motion in front of the club.",
    images: [
      { src: "https://picsum.photos/seed/bb3a/800/500", desc: "Two teams debating a motion in front of the full club." },
      { src: "https://picsum.photos/seed/bb3b/800/500", desc: "Audience voting on the winning team after closing arguments." },
      { src: "https://picsum.photos/seed/bb3c/800/500", desc: "Certificates handed out to the best speakers of the night." }
    ]
  }
];

const landingView = document.getElementById("landing-view");
const timelineView = document.getElementById("timeline-view");
const galleryView = document.getElementById("gallery-view");
const timelineTrack = document.getElementById("timeline-track");
const galleryTitle = document.getElementById("gallery-title");
const galleryImage = document.getElementById("gallery-image");
const galleryDesc = document.getElementById("gallery-desc");

let currentDay = 0;
let currentImage = 0;
let typeTimer = null;

function showView(view) {
  [landingView, timelineView, galleryView].forEach(v => v.classList.add("hidden"));
  view.classList.remove("hidden");
}

function renderTimeline() {
  timelineTrack.innerHTML = "";
  timelineData.forEach((day, i) => {
    const btn = document.createElement("button");
    btn.className = "day-btn";
    btn.innerHTML = `<span class="day-date">${day.date} — ${day.title}</span><span class="day-caption">${day.caption}</span>`;
    btn.addEventListener("click", () => openDay(i));
    timelineTrack.appendChild(btn);
  });
}

function openDay(dayIndex) {
  currentDay = dayIndex;
  currentImage = 0;
  showView(galleryView);
  renderGallery();
}

function renderGallery() {
  const day = timelineData[currentDay];
  const img = day.images[currentImage];
  galleryTitle.textContent = `${day.title} — ${day.date}`;
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

document.getElementById("btn-enter").addEventListener("click", () => showView(timelineView));

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

document.getElementById("btn-back").addEventListener("click", () => showView(timelineView));

renderTimeline();
