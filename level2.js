function checkRiddle() {
    let answer = document.getElementById("riddleAnswer").value;
    let message = document.getElementById("message");

    if (answer.toLowerCase() === "echo") {
        message.innerHTML = "Correct! Proceed to the next challenge.";
        message.style.color = "lime";
        setTimeout(() => {
            window.location.href = "level3.html"; // Redirect to Level 3
        }, 2000);
    } else {
        message.innerHTML = "Incorrect. Try Again.";
        message.style.color = "red";
    }
}
