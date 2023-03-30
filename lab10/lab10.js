const API_URL = "https://api.nationalize.io";
const api_url2="https://api.genderize.io/";
const api_url3="https://dog.ceo/api/breeds/image/random";
var cnt = 0; var cnt2 = 0;
function call()
{ callNA();callAge();}
async function callNA() {
    const usr = document.getElementById("username").value;
    const str = `name=${usr}`;
    const res = await fetch(`${API_URL}?${str}`);
    const data = await res.json();
    const a = data.country;
    console.log(a);
    if (cnt != 0) { document.getElementById("tab1").innerHTML = null;}
    document.getElementById("tab1").innerHTML += `<tr><td>${usr}</td></tr>`;
    document.getElementById("tab1").innerHTML += `<tr><td>Nationality</td><td>Probability</td></tr>`;
    for (let i in a) {
        document.getElementById("tab1").innerHTML += `<tr><td>${a[i].country_id}</td><td>${a[i].probability}</td></tr>`;
    }
    cnt++;
    console.log(a);
}
async function dogsAPI(){
    if(cnt2!=0)
        document.getElementById("dogs").innerHTML=null;
    let i=document.getElementById("dogs1").value;
    for(let j=i;j>0;j--){
        const responseData3= await fetch(`${api_url3}`)
        const data3= await responseData3.json();
        document.getElementById("dogs").innerHTML += `<img src=${data3.message}></br>`;
    }
    cnt2++;
}
async function callAge() {
    const usr = document.getElementById("username").value;
    const str = `name=${usr}`;
    const res = await fetch(`${api_url2}?${str}`);
    const data = await res.json();
    console.log(data);

    document.getElementById("head").textContent =
      "Probability = " + data.probability * 100 + "% " + data.gender;
  }