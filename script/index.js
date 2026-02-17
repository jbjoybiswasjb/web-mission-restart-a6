const loadAllProducts = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => displayAllProducts(json));
}

const displayAllProducts = (categories) => {
    const productsContainer = document.getElementById("products_container");

    console.log(categories)
    productsContainer.innerHTML = "";
    for(let category of categories) {
        const ul =  document.createElement("ul");
        ul.classList
        ul.innerHTML = `
            <li>${category}</li>
        `
        productsContainer.append(ul);
    }

}

loadAllProducts();