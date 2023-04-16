<template>
    <div
      v-editable="blok"
      v-html="heading"
      class=" font-extrabold uppercase tracking-widest mb-4"
      :class="blok.Class , blok.Align"
    ></div>
</template>
  
<script setup>
  const props = defineProps({ blok: Object });
  const heading = `<${props.blok.Tag}>${props.blok.Text}</${props.blok.Tag}>`;
</script>