<template>
    <div class="navbar">
        <h1>Expensive Shopping List</h1>
    </div>
    <FancyButton @click="openCard()">
        <p v-if="showCart">Close</p>
        <p v-else>showCard</p>
    </FancyButton>
</template>

<script lang="ts">
    export default {
        name: "NavBar"
    }
    import Vue, {ref} from 'vue'
    import FancyButton from '../share/FancyButton.vue';

</script>

<script setup lang="ts">

    const showCart = ref(false)


    const openCard = () =>{
        showCart.value = !showCart.value
    }


</script>

<style>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
}
</style>