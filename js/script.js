// script.js
const videoButton = document.querySelector(".video-button");
const videoOverlay = document.getElementById("videoOverlay");
const closeVideo = document.getElementById("closeVideo");
const videoFrame = document.getElementById("videoFrame");

videoButton.addEventListener("click", () => {
  videoOverlay.style.display = "flex";
  videoFrame.src =
    "https://youtube.com/shorts/DUh6ffyTDu4?si=6cn2kZ_hObFTzUxt";
});

closeVideo.addEventListener("click", () => {
  videoOverlay.style.display = "none";
  videoFrame.src = ""; // Stop the video
});
