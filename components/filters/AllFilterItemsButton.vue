<template>
  <button @click="$emit('onClickAllFilterItems')">{{ allItemButton.title }}</button>
</template>


<script>
export default {
  props: ["allItemButton"],
};
</script>
