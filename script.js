const root = document.querySelector(":root");
const displayDigitalTime = document.querySelector("#display-clock-digital");

function setTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  //analog time
  root.style.setProperty("--degrees-hours", hours);
  root.style.setProperty("--degrees-minutes", minutes);
  root.style.setProperty("--degrees-seconds", seconds);
  //console.log(root.getAttribute("style"));

  //digital time
  const hoursBinary = makeTimeBinary(hours);
  const minutesBinary = makeTimeBinary(minutes);
  const secondsBinary = makeTimeBinary(seconds);

  if (seconds % 2 === 0) {
    displayDigitalTime.innerText =
      hoursBinary + ":" + minutesBinary + ":" + secondsBinary;
  } else {
    displayDigitalTime.innerText =
      hoursBinary + " " + minutesBinary + " " + secondsBinary;
  }
}

function makeTimeBinary(time) {
  let timeBinary = "";
  if (time < 10) {
    timeBinary = "0" + time;
  } else {
    timeBinary = time;
  }
  return timeBinary;
}

// update time every 1000 ms (= 1 second)
const intervalID = setInterval(setTime, 1000);
