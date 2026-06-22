const anniversaryDate = new Date("2025-06-22T00:00:00");
const musicButton = document.getElementById("musicButton");
const petals = document.querySelector(".petals");
const aboutYouUrl = "https://www.youtube.com/results?search_query=The+1975+About+You+official+audio";

function updateTimer() {
  const now = new Date();
  const elapsed = Math.max(0, now - anniversaryDate);

  const secondsTotal = Math.floor(elapsed / 1000);
  const days = Math.floor(secondsTotal / 86400);
  const hours = Math.floor((secondsTotal % 86400) / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = secondsTotal % 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

function createPetal() {
  const petal = document.createElement("span");
  const start = Math.random() * 100;
  const drift = (Math.random() * 180 - 90).toFixed(0);
  const duration = 8 + Math.random() * 7;
  const delay = Math.random() * 1.5;

  petal.className = "petal";
  petal.style.left = `${start}vw`;
  petal.style.setProperty("--drift", `${drift}px`);
  petal.style.animationDuration = `${duration}s`;
  petal.style.animationDelay = `${delay}s`;
  petal.style.opacity = `${0.38 + Math.random() * 0.5}`;

  petals.appendChild(petal);
  setTimeout(() => petal.remove(), (duration + delay) * 1000);
}

function createFallbackImages() {
  document.querySelectorAll(".photo-card img").forEach((image) => {
    image.addEventListener("error", () => {
      const number = image.dataset.fallback;
      image.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23f7b7c7'/%3E%3Cstop offset='.55' stop-color='%23fff2df'/%3E%3Cstop offset='1' stop-color='%23c99448'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='1000' fill='url(%23g)'/%3E%3Ccircle cx='400' cy='390' r='145' fill='%23fff7f8' opacity='.64'/%3E%3Cpath d='M400 660C235 555 180 462 224 379c38-70 135-68 176 6 41-74 138-76 176-6 44 83-11 176-176 281z' fill='%23c63f68'/%3E%3Ctext x='400' y='830' text-anchor='middle' font-family='Arial' font-size='48' font-weight='700' fill='%238e2143'%3EPhoto ${number}%3C/text%3E%3C/svg%3E`;
    }, { once: true });
  });
}

musicButton.addEventListener("click", () => {
  window.open(aboutYouUrl, "_blank", "noopener,noreferrer");
});

createFallbackImages();
updateTimer();
setInterval(updateTimer, 1000);
setInterval(createPetal, 520);
