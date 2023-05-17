const root = document.querySelector(":root");
const displayDigitalTime = document.querySelector("#display-clock-digital");

function setTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  //analog time
  root.style.setProperty(
    "--degrees-hours",
    Math.floor((hours * 360) / 12) + "deg"
  );
  root.style.setProperty(
    "--degrees-minutes",
    Math.floor((minutes * 360) / 60) + "deg"
  );
  root.style.setProperty(
    "--degrees-seconds",
    Math.floor((seconds * 360) / 60) + "deg"
  );
  //console.log(root.getAttribute("style"));

  //digital time
  displayDigitalTimeString(hours, minutes, seconds);
}

function displayDigitalTimeString(hours, minutes, seconds) {
  const separator = seconds % 2 === 0 ? ":" : " ";
  hours = makeTimeBinary(hours);
  minutes = makeTimeBinary(minutes);
  seconds = makeTimeBinary(seconds);

  displayDigitalTime.innerText =
    hours + separator + minutes + separator + seconds;
}

function makeTimeBinary(time) {
  // return time < 10 ? "0" + time : time.toString();

  // return ("0" + time.toString()).slice(-2)

  let timeBinary = "";
  if (time < 10) {
    timeBinary = "0" + time;
  } else {
    timeBinary = time.toString();
  }
  return timeBinary;
}

// update time every 1000 ms (= 1 second)
const intervalID = setInterval(setTime, 1000);
