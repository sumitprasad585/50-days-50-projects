const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const now = new Date();

let second = now.getSeconds(),
    minute = now.getMinutes(),
    hour = now.getHours();

const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
document.querySelector('.time-hh').textContent = (hour < 10) ? `0${hour}` : hour;
document.querySelector('.time-mm').textContent = (minute < 10) ? `0${minute}` : minute;
document.querySelector('.time-ss').textContent = (second < 10) ? `0${second}` : second;
document.querySelector('.day').textContent = weekDay[now.getDay()];
let date = now.getDate();
if (date == 1 || date == 21 || date == 31) date += 'st';
else if (date == 2 || date == 22) date += 'nd';
else if (date == 3 || date == 23) date += 'rd'
else date += 'th'
document.querySelector('.date').textContent = `${date} ${months[now.getMonth()]} ${now.getUTCFullYear()}`;

hour = hour % 12;

secondHand.style.transform = `translate(-100%, -100%) rotate(${scale(second, 0, 60, 0, 360)}deg)`;
minuteHand.style.transform = `translate(-100%, -100%) rotate(${scale(minute, 0, 60, 0, 360)}deg)`;
hourHand.style.transform = `translate(-100%, -100%) rotate(${scale(hour, 0, 12, 0, 360)}deg)`;

setInterval(() => {
    document.querySelector('.time-ss').textContent = (second < 10) ? `0${second}` : second;

    second++;
    secondHand.style.transform = `translate(-100%, -100%) rotate(${scale(second, 0, 60, 0, 360)}deg)`;
    if (second == 60) {
        minute++;
        document.querySelector('.time-mm').textContent = (minute < 10) ? `0${minute}` : minute;
        minuteHand.style.transform = `translate(-100%, -100%) rotate(${scale(minute, 0, 60, 0, 360)}deg)`;
        second = 0;
    }
    if (minute == 60) {
        hour = now.getHours(); //24 hour format in the DOM
        document.querySelector('.time-hh').textContent = (hour < 10) ? `0${hour}` : hour;
        hour = hour % 12; // for scale function and correct angles of hands range is 0 to 12
        // hour++; //not needed since already called getHours() which will give correct incremented hours
        hourHand.style.transform = `translate(-100%, -100%) rotate(${scale(hour, 0, 12, 0, 360)}deg)`;
        minute = 0;
    }
    if (hour == 12) hour = 0;

}, 1000);

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}