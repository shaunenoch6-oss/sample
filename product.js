const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

console.log("ID =", id);

const product = products.find(p => p.id === id);

console.log("Product =", product);

document.getElementById("productImage").src = product.image;
document.getElementById("productName").textContent = product.name;
document.getElementById("productPrice").textContent =
    "₱" + product.price + product.unit;
document.getElementById("productDescription").textContent = product.description;

const qty = document.getElementById("qty");

document.getElementById("plus").onclick = function () {
    qty.value = Number(qty.value) + 1;
};

document.getElementById("minus").onclick = function () {
    if (qty.value > 1) {
        qty.value--;
    }
};

document.querySelector(".cart-btn").onclick = function () {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: product.name,
        price: product.price,
        quantity: Number(qty.value)
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.name + " added to cart!");
};
document.querySelector(".buy-btn").onclick = function () {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: product.name,
        price: product.price,
        quantity: Number(qty.value)
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "cart.html";
};