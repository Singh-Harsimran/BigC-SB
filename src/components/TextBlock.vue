<template>
  <div v-editable="blok" :class="`px-6 py-14 ${blok.TextAlign}`">
    <div class="mb-2 text-sm uppercase font-bold">
      {{ blok.SubHeading }}
    </div>
    <div class="mb-6 text-5xl font-bold">{{ blok.Heading }}</div>
    <div class="text-base">{{ blok.Description }}</div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
