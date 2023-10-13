import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "The Catnip Market";
const mainClickerName = "🐾 YEAH TAP YOUR PAWS";

document.title = gameName;

const priceIncrease = 1.15;

let counter: number = 0;
let counterGrowth: number = 0;

interface Item {
  name: string;
  cost: number;
  rate: number;
  amount: number;
  button: HTMLButtonElement;
  description: string;
}

const availableItems: Item[] = [
  {
    name: "Hire simple worker cat 🐱",
    cost: 10,
    rate: 0.1,
    amount: 0,
    button: document.createElement("button"),
    description: "Just a simple cat. He's doing his best!",
  },
  {
    name: "Hire Hipster cat 🐱‍👓",
    cost: 100,
    rate: 2,
    amount: 0,
    button: document.createElement("button"),
    description: "This cat is tech savvy. *Sips tea*",
  },
  {
    name: "Hire Ninja cat 🐱‍👤",
    cost: 1000,
    rate: 50,
    amount: 0,
    button: document.createElement("button"),
    description: "OH YEAH YOU SEE WHAT THESE PAWS CAN DO?",
  },
  {
    name: "Hire Hacker cat 🐱‍💻",
    cost: 10000,
    rate: 100,
    amount: 0,
    button: document.createElement("button"),
    description: "Diving deep into the dark cat web",
  },
  {
    name: "Hire Space Cat 🐱‍🚀",
    cost: 100000,
    rate: 10000,
    amount: 0,
    button: document.createElement("button"),
    description: "Harvesting Mars rocks!",
  },
];

//Setting up game layout -------------------------
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("button");
button.innerHTML = mainClickerName;
button.addEventListener("click", () => {
  counter++;
});
app.append(button);

const counterText: HTMLDivElement = document.createElement("div");
counterText.innerHTML = "Number of catnips produced: " + counter.toFixed(2);
app.append(counterText);

const growthText: HTMLDivElement = document.createElement("div");
growthText.innerHTML =
  "Current growth rate of Catnip: " + counterGrowth.toFixed(2) + "/sec";
app.append(growthText);

createButtons(availableItems);

//Functions ------------------------------------
function createButtons(buttons: Item[]) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].button.innerHTML =
      availableItems[i].name +
      " (" +
      availableItems[i].amount +
      " cats hired) | " +
      "Cost: " +
      availableItems[i].cost.toFixed(2) +
      " Catnips" +
      " | " +
      availableItems[i].rate.toFixed(2) +
      "/sec" +
      "<br><font size=-1>" +
      availableItems[i].description;
    buttons[i].button.disabled = true;
    app.append(buttons[i].button);

    availableItems[i].button.addEventListener("click", () =>
      purchaseItem(availableItems[i]),
    );
  }
}

function purchaseItem(selectedItem: Item) {
  counterGrowth += selectedItem.rate;
  counter -= selectedItem.cost;
  selectedItem.cost *= priceIncrease;
  selectedItem.amount += 1;
  selectedItem.button.innerHTML =
    selectedItem.name +
    " (" +
    selectedItem.amount +
    " cats hired) | " +
    "Cost: " +
    selectedItem.cost.toFixed(2) +
    " Catnips" +
    " | " +
    selectedItem.rate.toFixed(2) +
    "/sec" +
    "<br><font size=-1>" +
    selectedItem.description;
}

function checkCost(buttons: Item[]) {
  availableItems.forEach((item, i) => {
    buttons[i].button.disabled = item.cost > counter;
  });
}

let lastTimestamp: number = 0;
function autoCounter(timestamp: number) {
  const timePassed = timestamp - lastTimestamp;
  lastTimestamp = timestamp;

  counterText.innerHTML = "Number of catnips produced: " + counter.toFixed(2);
  growthText.innerHTML =
    "Current growth rate of Catnip: " + counterGrowth.toFixed(2) + "/sec";

  counter += counterGrowth * (timePassed / 1000);

  checkCost(availableItems);
  requestAnimationFrame(autoCounter);
}
requestAnimationFrame(autoCounter);
