import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "The Catnip Market";
const buttonName = "🐱";

const upgrade1Cost = 10;
const upgrade2Cost = 100;
const upgrade3Cost = 1000;

const unit1 = 0.1;
const unit2 = 2.0;
const unit3 = 50;

let counter: number = 0;
let counterGrowth: number = 0;
let lastTimestamp: number = 0;

document.title = gameName;

function updateText() {
  counterText.innerHTML = "Number of catnips produced: " + counter;
  growthText.innerHTML = "Current growth rate of Catnip: " + counterGrowth.toFixed(1) + "/sec";
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

const counterText = document.createElement("div");

counterText.innerHTML = "Number of catnips produced: " + counter;
app.append(counterText);

const growthText = document.createElement("div");

growthText.innerHTML = "Current growth rate of Catnip: " + counterGrowth.toFixed(1) + "/sec";
app.append(growthText);

// Upgrade buttons
const upgradeButton = document.createElement("button");

upgradeButton.innerHTML = "Upgrade 1 |0.1/sec| [Cost: " + upgrade1Cost + " Catnips]";
upgradeButton.addEventListener("click", () => {
  counterGrowth += unit1;
  counter -= upgrade1Cost;
  updateText();
});
app.append(upgradeButton);

const upgradeButton2 = document.createElement("button");

upgradeButton2.innerHTML = "Upgrade 2 |2.0/sec| [Cost: " + upgrade2Cost + " Catnips]";
upgradeButton2.addEventListener("click", () => {
  counterGrowth += unit2;
  counter -= upgrade2Cost;
  updateText();
});
app.append(upgradeButton2);

const upgradeButton3 = document.createElement("button");

upgradeButton3.innerHTML = "Upgrade 3 |50/sec| [Cost: " + upgrade3Cost + " Catnips]";
upgradeButton3.addEventListener("click", () => {
  counterGrowth += unit3;
  counter -= upgrade3Cost;
  updateText();
});
app.append(upgradeButton3);


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
  if (performance.now() - lastTimestamp >= (1000/counterGrowth)) {
    lastTimestamp = performance.now();
    counter ++;
    updateText();
  }
  requestAnimationFrame(autoCounter);
  checkCost();
}
autoCounter();
