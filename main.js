// Array of colors
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "cyan",
  "lime",
];

// DOM Elements
const flipBtn = document.getElementById("flipBtn");
const colorName = document.getElementById("colorName");

// Event Listener
flipBtn.addEventListener("click", () => {
  // Random index
  const randomIndex = Math.floor(Math.random() * colors.length);

  // Get random color
  const randomColor = colors[randomIndex];

  // Change background color
  document.body.style.backgroundColor = randomColor;

  // Update text
  colorName.textContent = `Current Color: ${randomColor}`;
});
