<template>
    <div v-editable="blok" :class="blok.Class">
        <a :href="blok.Link.url" v-text="blok.Label"></a>
    </div>
</template>
  
<script setup>
    const props = defineProps({ 
        blok: Object
    });
</script>