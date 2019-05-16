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
        this.products = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 34},
            {id: 4, title: 'Gamepad', price: 56},
            {id: 5, title: 'Chair', price: 120},
        ];
    }
    _render(){
        const block = document.querySelector(this.container);
        for(let product of this.products){
            const prodObj = new ProductItem(product);
            this.productsAll.push(prodObj);
            block.insertAdjacentHTML('beforeend', prodObj.render());
        }
    }

    /* подсчет суммы товаров 
    buildTotal(this.products) {
        let quantity = 1;
        let sum = 0;
        for(let i = 0; i < this.products.lenght; i++) {
            sum = sum + this.products[i].price * quantity;
        }
    }*/
}

class ProductItem {
    constructor(product, img='https://placehold.it/200x150'){
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render(){
        return `<div class="product-item">
                <img src="${this.img}" alt="${this.title}">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}
/*Д_з
class Cart {
    constructor(){
       event // задать событие click
       length //для определения длины массива products
    }
    some(){
        addEventListener // обработчик события click 
        querySelector // получение элемента из products   
        push // чтобы положить товар в корзину 
        appendChild // чтобы положить товар в конец корзины
        sum // чтобы посчитать сумму товаров 
    }
}*/
const products = new ProductsList(); 

