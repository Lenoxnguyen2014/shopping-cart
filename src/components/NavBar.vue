<template>
    <div class="navbar">
        <h1>Expensive Shopping List</h1>
    </div>
    <div class="navbar-action">
        <FancyButton @click="openCart()" :model-value="showCart">
            <p v-if="showCart">Close</p>
            <p v-else>showCard</p>
        </FancyButton>
    </div>
</template>

<script lang="ts">
    export default {
        name: "NavBar"
    }
    import { ref } from 'vue'
    import FancyButton from '../share/FancyButton.vue'
</script>

<script setup lang="ts">
    const showCart = ref(false)

    const emit = defineEmits<{
        (e: 'open-cart', showCart: boolean): void
    
    }>()


    const openCart = () => {
        showCart.value = !showCart.value
        emit('open-cart', showCart.value)
    }


</script>

<style>
.navbar {
    display: block;
}
.navbar-action {
    position: absolute;
    right: 10%;
}
</style>