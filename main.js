/*
    Important info:
    [1] We can use 12 hours format if we minus 12 from 24 hours format
    [2] Every 30deg is one hour => 360deg / 12h 
    [3] Every 0.25deg is one minute => 360deg / 1440m (In 24 format)
    [4] Every 0.5deg is one minute => 360deg / (1440 / 0.5)m (In 12 format)
    [5] When the current degree be 360, it should get back to be Zero.
    [6] I always need to add 180 to the degree so it starts from the 12
*/
// Get the watch
let watch = document.querySelector(".watch .container .arrow")
let seconds = document.querySelector(".digitalWatch .seconds")
let minutes = document.querySelector(".digitalWatch .minutes")
let hours = document.querySelector(".digitalWatch .hours")

// watch.style.transform = rotate("0deg")

// Time set function
function watchFunc() {
    // Get current local date
    let time = new Date()
    // Get current local hour
    let hour = time.getHours()
    // Check if hours in 24 hours format, and turn it to 12 hours format
    if (hour >= 13 && hour <= 24) { // If hours between the 13 and 24, minus 12 from it.
        hour -= 12
    }
    // Get the current degree
    const currentDeg = watch.style.transform.slice(watch.style.transform.search(/([\d+])/), watch.style.transform.search(/([d])/))
    // Check if it's 360deg and update it to be 0deg
    if (currentDeg === "540") {
        watch.style.transform = `rotate(180deg)`
    }
    // Set seconds
    seconds.innerHTML = time.getSeconds()
    // Set minutes
    minutes.innerHTML = time.getMinutes()
    // Set hours
    hours.innerHTML = time.getHours()
    // Rotate degree = ((current hour * 30deg) + 180deg(set start point on 12)) + (current minutes * 0.5deg)
    watch.style.transform = `rotate(${((hour * 30) + 180) + (time.getMinutes() * 0.5)}deg)` // Set time every second
}

watchFunc()

setInterval(() => {
    watchFunc()
}, 1000)

// console.log("Test".(/T/))

console.log(watch.style.transform.search(/([\d+])/))
console.log(watch.style.transform.search(/([d])/))
console.log(watch.style.transform.slice(watch.style.transform.search(/([\d+])/), watch.style.transform.search(/([d])/)))