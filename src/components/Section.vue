<template>
    <div v-editable="blok" class="bg-center bg-cover" :class="blok.Class" :style="background">
      <div v-for="blok in blok.Content" :key="blok._uid" :class="blok.Class">
        <StoryblokComponent :blok="blok" />
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({ blok: Object });
  let background = '';
  if(props.blok.Background && props.blok.Background.filename){
    background = `background-image:url(${props.blok.Background.filename});`;
  }
  </script>
  