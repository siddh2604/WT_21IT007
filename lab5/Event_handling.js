const input = document.querySelector("#myInput");
input.addEventListener("click", handleClick);
input.addEventListener("blur", handleBlur);
input.addEventListener("mouseover", handleMouseOver);
input.addEventListener("keypress", handleKeyPress);
function handleClick() {
    console.log("Input was clicked!");
}
function handleBlur() {
    console.log("Input lost focus!");
}
function handleMouseOver() {
    console.log("Mouseover on Input!");
}
function handleKeyPress(e) {
    console.log("Key pressed:" + e.key);
}