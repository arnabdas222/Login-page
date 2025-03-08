function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in both username and password!");
        return false;
    }

    alert("Login Successful!");  // You can replace this with actual authentication logic
    return true;
}
