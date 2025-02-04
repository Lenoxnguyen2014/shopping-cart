<template>
    <div v-if="props.openCart" class="cart">
       <h3> My Shopping Cart </h3>
       <div v-if="updatedPendingList.length > 0">
      <ul>
        <li v-for="item in updatedPendingList" :key="item.id">
          {{ item.name }} - ${{ item.price }}
        </li>
      </ul>
      <p><strong>Total: ${{ cartStore.totalPrice }}</strong></p>
      <button @click="checkout">Checkout</button>
      <button @click="clearCart">Clear Cart</button>
    </div>
    </div>
</template>


<script lang="ts">
    export default {
        name: "Cart"
    }
    import {  ref, watch } from 'vue'
    import { useCartStore } from '../stores/cartStore';
</script>

<script setup lang="ts">
    const props = defineProps(
        {
            openCart: Boolean,
        })

    const cartStore = useCartStore()
    const updatedPendingList = ref([...cartStore.pendingList]) 

    const checkout = () => {
        console.log('success')
    }

    const clearCart = () => {
        cartStore.clearCart()
    }
    
    watch(() => [...cartStore.pendingList], (newPendingList) => {
        updatedPendingList.value = newPendingList
    })
</script>

<style>
.cart {
    right: 0%;
    width: 30%;
    height: 80%;
    position: absolute;
    border: black solid 1px;
    display: flex;
    justify-content: center;
}
</style>
