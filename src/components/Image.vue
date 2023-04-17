<template>
    <div v-editable="blok" :class="blok.Class">
        <img loading="lazy" class="max-w-full h-auto" 
        v-if="blok.Image.filename" :src="blok.Image.filename" :alt="blok.Image.alt" :name="blok.Image.name" :title="blok.Image.title"/>
    </div>
</template>
  
<script setup>
  const props = defineProps({ blok: Object });
</script>