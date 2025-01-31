<template>

        <div class="list-product">
            <Table :list-of-items="list_of_prducts" 
                   :headers="headers"
                   @add-item="handleAddItem"
                   @remove-item="handleRemoveItem"
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
    import Vue, { ref } from 'vue'
    import { generateProducts } from '../faker/products'
    import Table from '../share/Table.vue'

</script>

<script setup lang="ts">
    
    const list_of_prducts = generateProducts(10)
    const headers = ['isbn', 'name', 'price']
    const pendingList = ref([])
    
    // can use pinia to create a global store
    const handleAddItem = (entity: object) => {
        pendingList.value.push(entity)
    }

</script>

<style>
.main{
    display: flex;
}
</style>