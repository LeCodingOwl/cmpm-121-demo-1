import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "The Catnip Market";
const buttonName = "🐱";
let counter: number = 0;
let upgrade1Cost = 10;
let counterGrowth: number = 0;

document.title = gameName;

function updateText() {
  div.innerHTML = "Number of catnips produced: " + counter;
}

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("button");
button.innerHTML = buttonName;
button.addEventListener("click", () => {
  counter++;
  updateText();
});
app.append(button);

const div = document.createElement("div");
div.innerHTML = "Number of catnips produced: " + counter;
app.append(div);

let lastTimestamp = 0;

const upgradeButton = document.createElement("button");

upgradeButton.innerHTML = "Upgrade 1 [Cost: " + upgrade1Cost + " Catnips]";
upgradeButton.addEventListener("click", () => {
  counterGrowth += 1;
  counter -= 10;
  updateText();
});
app.append(upgradeButton);

function checkCost() {
  if (counter >= 10) {
    upgradeButton.disabled = false;
  } else {
    upgradeButton.disabled = true;
  }
}

function autoCounter() {
  if (performance.now() - lastTimestamp >= 1000) {
    lastTimestamp = performance.now();
    counter += counterGrowth;
    updateText();
  }
  requestAnimationFrame(autoCounter);
  checkCost();
}
autoCounter();
