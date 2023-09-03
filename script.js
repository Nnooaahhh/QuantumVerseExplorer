// JavaScript code to add interactivity

// Function to change the background color
function changeBackgroundColor() {
    const colors = ["#0073e6", "#e60000", "#00cc66", "#ff9900"];
    const body = document.body;
    const currentColor = body.style.backgroundColor;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Ensure the new color is different from the current color
    if (currentColor !== randomColor) {
        body.style.backgroundColor = randomColor;
    } else {
        // If the random color is the same as the current color, try again
        changeBackgroundColor();
    }
}

// Add a click event listener to the button
const changeColorButton = document.getElementById("changeColorButton");
changeColorButton.addEventListener("click", changeBackgroundColor);
