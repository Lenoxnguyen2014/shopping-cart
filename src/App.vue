
<template>
    <Header>
      <NavBar />
    </Header>
  <div class="main">
    <Products  />
    <Cart />
  </div>
</template>


<script setup lang="ts">
  import Products from './components/Products.vue'
  import NavBar from './components/NavBar.vue'
  import Cart from './components/Cart.vue'

</script>

<style scoped>

</style>
