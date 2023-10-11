import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "The Catnip Market";
const buttonName = "🐱";
let counter: number = 0;

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("button");
button.innerHTML = buttonName;
button.addEventListener("click", () => {
  counter++;
  div.innerHTML = "Number of catnips produced: " + counter;
});
app.append(button);

const div = document.createElement("div");
div.innerHTML = "Number of catnips produced: " + counter;
app.append(div);

let lastTimestamp = 0;

function updateCounter() {
  if (performance.now() - lastTimestamp >= 1000) {
    lastTimestamp = performance.now();
    counter++;
    div.innerHTML = "Number of catnips produced: " + counter;
  }
  requestAnimationFrame(updateCounter);
}

updateCounter();
