const addProduct = () =>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;

    console.log(product, quantity);
    displayProduct(product, quantity); 
    getStroedShoppingCart(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    ul.appendChild(li);
}

const getStroedShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLoclaStorage = (product, quantity) => {
    const cart = getStroedShoppingCart();
    cart[product] = quantity;
    console.log(cart);
    const cartStringified = JSON.stringify(cart);
    console.log(cartStringified);
    localStorage.setItem('cart', cartStringified) 
}













// const addProduct = () =>{
//     const productField = document.getElementById('product-name');
//     const quantityField = document.getElementById('product-quantity');
//     const product = productField.value;
//     const quantity = quantityField.value;
//     productField.value = "";
//     quantityField.value = "";
//     console.log(product, quantity);
//     displayProduct(product,quantity);
// }

// const displayProduct = () =>{
//     const ul = document.getElementById('product-container');
//     const li = document.createElement('li');
//     li.innerText = `${product}: ${quantity}`;
//     ul.appendChild(li);

// }