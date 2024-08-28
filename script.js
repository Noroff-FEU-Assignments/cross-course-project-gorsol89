const url= "http://localhost/flower-power.local/wp-jason/wc/store/products";

async getProducts() {
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        console.log(getResults);
    }

    catch(error);
}

getProducts();