// ==============================
// SHOP EASE APP
// ==============================

// Wait until the page is loaded
document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // SHOP NOW BUTTON
    // ==========================

    const shopBtn = document.querySelector(".hero button");

    if (shopBtn) {
        shopBtn.addEventListener("click", function () {
            document.querySelector(".products").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // ==========================
    // ADD TO CART
    // ==========================

    // ==========================
// BUY NOW BUTTON
// ==========================

const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(function(button){

    button.addEventListener("click", function(e){

        e.stopPropagation();

        const id = this.dataset.id;

        window.location.href = "product.html?id=" + id;

    });

});

    // ==========================
    // SEARCH
    // ==========================

    const searchInput = document.querySelector(".search input");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const value = searchInput.value.toLowerCase();

            document.querySelectorAll(".card").forEach(function (card) {

                const title = card.querySelector("h3").textContent.toLowerCase();

                if (title.includes(value)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }

});