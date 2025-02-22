let startTime, endTime;

function startSpeedTest() {

document.getElementById('speedResult').textContent = 'Testing...';

const imageLink = "https://source.unsplash.com/random?topics=nature";
const imageSize = "100000"; // Example size in bytes (100KB), adjust as needed

startTime = new Date().getTime();

fetch(imageLink)
.then(response => response.blob())
.then(blob => {

endTime = new Date().getTime();

calculateSpeed(imageSize);

});

}

function calculateSpeed(imageSize) {

const durationInSeconds = (endTime - startTime) / 1000;

// Convert bytes to bits
const bitsLoaded = imageSize * 8;

// Calculate speeds in bps, kbps, mbps
let speedInBps = (bitsLoaded / durationInSeconds).toFixed(2);
let speedInKbps = (speedInBps / 1024).toFixed(2);
let speedInMbps = (speedInKbps / 1024).toFixed(2);

document.getElementById('speedResult').innerHTML =
`<span style='font-weight:bold'>${speedInKbps} kbps (${speedInMbps} Mbps)</span>`;
}
