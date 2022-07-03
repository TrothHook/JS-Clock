const clockBody = document.getElementById("clock-body");

const amPmDark = document.getElementById("am-pm");

const twelve = document.getElementById("twelve");
const twoFour = document.getElementById("two-four");

const sunday = document.getElementById("Sunday");
const monday = document.getElementById("Monday");
const tuesday = document.getElementById("Tuesday");
const wednesday = document.getElementById("Wednesday");
const thursday = document.getElementById("Thursday");
const friday = document.getElementById("Friday");
const saturday = document.getElementById("Saturday");

const darkMode = document.getElementById("dark-mode");




let hour = "";
let minute = "";
let second = "";
let clicked12 = false, clicked24 = false;


function hour24() {

    const timeNow = new Date();

    const hours = String(timeNow.getHours());
    const minutes = String(timeNow.getMinutes());
    const seconds = String(timeNow.getSeconds());

    if (hours.length !== 2) {
        hour = `0${hours}`;
    } else {
        hour = hours;
    }
    if (minutes.length !== 2) {
        minute = `0${minutes}`;
    } else {
        minute = minutes;
    }
    if (seconds.length !== 2) {
        second = `0${seconds}`;
    } else {
        second = seconds;
    }


    if (clicked24 === true && clicked12 === false) {
        clockBody.innerHTML = `<span class="now24" id="now24">${hour}:${minute}:${second}</span>`;
    } else {
        return
    }
}


function hour12() {

    const timeNow = new Date();
    const amPm = timeNow.toLocaleTimeString();


    if (clicked12 === true && clicked24 === false) {
        clockBody.innerHTML = `<span class="now12" id="now12">${amPm}</span>`;
    } else {
        return
    }
}

function defaultDisplay() {

    const timeNow = new Date();

    const hours = String(timeNow.getHours());
    const minutes = String(timeNow.getMinutes());
    const seconds = String(timeNow.getSeconds());

    if (hours.length !== 2) {
        hour = `0${hours}`;
    } else {
        hour = hours;
    }
    if (minutes.length !== 2) {
        minute = `0${minutes}`;
    } else {
        minute = minutes;
    }
    if (seconds.length !== 2) {
        second = `0${seconds}`;
    } else {
        second = seconds;
    }

    if ((clicked12 === true && clicked24 === false) || (clicked24 === true && clicked12 === false)) {
        return
    } else {
        clockBody.innerHTML = `<span class="now24" id="now24">${hour}:${minute}:${second}</span>`;
    }

}

setInterval(defaultDisplay, 1000);
twoFour.classList.add("active");


twelve.addEventListener("click", () => {
    setInterval(hour12, 1000);
    clicked12 = true;
    clicked24 = false;
    twelve.classList.add("active");
    twoFour.classList.remove("active");
});

twoFour.addEventListener("click", () => {
    setInterval(hour24, 1000);
    clicked12 = false;
    clicked24 = true;
    twoFour.classList.add("active");
    twelve.classList.remove("active");
});

function dayMatch() {
    const timeNow = new Date();

    const day = timeNow.getDay()

    switch (day) {
        case 0:
            sunday.classList.add("active");
            monday.classList.remove("active");
            tuesday.classList.remove("active");
            wednesday.classList.remove("active");
            thursday.classList.remove("active");
            friday.classList.remove("active");
            saturday.classList.remove("active");
            break;
        case 1:
            sunday.classList.remove("active");
            monday.classList.add("active");
            tuesday.classList.remove("active");
            wednesday.classList.remove("active");
            thursday.classList.remove("active");
            friday.classList.remove("active");
            saturday.classList.remove("active");
            break;
        case 2:
            sunday.classList.remove("active");
            monday.classList.remove("active");
            tuesday.classList.add("active");
            wednesday.classList.remove("active");
            thursday.classList.remove("active");
            friday.classList.remove("active");
            saturday.classList.remove("active");
            break;
        case 3:
            sunday.classList.remove("active");
            monday.classList.remove("active");
            tuesday.classList.remove("active");
            wednesday.classList.add("active");
            thursday.classList.remove("active");
            friday.classList.remove("active");
            saturday.classList.remove("active");
            break;
        case 4:
            sunday.classList.remove("active");
            monday.classList.remove("active");
            tuesday.classList.remove("active");
            wednesday.classList.remove("active");
            thursday.classList.add("active");
            friday.classList.remove("active");
            saturday.classList.remove("active");
            break;
        case 5:
            sunday.classList.remove("active");
            monday.classList.remove("active");
            tuesday.classList.remove("active");
            wednesday.classList.remove("active");
            thursday.classList.remove("active");
            friday.classList.add("active");
            saturday.classList.remove("active");
            break;
        case 6:
            sunday.classList.remove("active");
            monday.classList.remove("active");
            tuesday.classList.remove("active");
            wednesday.classList.remove("active");
            thursday.classList.remove("active");
            friday.classList.remove("active");
            saturday.classList.add("active");
            break;
        default:
            sunday.classList.remove("active");
            monday.classList.remove("active");
            tuesday.classList.remove("active");
            wednesday.classList.remove("active");
            thursday.classList.remove("active");
            friday.classList.remove("active");
            saturday.classList.remove("active");
            break;
    }
}

dayMatch();

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    sunday.classList.toggle("dark");
    monday.classList.toggle("dark");
    tuesday.classList.toggle("dark");
    wednesday.classList.toggle("dark");
    thursday.classList.toggle("dark");
    friday.classList.toggle("dark");
    saturday.classList.toggle("dark");

    clockBody.classList.toggle("dark");

    amPmDark.classList.toggle("dark");

    twelve.classList.toggle("dark");
    twoFour.classList.toggle("dark");

    darkMode.classList.toggle("dark");
});