<template>
    <div v-if="showCard" class="cart">
       <h3> My Shopping Cart </h3>
    </div>
</template>


<script lang="ts">
    export default {
        name: "Cart"
    }
    import Vue, { computed, ref, watch } from 'vue'
</script>

<script setup lang="ts">
    // caculate total here
    // p1: process to checkout
    
    const props = defineProps(
        {
            openCart: Boolean,
            cartList: Array<Object>
        })
    const showCard = ref(true)
    
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
