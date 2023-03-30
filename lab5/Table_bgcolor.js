var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

var currentColorIndex = 0;
function changeTableColor() {
    var table = document.getElementById("myTable");
    var colorInput = document.getElementById("colorInput").value;
    var color = colors[colorInput - 1];
    table.style.backgroundColor = color;
}