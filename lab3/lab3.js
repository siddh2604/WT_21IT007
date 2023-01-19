let srt = [];
let ori = [];
function change() {
  const a = document.getElementById("sel");
  console.log("change");
  if (a.value == "orignal") {
    orignal();
  } else if (a.value == "sorted") {
    sorted();
  }
}
let count = 0;
function add() {
  console.log("add");
  count++;
  const ul = document.getElementById("ul");
  const a = document.getElementById("getid");
  const li = document.createElement("li");

  srt.push(`${a.value}`);
  ori.push(`${a.value}`);
  li.textContent = a.value;
  li.id = `${count}`;
  ul.appendChild(li);
}
function orignal() {
  console.log("ori");

  console.log(ori);
  for (var i = 0; i < ori.lenght; i++) {
    document.getElementById(`${i}`).innerHTML = `${ori[i]}`;
  }
}

function sorted() {
  console.log("sort");
  srt.sort();
  console.log(srt);
 
  for (var i = 0; i < srt.lenght; i++) {
    document.getElementById(`${i}`).innerHTML = `${srt[i]}`;
  }
}
