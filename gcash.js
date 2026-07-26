const payment = document.getElementById("payment");
const gcashInfo = document.getElementById("gcashInfo");

payment.addEventListener("change", function () {

    if (payment.value === "gcash") {
        gcashInfo.style.display = "block";
    } else {
        gcashInfo.style.display = "none";
    }

});