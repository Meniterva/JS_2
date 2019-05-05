const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

const getRequest = (url, cb) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status !== 200){
                console.log('error');
            } else {
                resolve(xhr.responseText);
            } 
        }
    };
    xhr.send();

    })
};

getRequest(url, cb)
                .then(data => {
                    cb(data);
                })
                .catch(error => {
                    console.log(error)
                });



class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.products = [];
        this.productsAll = [];
        this._init();
    }
    _init(){
        this._fetchProducts();
        this._render();
    }
    _fetchProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                this.products = [...data];
                this._render();
            })
    }

    calcSum(){
        
        return this.productsAll.reduce((accum, item) => accum += item.price, 0);
    }
    _render(){
        const block = document.querySelector(this.container);
        for(let product of this.products){
            const prodObj = new ProductItem(product);
            this.productsAll.push(prodObj);
            block.insertAdjacentHTML('beforeend', prodObj.render());
        }
    }
}

class ProductItem {
    constructor(product, img='https://placehold.it/200x150'){
        this.product_name = product.product_name;
        this.price = product.price;
        this.id_product = product.id_product;
        this.img = img;
    }
    render(){
        return `<div class="product-item">
                <img src="${this.img}" alt="${this.product_name}">
                <div class="desc">
                    <h3>${this.product_name}</h3>
                    <p>${this.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

const products = new ProductsList();


/* пытаюсь разобраться с корзиной, но пока тяжело дается 

let $products = document.getElementsByClassName('products');
let cart = [];
let $cart = document.getElementsByClassName('btn-cart');

const buildTotal = (cart) => {
    let sum = 0;
    for (var i = 0; i < cart.length; i++) {
        sum = sum + cart[i].price * cart[i].quantity;
    }
};

buildTotal(cart);

let Init = () => {
    $products.addEventListener("click", handleCatalogClick);
}

const handleCatalogClick = (event) => {
    if(event.target.tagName === "BUTTON") {
        cart.push({product_name, product.price, quantity: 1 });

        buildTotal(cart);
    }
}

window.addEventListener("load", init);*/
