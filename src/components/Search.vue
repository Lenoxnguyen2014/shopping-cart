<template>
    <input class="searchbar" 
            type="text" 
            placeholder="search product" 
            v-model="searchKeyWord" 
            @input="updateSearchKey"
        />
</template>

<script lang="ts" >
    export default 
    {
        name: "Search"
    }
    import {ref} from 'vue'
</script>

<script setup lang="ts">
    const searchKeyWord = ref('')

    const emit = defineEmits<{
        (e: 'search', searchKeyWord: String): void
    }>()
    
    const updateSearchKey = () => {
        emit('search', searchKeyWord.value)
    }
</script>

<style>
.searchbar {
    width: 100%;
    padding: 4px;
}
</style>