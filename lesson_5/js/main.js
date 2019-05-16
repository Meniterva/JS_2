const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        // cart: [],
        imgCatalog: 'https://placehold.it/200x150'
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        },
        addProduct(product){
            console.log(product.price);
        }

        
    },
    mounted(){
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el)
                }
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el)
                }
            })
        
           /* это попытка добавления товара в корзину
            this.getJson(`${API + this.catalogUrl}`)
                .then(data => {
                    for(let el of data){
                        this.cart.push(el)
                    }
                     let find = this.products.find(product => product.id_product === productId);
                if(data.result){
                      find.quantity++;
                        } else {
                         let product = {
                            id_product: productId,
                             price: +element.dataset['price'],
                             product_name: element.dataset['name'],
                             quantity: 1
                         };
                     }
                })*/

                /* событие на кнопке search 
                updateProductList {
                render() {
                const block = document.querySelector(this.products);
                for (let product of this.products){
                const prod = new lists[this.constructor.name](product);
                this.allProducts.push(prod);
                block.insertAdjacentHTML('beforeend', prod.render())
                }
            }
                
                */

    }
})

