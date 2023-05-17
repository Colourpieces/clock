const root = document.querySelector(":root");

function setTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  //analog time
  displayAnalogTime(hours, minutes, seconds);

  //digital time
  displayDigitalTimeString(hours, minutes, seconds);
}

function displayAnalogTime(hours, minutes, seconds) {
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
}

const displayDigitalTime = document.querySelector("#display-clock-digital");
function displayDigitalTimeString(hours, minutes, seconds) {
  const separator = seconds % 2 === 0 ? ":" : " "; //tenärer Ausdruck: Bedingung ? wenn true : wenn false
  hours = makeTimeBinary(hours); //Parameter werden überschrieben, nicht das original!
  minutes = makeTimeBinary(minutes);
  seconds = makeTimeBinary(seconds);

  displayDigitalTime.innerText =
    hours + separator + minutes + separator + seconds;
}

function makeTimeBinary(time) {
  // return time < 10 ? "0" + time : time.toString(); //tenärer Ausdruck

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
const interval = setInterval(setTime, 1000);
