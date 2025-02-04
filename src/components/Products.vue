<template>
    <div class="product-board">
        <Search @search="handleSearch"/>
        <div class="product-list">
            <Table :list-of-items="filteredProductsByKeyWord" 
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
    </div>
</template>

<script lang="ts">
    export default {
        name: "Products"
    }
    import Vue, { computed, ref, toRaw } from 'vue'
    import Table from '../share/Table.vue'
    import { useCartStore } from '../stores/cartStore'
    import  Search  from './Search.vue'

</script>

<script setup lang="ts">
    const searchKeyWord = ref('')
 
    const headers = ['isbn', 'name', 'price']
    const cartStore = useCartStore()
    
    // can use pinia to create a global store
    const handleAddItem = (entity: object) => {
        cartStore.addItem(entity)
    }

    const handleSearch = (search: string) => {
        searchKeyWord.value = search
    }

    const filteredProductsByKeyWord = computed(() => {
        if ( searchKeyWord.value != '' ) {
            const formataKeyWord = searchKeyWord.value?.toLowerCase()
            const listGrocery = toRaw(cartStore.itemList)
            return listGrocery.filter((row) => {
                return Object.keys(row).some((key) => {
                    return String(row[key]).toLowerCase().indexOf(formataKeyWord) > -1
                })
            })
        } return cartStore.itemList
        
    })
    

</script>

<style>
.product-list {
    width: 70vw;
}
</style>