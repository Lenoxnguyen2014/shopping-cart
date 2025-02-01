<template>

        <div class="list-product">
            <Table :list-of-items="listOfProducts" 
                   :headers="headers"
                   @add-item="handleAddItem"
                >
                <template #column0="{ entity }">
                    {{ entity.isbn }}
                </template>
                <template #column1="{ entity }">
                    {{ entity.name }}
                </template>
                <template #column2="{ entity }">
                    {{ entity.price }}
                </template>
            </Table>
        </div>
</template>

<script lang="ts">
    export default {
        name: "Products"
    }
    import { watch, ref, computed } from 'vue'
    import Table from '../share/Table.vue'
    import { useCartStore } from '../stores/cartStore'
</script>

<script setup lang="ts">
    
    const headers = ['isbn', 'name', 'price']
    const cartStore = useCartStore()
    
    // can use pinia to create a global store
    const handleAddItem = (entity: object) => {
        cartStore.addItem(entity)
    }
    const listOfProducts = computed(() => cartStore.itemList);

    

</script>

<style>
.main{
    display: flex;
}
</style>