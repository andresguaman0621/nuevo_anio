// script.js
const videoButton = document.querySelector(".video-button");
const videoOverlay = document.getElementById("videoOverlay");
const closeVideo = document.getElementById("closeVideo");
const videoFrame = document.getElementById("videoFrame");

videoButton.addEventListener("click", () => {
  videoOverlay.style.display = "flex";
  videoFrame.src =
    "https://www.youtube.com/embed/m85i0yEWytQ?si=6GOOCLsXe85nzC7K";
});

closeVideo.addEventListener("click", () => {
  videoOverlay.style.display = "none";
  videoFrame.src = ""; // Stop the video
});
