function checkPassword() {
    const password = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");

    if (password === "mylady") {
        document.getElementById("password-section").style.display = "none";
        document.getElementById("content-section").style.display = "block";
    } else {
        errorMessage.textContent = "Incorrect password. Try again!";
        errorMessage.style.color = "#ff3385";
    }
}

function openTab(tabId) {
    const tabs = document.getElementsByClassName("tab-content");
    const buttons = document.getElementsByClassName("tab-button");

    for (let tab of tabs) {
        tab.style.display = "none";
    }
    for (let button of buttons) {
        button.classList.remove("active");
    }

    document.getElementById(tabId).style.display = "block";
    event.currentTarget.classList.add("active");
}
