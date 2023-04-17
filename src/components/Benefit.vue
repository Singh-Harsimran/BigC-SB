<template>
    <div v-editable="blok" class="relative h-[500px] xl:h-[600px] group overflow-hidden flex items-end">
        <img loading="lazy" class="absolute w-full h-full inset-0 object-fit object-cover scale-100 group-hover:scale-105 transition-all duration-500" v-if="blok.Image.filename" :src="blok.Image.filename" :alt="blok.Image.alt" :name="blok.Image.name" :title="blok.Image.title"/>
        <div class="absolute inset-0 bg-black/30"></div>
        <div class="relative text-white px-10 pb-16">
            <div class="mb-2 text-sm uppercase font-bold tracking-widest" v-text="blok.SubHeading"></div>
            <div class="mb-6 text-xl font-bold tracking-widest uppercase" v-text="blok.Heading"></div>
            <div v-if="text" class="text-base space-y-4" v-html="text"></div>
            <a v-if="blok.Label && blok.Link.url" :href="blok.Link.url" v-text="blok.Label"
                class="
                inline-block
                border border-white
                py-3
                px-6
                text-black
                uppercase
                text-xs
                tracking-widest
                font-black
                relative
                z-10

                hover:text-white
                before:bg-white
                before:content['']
                before:h-full
                before:w-full
                before:absolute
                before:left-0
                before:top-0
                before:transition-all
                hover:before:w-0
                before:duration-300 before:-z-10"
            ></a>
        </div>
  </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { renderRichText } from '@storyblok/vue';
    const props = defineProps({ blok: Object});
    let text = computed(() => renderRichText(props.blok.Text));
  </script>