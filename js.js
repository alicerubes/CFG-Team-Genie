// POPUP CONTACT FORM START

// Validating Empty Field
function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
    alert("Please Fill All Fields !");
    } else {
    document.getElementById('form').submit();
    alert("Form submitted successfully. Thanks for reaching out !");
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// POPUP CONTACT FORM END