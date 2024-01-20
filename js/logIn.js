/** @format */

let emailLoginInput = document.getElementById("emailLoginInput");
let passwordLoginInput = document.getElementById("passwordLoginInput");
let loginBtn = document.getElementById("loginBtn");
let alertMassage = document.getElementById("alertMassage");
let userContainer = [];

if (localStorage.getItem("Users") != null) {
  userContainer = JSON.parse(localStorage.getItem("Users"));
}
function logIn() {
  if (checkInputsEmpty() == true) {
    getAlertMessage("All Inputs Required", "red");
  } else {
    if (checkEmailPassword() == true) {

      localStorage.setItem("userName", userContainer[0].userName);

      getAlertMessage("Login Successful", "green");
      window.location.href = "home.html";

    } else {
      getAlertMessage("Email or Password notCorrect", "red");
    }
  }
}

function checkEmailPassword() {
  for (let index = 0; index < userContainer.length; index++) {
    if (
      userContainer[index].email == emailLoginInput.value &&
      userContainer[index].password == passwordLoginInput.value
    ) {
      return true;
    } else {
      return false;
    }
  }
}
function getAlertMessage(text, color) {
  alertMassage.classList.replace("d-none", "d-block");
  alertMassage.innerHTML = text;
  alertMassage.style.color = color;
}
function checkInputsEmpty() {
  if (emailLoginInput.value == "" || passwordLoginInput.value == "")
    return true;
  else return false;
}
loginBtn.addEventListener("click", logIn);
