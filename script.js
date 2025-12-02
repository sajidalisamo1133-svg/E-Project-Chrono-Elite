0// --- Add to Cart System ---
const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const card = e.target.closest(".watch-card");

        let watchName = card.querySelector("h3").innerText;
        let watchPrice = card.querySelector("p").innerText;
        let watchImg = card.querySelector("img").src;

        let cartItem = {
            name: watchName,
            price: watchPrice,
            img: watchImg
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`${watchName} added to cart!`);
    });
});


