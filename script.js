function showYesPage() {
    window.location.href = "yes.html";
}

function showNoPage() {
    window.location.href = "no.html";
}

function goBack() {
    window.location.href = "index.html";
}

function redirectToYes() {
    window.location.href = "yes.html";
}

function resizeImage() {
    var image = document.getElementById("no-image");
    var button = document.getElementById("no-button");

    // Increase image size
    image.style.width = "150%";

    // Increase button size
    button.style.fontSize = "20px";

    // Change button text on each click
    if (button.innerHTML === "NO!") {
        button.innerHTML = "NOOO!!!";
    } else {
        button.innerHTML = "NOOOO!!!";
    }
}
