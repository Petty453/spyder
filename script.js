function checkPassword() {
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (password === "SPYDER123") {
        message.innerHTML = "Access Granted. Proceed to Level 1.";
        message.style.color = "lime";
        setTimeout(() => {
            window.location.href = "level1.html"; // Redirect to Level 1
        }, 2000);
    } else {
        message.innerHTML = "Access Denied. Try Again.";
        message.style.color = "red";
    }
}
