function checkBase64() {
    let answer = document.getElementById("base64Answer").value;
    let message = document.getElementById("message");

    if (answer === "Spyder accepted!") {
        message.innerHTML = "Correct! You have completed all the challenges.";
        message.style.color = "lime";
        setTimeout(() => {
            window.location.href = "success.html"; // Redirect to Success Page
        }, 2000);
    } else {
        message.innerHTML = "Incorrect. Try Again.";
        message.style.color = "red";
    }
}
