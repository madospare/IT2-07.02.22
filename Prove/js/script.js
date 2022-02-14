var display = document.getElementById("hardware");
var paymentWindow = document.getElementById("buyWindow");

function buy() {
    display.classList.toggle("hide");
    paymentWindow.classList.remove("hide");
}

function pay() {
    display.classList.remove("hide");
    paymentWindow.classList.add("hide");
}