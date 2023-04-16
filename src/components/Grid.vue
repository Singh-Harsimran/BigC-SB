<template>
  <div v-editable="blok" class="grid" :class="blok.Class, blok.ColumnMobile, blok.ColumnsTablet, blok.ColumnsDesktop">
    <div v-for="blok in blok.columns" :key="blok._uid" :class="blok.Class">
      <StoryblokComponent :blok="blok" />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
