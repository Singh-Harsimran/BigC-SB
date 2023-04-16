<template>
    <div class="text-center py-3 px-6 text-sm font-bold  tracking-widest" :style="`background-color:${bg.color};color:${color.color};`">
        <a :href="link.url.url" v-text="text"></a>
    </div>
</template>
<script setup>  
  const props = defineProps({
    text: Object,
    link: Object,
    bg: Object,
    color: Object
  });
</script>