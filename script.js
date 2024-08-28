const url = "http://flowerpower.local/wp-json/wc/store/products";

async function getProducts() {
    try {
        const response = await fetch(url);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error("Problem with getting the products:", error);
    }
}

function displayProducts(products) {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <img src="${product.images[0].src}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.price_html}</p>
            <button>View Product</button>
        `;

        productsContainer.appendChild(productCard);
    });
}

getProducts();