let hourhand = document.querySelector(".hour");
let secondhand = document.querySelector(".second");
let minutehand = document.querySelector(".minute");
let rot = 5;
setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  hourhand.style.transform = `rotate(${hour * 30 + minute / 2}deg)`;
  minutehand.style.transform = `rotate(${minute * 6}deg)`;
  secondhand.style.transform = `rotate(${6 * second}deg)`;
}, 1000);
