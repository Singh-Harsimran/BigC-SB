<template>
    <div
      v-editable="blok"
      v-html="text"
      :class="blok.Class"
    ></div>
</template>
  
<script setup>
import { computed } from 'vue';
import { renderRichText } from '@storyblok/vue';
  const props = defineProps({ blok: Object});
  let text = computed(() => renderRichText(props.blok.Text));
</script>