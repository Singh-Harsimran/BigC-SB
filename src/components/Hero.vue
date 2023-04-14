<template>
  <div
    v-editable="blok"
    class="h-screen relative z-1 flex items-end justify-center pb-14"
  >
    <img
      :src="image"
      class="z-0 absolute inset-0 w-full h-full object-cover object-center"
    />
    <div class="absolute inset-0 bg-black/30"></div>
    <div class="relative max-w-4xl px-6">
      <div
        class="
          text-base
          font-bold
          text-center text-white
          uppercase
          mb-2
          tracking-widest
        "
        v-html="articleContent"
      ></div>
      <h2
        class="
          mb-6
          text-2xl
          font-bold
          text-center
          tracking-widest
          text-white
          uppercase
        "
      >
        {{ heading }}
      </h2>

      <div v-if="linkTitle && linkURL" class="text-center">
        <a
          href="{{linkURL}}"
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
            z-1
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
            before:duration-300 before:z-0
          "
          ><span class="relative">{{ linkTitle }}</span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { renderRichText } from '@storyblok/vue';

export default {
  props: {
    blok: Object,
  },
  setup(props) {
    let blok = props.blok;
    let heading = blok.Headline;
    let articleContent = computed(() => renderRichText(blok.Description));
    let linkTitle = blok.ButtonTitle ? blok.ButtonTitle : false;
    let linkURL = blok.link.url ? blok.link.url : false;
    let image = blok.image.filename ? blok.image.filename : false;
    //const count = ref(0);

    // expose to template and other options API hooks
    return {
      blok,
      heading,
      articleContent,
      linkTitle,
      linkURL,
      image,
    };
  },
};

//const props = defineProps({ blok: Object });
</script>
