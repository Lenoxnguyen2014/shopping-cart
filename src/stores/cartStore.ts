import { defineStore } from "pinia"

interface Product {
    isbn: String,
    name: String,
    price: String
}

interface CartState {
    itemList : Product[]
    pendingList: Product[]
}
import { generateProducts } from '../faker/products'

export const useCartStore = defineStore('cart', {
    state: ():CartState => ({
        itemList:  generateProducts(10),
        pendingList: []
     }),
    actions: {
        addItem(item: Product) {
            this.pendingList.push(item)

            // update itemList
            this.itemList = this.itemList.filter((prod) => prod.isbn != item.isbn)
        },

        removeItem(item:Product){
            this.pendingList = this.pendingList.filter((prod) => prod.isbn != item.isbn)

            //update itemList
            this.itemList.push(item)
        },
        
        clearCart() {
            this.itemList = [...this.pendingList, ...this.itemList]
            this.pendingList = []
        }
    },
    getters: {
        totalPrice(state){
            return state.pendingList.reduce((total, item) => total + parseFloat(item.price), 0);
        }

    }
})