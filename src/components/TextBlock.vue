<template>
  <div v-editable="blok" class="px-6 py-14" :class="blok.TextAlign">
    <div class="mb-2 text-sm uppercase font-bold tracking-widest">
      {{ blok.SubHeading }}
    </div>
    <div class="mb-6 text-xl font-bold tracking-widest uppercase">{{ blok.Heading }}</div>
    <div class="text-base space-y-4" v-html="text"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { renderRichText } from '@storyblok/vue';
  const props = defineProps({ blok: Object});
  let text = computed(() => renderRichText(props.blok.Description));
</script>
