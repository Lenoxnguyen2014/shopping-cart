<template>
  <table>
    <tr>
      <th v-for="(header, index) in props.headers" :key="`${header}${index}`">
        {{ header }}
      </th>
    </tr>
    <tr
      v-for="(entity, index) in props.listOfItems"
      :key="`entity-${entity.name}`"
      class="table-row"
    >
      <td v-for="(header, index) in props.headers" :key="`${header}-${index}`">
        <!-- create slot to pass in products table -->
        <slot :name="`column${index}`" :entity="entity"></slot>
      </td>
      <td><button @click="handleAdd(entity)">Add</button></td>
    </tr>
  </table>
</template>

<script lang="ts">
export default {
  name: "Table",
};
</script>

<script setup lang="ts">
const props = defineProps({
  headers: Array<String>,
  listOfItems: Array<{}>,
});
const emit = defineEmits(["add-item"]);

const handleAdd = (entity: Object) => {
  if (entity) {
    emit("add-item", entity);
  }
};
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
  table-layout: auto;
  word-wrap: break-word;
}

td {
  padding: 24px;
  text-align: center;
  border-bottom: 1px solid rgb(224, 242, 237);
}

.header-item {
  padding: 30px 20px;
  font-size: 12px;
  background-color: rgb(224, 242, 237);
  text-transform: uppercase;
}

.table-rows:nth-child(odd) {
  background-color: rgb(250, 250, 250);
}

.table-rows:nth-child(n):hover {
  background-color: rgb(244, 246, 245);
}
</style>
