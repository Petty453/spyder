function checkCipher() {
    let answer = document.getElementById("cipherAnswer").value;
    let message = document.getElementById("message");

    if (answer === "There is a secret code!") {
        message.innerHTML = "Correct! Proceed to the next challenge.";
        message.style.color = "lime";
        setTimeout(() => {
            window.location.href = "level2.html"; // Redirect to Level 2
        }, 2000);
    } else {
        message.innerHTML = "Incorrect. Try Again.";
        message.style.color = "red";
    }
}
