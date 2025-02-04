
<template>
    <Header>
      <NavBar @open-cart="handleCart"/>
    </Header>
  <div class="main">
    <Products  />
    <Cart :openCart="isOpen" />
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue'
  import Products from './components/Products.vue'
  import NavBar from './components/NavBar.vue'
  import Cart from './components/Cart.vue'
</script>

<script setup lang="ts">
  const isOpen = ref(false)

  const handleCart = (open: boolean) => {
    isOpen.value = open
  }

</script>

<style scoped>
.main {
  display: inline;
}
</style>
