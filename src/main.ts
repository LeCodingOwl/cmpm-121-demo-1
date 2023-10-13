import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "The Catnip Market";
const buttonName = "🐾 YEAH TAP YOUR PAWS";

const priceIncrease = 1.15;

let counter: number = 0;
let counterGrowth: number = 0;

interface Item {
  name: string;
  cost: number;
  rate: number;
  description: string;
}

const availableItems: Item[] = [
  {
    name: "Hire simple worker cat 🐱",
    cost: 10,
    rate: 0.1,
    description: "Just a simple cat. He's doing his best!",
  },
  {
    name: "Hire Hipster cat 🐱‍👓",
    cost: 100,
    rate: 2,
    description: "This cat is tech savvy. *Sips tea*",
  },
  {
    name: "Hire Ninja cat 🐱‍👤",
    cost: 1000,
    rate: 50,
    description: "OH YEAH YOU SEE WHAT THESE PAWS CAN DO?",
  },
  {
    name: "Hire Hacker cat 🐱‍💻",
    cost: 10000,
    rate: 100,
    description: "Diving deep into the dark cat web",
  },
  {
    name: "Hire Space Cat 🐱‍🚀",
    cost: 100000,
    rate: 10000,
    description: "Harvesting Mars rocks!",
  },
];

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

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
  counterGrowth += availableItems[0].rate;
  counter -= availableItems[0].cost;
  availableItems[0].cost += priceIncrease;
});

const upgradeButton2 = document.createElement("button");
app.append(upgradeButton2);

upgradeButton2.addEventListener("click", () => {
  counterGrowth += availableItems[1].rate;
  counter -= availableItems[1].cost;
  availableItems[1].cost += priceIncrease;
});

const upgradeButton3 = document.createElement("button");
app.append(upgradeButton3);

upgradeButton3.addEventListener("click", () => {
  counterGrowth += availableItems[2].rate;
  counter -= availableItems[2].cost;
  availableItems[2].cost += priceIncrease;
});

const upgradeButton4 = document.createElement("button");
app.append(upgradeButton4);

upgradeButton4.addEventListener("click", () => {
  counterGrowth += availableItems[3].rate;
  counter -= availableItems[3].cost;
  availableItems[3].cost += priceIncrease;
});

const upgradeButton5 = document.createElement("button");
app.append(upgradeButton5);

upgradeButton5.addEventListener("click", () => {
  counterGrowth += availableItems[4].rate;
  counter -= availableItems[4].cost;
  availableItems[4].cost += priceIncrease;
});

function checkCost() {
  if (counter >= availableItems[0].cost) {
    upgradeButton.disabled = false;
  } else {
    upgradeButton.disabled = true;
  }
  }
  }

  if (counter >= availableItems[3].cost) {
    upgradeButton4.disabled = false;
  } else {
    upgradeButton4.disabled = true;
  }

function checkCost (buttons: Item[])
{
  availableItems.forEach((item, i) => {
    buttons[i].button.disabled = item.cost > counter;
  })
}

let lastTimestamp: number = 0;
function autoCounter(timestamp: number) {
  const timePassed = timestamp - lastTimestamp;
  lastTimestamp = timestamp;
  requestAnimationFrame(autoCounter);

  counter += counterGrowth * (timePassed / 1000);
  checkCost(availableItems);

  counterText.innerHTML = "Number of catnips produced: " + counter.toFixed();
  growthText.innerHTML = "Current growth rate of Catnip: " + counterGrowth.toFixed(1) + "/sec";
}
requestAnimationFrame(autoCounter);  checkCost();
  updateText();
}
autoCounter();
