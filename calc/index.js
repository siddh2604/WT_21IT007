
function sum() {
  let x = Number(document.getElementById("a").value);
  let y = Number(document.getElementById("b").value);
  let sum = 0;
  console.log(x+y);
  sum = x + y;
  document.getElementById("ans").innerHTML = `Sum is ${sum}`;
}
