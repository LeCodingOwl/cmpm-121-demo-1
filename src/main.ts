import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "The Catnip Market";
const buttonName = "🐱";

const unit1 = 0.1;
const unit2 = 2.0;
const unit3 = 50;

const priceIncrease = 1.15;

let upgrade1Cost: number = 10;
let upgrade2Cost: number = 100;
let upgrade3Cost: number = 1000;

let counter: number = 0;
let counterGrowth: number = 0;
let lastTimestamp: number = 0;

document.title = gameName;

function updateText() {
  counterText.innerHTML = "Number of catnips produced: " + counter.toFixed();
  growthText.innerHTML =
    "Current growth rate of Catnip: " + counterGrowth.toFixed(1) + "/sec";
  upgradeButton.innerHTML =
    "Upgrade 1 |0.1/sec| [Cost: " + upgrade1Cost.toFixed(1) + " Catnips]";
  upgradeButton2.innerHTML =
    "Upgrade 2 |2/sec| [Cost: " + upgrade2Cost.toFixed(1) + " Catnips]";
  upgradeButton3.innerHTML =
    "Upgrade 3 |50/sec| [Cost: " + upgrade3Cost.toFixed(1) + " Catnips]";
}

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("button");
button.innerHTML = buttonName;
button.addEventListener("click", () => {
  counter++;
});
app.append(button);

const counterText = document.createElement("div");

counterText.innerHTML = "Number of catnips produced: " + counter.toFixed();
app.append(counterText);

const growthText = document.createElement("div");

growthText.innerHTML =
  "Current growth rate of Catnip: " + counterGrowth.toFixed(1) + "/sec";
app.append(growthText);

// Upgrade buttons
const upgradeButton = document.createElement("button");
app.append(upgradeButton);

upgradeButton.addEventListener("click", () => {
  counterGrowth += unit1;
  counter -= upgrade1Cost;
  upgrade1Cost += priceIncrease;
});

const upgradeButton2 = document.createElement("button");
app.append(upgradeButton2);

upgradeButton2.addEventListener("click", () => {
  counterGrowth += unit2;
  counter -= upgrade2Cost;
  upgrade2Cost += priceIncrease;
});

const upgradeButton3 = document.createElement("button");
app.append(upgradeButton3);

upgradeButton3.innerHTML =
  "Upgrade 3 |50/sec| [Cost: " + upgrade3Cost.toFixed(1) + " Catnips]";
upgradeButton3.addEventListener("click", () => {
  counterGrowth += unit3;
  counter -= upgrade3Cost;
  upgrade3Cost += priceIncrease;
});

function checkCost() {
  if (counter >= upgrade1Cost) {
    upgradeButton.disabled = false;
  } else {
    upgradeButton.disabled = true;
  }

  if (counter >= upgrade2Cost) {
    upgradeButton2.disabled = false;
  } else {
    upgradeButton2.disabled = true;
  }

  if (counter >= upgrade3Cost) {
    upgradeButton3.disabled = false;
  } else {
    upgradeButton3.disabled = true;
  }
}

function autoCounter() {
  if (performance.now() - lastTimestamp >= 1000 / counterGrowth) {
    lastTimestamp = performance.now();
    counter++;
  }
  requestAnimationFrame(autoCounter);
  checkCost();
  updateText();
}
autoCounter();
