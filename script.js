const displayDigitalTime = document.querySelector("#display-clock-digital");
function showDigitalTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

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

// update time every 1000 ms (= 1 second)
const intervalID = setInterval(showDigitalTime, 1000);

function makeTimeBinary(time) {
  let timeBinary = "";
  if (time < 10) {
    timeBinary = "0" + time;
  } else {
    timeBinary = time;
  }
  return timeBinary;
}

const root = document.querySelector(":root");
root.style.setProperty("--clr-red", pred);
