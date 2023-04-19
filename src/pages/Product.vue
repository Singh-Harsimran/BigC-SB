<script setup>
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('product', { version: 'draft' });
</script>
<template>
  <div class="flex">
    <div class=""></div>
    <div class="">
      <StoryblokComponent v-if="story.ProductDetail" :blok="story.content" />
    </div>

    <StoryblokComponent v-if="story" :blok="story.content" />

  </div>
</template>
