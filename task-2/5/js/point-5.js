// Get the image element and buttons
var imgElement = document.getElementById("slidingImage");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// src images and timer
var images = ["A1.png", "A2.png", "A3.png", "A4.png", "A5.png"];
var timerID = null;
var index = 0;

// functions
function startSliding(ImgObject) {
    var timerID = setInterval(() => {
        ImgObject.src = "./images/" + images[index];
        index = (index + 1) % images.length;
    }, 1000);

    return timerID;
}

function stopSliding(timerID) {
    clearInterval(timerID);
}

function showNextImage(ImgObject) {
    index = (index + 1) % images.length;
    ImgObject.src = "./images/" + images[index];
}

function showPrevImage(ImgObject) {
    index = (index - 1 + images.length) % images.length;
    ImgObject.src = "./images/" + images[index];
}

// Add event listeners to the buttons
startButton.addEventListener("click", () => {
    if (timerID === null) {
        timerID = startSliding(imgElement);
    }
});

stopButton.addEventListener("click", () => {
    if (timerID !== null) {
        stopSliding(timerID);
        timerID = null;
    }
});

nextButton.addEventListener("click", () => {
    showNextImage(imgElement);
});

prevButton.addEventListener("click", () => {
    showPrevImage(imgElement);
});
