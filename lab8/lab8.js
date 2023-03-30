var userid = document.forms["myForm"]["userid"].value;
var password = document.forms["myForm"]["password"].value;
var name = document.forms["myForm"]["name"].value;
var address = document.forms["myForm"]["address"].value;
var country = document.forms["myForm"]["country"].value;
var zipcode = document.forms["myForm"]["zipcode"].value;
var email = document.forms["myForm"]["email"].value;
var sex = document.forms["myForm"]["sex"].value;
var english = document.forms["myForm"]["english"].checked;
var non_english = document.forms["myForm"]["non_english"].checked;
var about = document.forms["myForm"]["about"].value;
function validateForm() {
    // Validate userid 
    if (userid == "" || userid.length < 5 || userid.length > 12) {
        alert("Userid must be between 5 and 12 characters");
        return false;
    }
    // Validate password 
    if (password == "" || password.length < 7 || password.length > 12) {
        alert("Password must be between 7 and 12 characters");
        return false;
    }
    // Validate name 
    if (name == "" || !/^[a-zA-Z]+$/.test(name)) {
        alert("Name can only contain alphabets");
        return false;
    }
    // Validate country 
    if (country == "") {
        alert("Please select a country");
        return false;
    }
    // Validate zipcode 
    if (zipcode == "" || isNaN(zipcode)) {
        alert("Zipcode must be a number");
        return false;
    }
    // Validate email 
    if (email == "") {
        alert("Emailis required");
        return false;
    }
    // Validate sex 
    if (sex == "") {
        alert("Please select a sex");
        return false;
    }
    // Validate language 
    if (!english || !non_english) {
        alert("Please select at least one language");
        return false;
    }
    // All validations passed 
    return true;
}