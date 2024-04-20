<template>
    <div class="main-order">
        <div class="main-order-row">
            <div class="main-order-row-col-1">
                <div class="order-col-1-row-1">
                    <div class="order-col-1-row-1-col-1-category">
                        <h5 @click="toggleCategory('dry-clean')"
                            :class="{ 'active-category': activeCategory === 'dry-clean' }">
                            Dry Clean
                        </h5>
                        <h5 @click="toggleCategory('wash-fold')"
                            :class="{ 'active-category': activeCategory === 'wash-fold' }">
                            Wash & Fold
                        </h5>
                        <h5 @click="toggleCategory('carpets')"
                            :class="{ 'active-category': activeCategory === 'carpets' }">
                            Carpets 
                        </h5>
                    </div>
                    <div class="order-col-1-row-1-col-2">
                        <div class="search-container">
                            <input type="text" class="search-input" placeholder="Search by keywords">
                            <i class="search-icon fas fa-search"></i>
                        </div>
                    </div>

                </div>
                <div class="category-container" :class="{ 'active': activeCategory === 'dry-clean' }">
                    <div class="order-col-1-row-1-pr">
                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="category-container" :class="{ 'active': activeCategory === 'wash-fold' }">
                    <div class="order-col-1-row-1-pr">
                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="category-container" :class="{ 'active': activeCategory === 'carpets' }">
                    <div class="order-col-1-row-1-pr">
                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                        <div v-for="(product, index) in products" :key="index" class="order-col-1-row-1-col-1">
                            <div class="order-col-detail" @click="showProductModal(product)">
                                <h6>{{ product.title }}</h6>
                                <h5>115,-</h5>
                                <img src="@/assets/images/outfit-1.jpg">
                                <button class="place-order">Add</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="main-order-row-col-2">
                <div class="order-col-2-row-1">
                    <div class="order-btn">
                        <div class="order-details">
                            <h4>Your order</h4>
                            <p>You haven't entered any products yet. You can choose to skip this section and leave it to
                                JetClean. An amount of 29 kr will be charged as counting fee.</p>

                            <button>
                                Skip product entry over &nbsp;<i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div v-if="showModal" class="modal" @click="hideModal">
                <div class="modal-content" @click.stop>
                    <span class="close" @click="hideModal">&times;</span>
                    <template v-if="selectedProduct">
                        <h4>{{ selectedProduct.title }}</h4>
                        <p>{{ selectedProduct.description }}</p>
                        <img src="@/assets/images/outfit-1.jpg">
                        <div class="quantity-control">
                            <button @click="decreaseQuantity">-</button>
                            <span>{{ quantity }}</span>
                            <button @click="increaseQuantity">+</button>
                        </div>
                        <div class="addtocart-btn">
                            <button>Add 1pc 155,-</button>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'OrderDetail',
    data() {
        return {
            activeCategory: 'dry-clean',
            products: [
                { title: '5 shirts (Launder & Press)', imageUrl: '/assets/images/outfit-1.jpg', description: 'Upper body garment, typically thin, slippery fabric, button button, flip or stiff collar and short sleeves or long sleeves ending with cuffs. Laundered, ironed and on a hanger.' },
            ],
            selectedProduct: null,
            showModal: false,
            quantity: 1,
        };
    },
    methods: {
        toggleCategory(category) {
            this.activeCategory = category;
        },
        showProductModal(product) {
            this.selectedProduct = product;
            this.showModal = true;
        },
        hideModal(event) {
            if (event.target === event.currentTarget) {
                this.showModal = false;
                this.selectedProduct = null;
                this.quantity = 1;
            }
        },
        increaseQuantity() {
            this.quantity += 1;
        },
        decreaseQuantity() {
            if (this.quantity > 1) {
                this.quantity -= 1;
            }
        },
    },
};

</script>


<style>
.search-input {
    border: 3px solid #ccc;
    padding: 5px 10px;
    transition: border-color 0.3s ease;
}

.search-input:hover {
    border-color: #9370DB;
}

.addtocart-btn button {
    display: block;
    font-size: 14px;
    color: #fff;
    width: 340px;
    border: none;
    background: #3fe5b3;
    border-radius: 4px;
    padding: 0 25px;
    height: 50px;
    position: relative;
    transition: all 0.3s ease-in-out;
    font-weight: bold;
}

@media(max-width:500px) {
    .addtocart-btn button {
        width: 270px;
    }
}

@media(max-width:440px) {
    .addtocart-btn button {
        width: 257px;
    }
}

@media(max-width:400px) {
    .addtocart-btn button {
        width: 222px;
    }
}

@media(max-width:330px) {
    .addtocart-btn button {
        width: 185px;
    }
}

.addtocart-btn button:hover {
    background-color: #9370DB;
    color: #fff;
}

.quantity-control {
    margin: 10px;
    display: flex;
    align-items: center;
}

.quantity-control button {
    border-radius: 20px;
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.quantity-control button:hover {
    background-color: #9370DB;
    color: #fff;
}

.quantity-control span {
    margin: 0 10px;
    width: 9px;
}

.modal {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease-in-out forwards;
}

.modal-content {
    width: 50%;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
}

@media(max-width:500px) {
    .modal-content {
        width: 70%;
    }
}

@media(max-width:330px){
    .modal-content h4{
        font-size: 15px;
    }
    .modal-content p{
        font-size: 12px;
    }
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}


.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.2s ease-in-out;
}

.modal-fade-enter,
.modal-fade-leave-to

/* .modal-fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}

.c-1 {
    border-bottom: 1px solid grey;
}

.active-category {
    text-decoration: none;
    border-bottom: 3px solid rgb(15, 218, 96);
}

.category-container {
    display: none;
}

.category-container.active {
    display: block;
}

.order-col-detail button {
    margin: 10px;
    width: 30%;
    display: block;
    font-size: 11px;
    border: solid 1px #43425d;
    border-radius: 12px;
    background: transparent;
    padding: 4.3px 15px;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.order-col-detail button:hover {
    background-color: #9370DB;
    color: #fff;
    border-color: #9370DB;
}

.order-col-detail {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center
}

.order-col-detail img {
    height: 16rem;
}

@media(max-width:450px) {
    .order-col-detail img {
        height: 11rem;
    }
}

@media(max-width:330px) {
    .order-col-detail img {
        height: 10rem;
    }
}

.order-col-1-row-1-col-2 {
    width: 50%;
    margin: 10px;
}

@media(max-width:1040px) {
    .order-col-1-row-1-col-2 {
        width: 100%;
        margin: 0px;
        margin-top: 10px;
    }
}

.order-btn {
    margin: 10px;
    border-radius: 12px;
    background-color: #fff;
    border: 0.5px solid rgb(244, 242, 242);
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.249);
}

@media(max-width:1450px) {
    .order-btn {
        width: 50%;
        margin-left: 42px;
    }
}

@media(max-width:550px) {
    .order-btn {
        width: 78%;
        margin-left: 42px;
    }
}

.order-btn i {
    color: #fff;
}

.order-btn button {
    display: block;
    font-size: 14px;
    color: #fff;
    border: none;
    background: #A3A0FB;
    border-radius: 4px;
    padding: 0 25px;
    height: 50px;
    position: relative;
    transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
    font-weight: bold;
}

.order-btn button:hover {
    background-color: #BAB8FF;
    transform: translateX(3px);
}

.order-btn button i {
    margin-right: 8px;
}

.order-btn button:hover i {
    animation: shake 0.5s ease-in-out infinite;
}

@keyframes shake {
    0% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-5px);
    }

    50% {
        transform: translateX(0);
    }

    75% {
        transform: translateX(5px);
    }

    100% {
        transform: translateX(0);
    }
}


.main-order-row {
    display: flex;
    background-color: rgb(250, 250, 250);
    flex-direction: row;
}

@media(max-width:1450px) {
    .main-order-row {
        flex-direction: column;
    }
}

.order-col-1-row-1-col-1-category h5 {
    margin: 5px;
    width: 251px;
    font-size: 17px;
    cursor: pointer;
}

@media(max-width:1025px) {
    .order-col-1-row-1-col-1-category h5 {
        width: 200px;
    }
}

@media(max-width:450px) {
    .order-col-1-row-1-col-1-category h5 {
        font-size: 13px;
    }
}

.order-col-1-row-1-col-1-category {
    width: 50%;
    display: flex;
    margin: 10px;
    justify-content: center;
    text-align: center;
    flex-direction: row;
}

@media(max-width:1040px) {
    .order-col-1-row-1-col-1-category {
        width: 100%;
        margin: 0px;
    }
}

.order-col-1-row-1-col-1 {
    background-color: #ffffff;
    display: flex;
    width: auto;
    padding: 15px;
    margin: 15px;
    flex-direction: column;
    border: 3px solid #ffffff;
    border-radius: 6px;
    text-align: left;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s;

}

.order-col-1-row-1-col-1:hover {
    border-color: #9370DB;

}


.order-col-1-row-1-col-1 h5 {
    margin: 10px;
}

.order-col-1-row-1 {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    flex-direction: row;
}

@media(max-width:1040px) {
    .order-col-1-row-1 {
        flex-direction: column;
    }
}

.order-col-1-row-1-pr {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 10px;
    flex-direction: row;
}

.main-order-row-col-1 {
    display: flex;
    width: 70%;
    flex-direction: column;
}

@media(max-width:1450px) {
    .main-order-row-col-1 {
        width: 100%;
    }
}

.main-order-row-col-2 {
    display: flex;
    flex-direction: column;
    width: 30%;
}

@media(max-width:1450px) {
    .main-order-row-col-2 {
        width: 100%;
    }
}

.search-container {
    position: relative;
    width: auto;
}


.search-input {
    width: 100%;
    padding: 8px 30px 8px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 16px;
}

.search-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
}
</style>