/*

document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
});


*/

// ----------- my part ---------
document.getElementById("login-submit").addEventListener("click", function () {
  // getting user email and password
  const email = document.getElementById("user-email").value;
  const password = document.getElementById("user-password").value;
  console.log(email, password);
  // checking email and password
  if (email == "a@gmail.com" && password == "12345") {
    window.location.href = "banking.html";
  } else {
    document.getElementById("error-message").innerText =
      "email or password wrong. Please enter correct email or password";
  }
});
