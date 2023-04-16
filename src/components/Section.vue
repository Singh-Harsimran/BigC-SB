<template>
    <div v-editable="blok" :class="blok.Class">
      <div v-for="blok in blok.Content" :key="blok._uid" :class="blok.Class">
        <StoryblokComponent :blok="blok" />
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({ blok: Object });
  </script>
  