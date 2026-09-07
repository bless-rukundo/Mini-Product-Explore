const productsContainer = document.querySelector("#products");
const status = document.querySelector("#status");


async function getProducts() {
    try {
        status.textContent = "Loading products...";
        const response = await fetch(
            "https://dummyjson.com/products"
        );
        if (!response.ok) {
            throw new Error("Products could not be loaded");
        }
        const data = await response.json();
        console.log(data.products);
        status.textContent = "Products loaded successfully";
    } catch (error) {
        status.textContent = error.message;
    }
}

getProducts();

function displayProducts(products) {
    productsContainer.innerHTML = "";
    products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img
                src="${product.thumbnail}"
                alt="${product.title}"
            >
            <h3>${product.title}</h3>

            <p>$${product.price}</p>
        `;
        productsContainer.appendChild(card);
    });
}
displayProducts()
