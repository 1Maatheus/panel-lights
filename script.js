const container = document.getElementById("container");
const colors = [
  "#a1e0ec",
  "#0ec4d3",
  "#37c7f4",
  "6381b2",
  "#5cdbce",
  "0c7da8",
  "#7480f7",
  "#f7333f",
  "#e43337",
  "#f6aae5",
  "#b2fb26",
];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
