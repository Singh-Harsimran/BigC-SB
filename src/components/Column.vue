<template>
    <div v-editable="blok" v-for="blok in blok.Content" :key="blok._uid"  :class="blok.Class">
        <StoryblokComponent :blok="blok" />
    </div>
  </template>
  
  <script setup>
  defineProps({ blok: Object });
  </script>
  