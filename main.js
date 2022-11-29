let countdowndate = new Date("Dec 7, 2022 01:59:59").getTime();

let counter = setInterval(() => {
    // get date now
    let dateNow = new Date().getTime();
    // find the date differance between now and countdown date 
    let datediff = countdowndate - dateNow;
    // get time units

    // let days = Math.floor(datediff / 1000 / 60 / 60 / 24);
    let days = Math.floor(datediff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor(datediff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(datediff % (1000 * 60) / 1000);

    document.querySelector("main .container .count .countNum .days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector("main .container .count .countNum .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector("main .container .count .countNum .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector("main .container .count .countNum .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (datediff < 0) {
        clearInterval(counter);
    }
}, 1000);

