const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const productsContainer = document.querySelector("#products");
const status = document.querySelector("#status");

async function getProducts(url) {
    try {
        status.textContent = "Loading products...";

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Products could not be loaded.");
        }

        const data = await response.json();

        displayProducts(data.products);

        status.textContent = `${data.products.length} products found`;

    } catch (error) {
        status.textContent = error.message;
    }
}


function displayProducts(products) {

    productsContainer.innerHTML = "";

    if (products.length === 0) {
        productsContainer.innerHTML = `
            <p class="text-red-500 col-span-full text-center">
                No products found.
            </p>
        `;
        return;
    }

    products.forEach((product) => {

        const card = document.createElement("div");

        card.className = "bg-white border rounded-lg overflow-hidden";

        card.innerHTML = `
            <img
                src="${product.thumbnail}"
                alt="${product.title}"
                class="w-full h-48 object-cover"
            >

            <div class="p-4">

                <p class="text-sm text-gray-500 mb-2">
                    ${product.category}
                </p>

                <h3 class="text-lg font-semibold mb-3">
                    ${product.title}
                </h3>

                <div class="flex justify-between">

                    <span class="font-bold">
                        $${product.price}
                    </span>

                    <span>
                        ⭐ ${product.rating}
                    </span>

                </div>

            </div>
        `;

        productsContainer.appendChild(card);
    });
}


searchForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const searchTerm = searchInput.value.trim();

    if (searchTerm === "") {
        getProducts("https://dummyjson.com/products");
        return;
    }

    getProducts(
        `https://dummyjson.com/products/search?q=${searchTerm}`
    );
});


getProducts("https://dummyjson.com/products");