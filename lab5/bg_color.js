let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let currentColorIndex = 0;
function changeColor() {
    let body = document.querySelector('body');
    body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}
setInterval(changeColor, 1);
