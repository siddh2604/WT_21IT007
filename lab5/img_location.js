let img = document.getElementById("myImage");
document.addEventListener("keydown", moveImage);
function moveImage(event) {
    switch (event.keyCode) {
        case 37:
            img.style.left = (img.offsetLeft - 10) + "px";
            break;
        case 38:
            img.style.top = (img.offsetTop - 10) + "px";
            break;
        case 39:
            img.style.left = (img.offsetLeft + 10) + "px";
            break;
        case 40:
            img.style.top = (img.offsetTop + 10) + "px";
            break;
    }
    event.preventDefault();
}