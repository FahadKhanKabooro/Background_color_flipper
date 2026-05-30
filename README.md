# 🎨 Background Color Flipper

A simple JavaScript project that changes the webpage background color whenever the user clicks a button.

## 📌 Project Description

This project demonstrates basic DOM manipulation using HTML, CSS, and JavaScript. When the **Change Background** button is clicked, a random color is selected from an array and applied to the page background.

## 🚀 Features

- Change background color with one click
- Random color selection
- Display the current color name
- Smooth background transition effect
- Beginner-friendly JavaScript project

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## 📂 Project Structure

```
Background-Flipper/
│
├── index.html
├── style.css
└── main.js
```

## 📖 Concepts Covered

### HTML
- Basic page structure
- Button element
- Paragraph element

### CSS
- Flexbox
- Styling buttons
- Centering content
- CSS transitions

### JavaScript
- Arrays
- Random number generation
- DOM Manipulation
- Event Listeners
- `getElementById()`
- `style.backgroundColor`
- `textContent`

## ⚙️ How It Works

1. User clicks the **Change Background** button.
2. JavaScript generates a random index.
3. A random color is selected from the colors array.
4. The page background changes to the selected color.
5. The current color name is displayed on the screen.

## 🧠 JavaScript Logic

```javascript
const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];

document.body.style.backgroundColor = randomColor;
colorName.textContent = `Current Color: ${randomColor}`;
```

## ▶️ How to Run

1. Download or clone the repository.

```bash
git clone https://github.com/your-username/background-flipper.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

4. Click the **Change Background** button and enjoy!

## 📸 Output

- Initial background color: White
- Clicking the button changes the background to a random color.
- The selected color name is displayed below the button.

## 🎯 Learning Outcomes

By completing this project, you will learn:

- How to select DOM elements
- How to handle button click events
- How to change CSS properties using JavaScript
- How to work with arrays
- How to generate random values in JavaScript

## 👨‍💻 Author

**Fahad Kabooroo**

JavaScript DOM Manipulation Assignment

---

⭐ If you like this project, consider giving it a star on GitHub.
