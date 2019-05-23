Vue.component('search', {
    data(){
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            filtered: [],
            search-field: [],
        }
    }
})

methods: {
    filter(){
        let regexp = new RegExp(this.userSearch, 'i');
        this.filtered = this.product.filter(el => regexp.test(el.product_name))
    }
},

template: ' <div class="cart">
<form action="#" class="search-form" @submit.prevent="filter">
    <input type="text" class="search-field" v-model="userSearch">
    <button class="btn-search" type="submit">
        <i class="fas fa-search"></i>
    </button>
    </form>
    </div>'