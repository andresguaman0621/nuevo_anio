// script.js
const videoButton = document.querySelector(".video-button");
const videoOverlay = document.getElementById("videoOverlay");
const closeVideo = document.getElementById("closeVideo");
const videoFrame = document.getElementById("videoFrame");

videoButton.addEventListener("click", () => {
  videoOverlay.style.display = "flex";
  videoFrame.src =
    "https://www.youtube.com/embed/MCfRN8HaYlw?si=0ZvozfGubLlHXNKJ";
});

closeVideo.addEventListener("click", () => {
  videoOverlay.style.display = "none";
  videoFrame.src = ""; // Stop the video
});
