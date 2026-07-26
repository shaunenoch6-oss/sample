const payment = document.getElementById("payment");
const gcashInfo = document.getElementById("gcashInfo");
const mayaInfo = document.getElementById("paymayaInfo");

payment.addEventListener("change", function () {

    gcashInfo.style.display = "none";
    mayaInfo.style.display = "none";

    if (payment.value === "gcash") {
        gcashInfo.style.display = "block";
    }

    if (payment.value === "maya") {
        mayaInfo.style.display = "block";
    }

});

document.getElementById("checkoutForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if (payment.value === "gcash") {

    const ref = document.getElementById("gcashRef").value.trim();

    if (ref === "") {
        alert("Please enter your GCash Reference Number.");
        return;
    }

} else if (payment.value === "maya") {

    const ref = document.getElementById("mayaRef").value.trim();

    if (ref === "") {
        alert("Please enter your Maya Reference Number.");
        return;
    }

}

    document.getElementById("successPopup").style.display = "flex";

document.getElementById("continueBtn").onclick = function () {
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}

});