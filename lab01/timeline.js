const timelineTrack = document.getElementById("timeline-track");

timelineData.forEach((day, i) => {
  const link = document.createElement("a");
  link.className = "day-btn";
  link.href = `viewer.html?day=${i}`;
  link.innerHTML = `<span class="day-date">${day.date} — ${day.title}</span><span class="day-caption">${day.caption}</span>`;
  timelineTrack.appendChild(link);
});
