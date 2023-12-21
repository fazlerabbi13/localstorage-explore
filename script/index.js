const addProduct= () =>{
    const productField = document.getElementById('product');
    const quantityField = document.getElementById('quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    console.log(product,quantity)
    displayProduct(product,quantity)
    storeCartinLocalStorage(product,quantity);
}

const displayProduct = (product,quantity) =>{
    const ul = document.getElementById('ul-Container');
    const li = document.createElement('li');

    li.innerText = `${product}:${quantity}`;

    ul.appendChild(li)

}

const getStoredCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}



const storeCartinLocalStorage = (product,quantity) =>{
        const cart = getStoredCart();
        cart[product] = quantity;
        const cartStringified = JSON.stringify(cart);
        localStorage.setItem('cart',cartStringified);
}

const displayStoredData = () =>{
    const savedCart = getStoredCart();
    for(const product in savedCart){
        const quantity = savedCart[product]
        console.log(product,quantity)
        displayProduct(product,quantity)
    }
}
displayStoredData()