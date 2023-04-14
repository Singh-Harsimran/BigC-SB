<template>
  <div
    v-editable="blok"
    :style="`height:${blok.Height ? blok.Height : 0}px;`"
  ></div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
