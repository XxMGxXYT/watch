/*
    Important info:
    [1] We can use 12 hours format if we minus 12 from 24 hours format
    [2] Every 30deg is one hour => 360deg / 12h 
    [3] Every 0.25deg is one minute => 360deg / 1440m (In 24 format)
    [4] Every 0.5deg is one minute => 360deg / (1440 / 0.5)m (In 12 format)
*/
// Get the watch
let watch = document.querySelector(".watch .container .arrow")

setInterval(() => {
    // Get current local date
    let time = new Date()
    // Get current local hour
    let hour = time.getHours()
    // Check if hours in 24 hours format, and turn it to 12 hours format
    if (hour >= 13 && hour <= 24) { // If hours between the 13 and 24, minus 12 from it.
        hour -= 12
    }
    // Rotate degree = ((current hour * 30deg) + 180deg(set start point on 12)) + (current minutes * 0.5deg)
    watch.style.transform = `rotate(${((hour * 30) + 180) + (time.getMinutes() * 0.5)}deg)` // Set start point
}, 1000)
