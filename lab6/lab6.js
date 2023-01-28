class Person {
    constructor(name, age, email, id) {
        this.NAME = name;
        this.AGE = age;
        this.EMAIL = email
        this.ID = id;
    }
};
class Student extends Person {
    constructor(name, age, email, id) {

        super(name, age, email, id);
    }
};
function add() {
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const email = document.getElementById("email");
    const id = document.getElementById("id");
    const st1 = new Student(name.value, age.value, email.value, id.value);
    for (i in st1) {
        const table = document.getElementById("tbl");
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        const td1 = document.createElement("td");
        tr.textContent = i;
        td1.textContent = st1[i];
        tr.appendChild(td);
        tr.appendChild(td1);
        table.appendChild(tr);
    }

}