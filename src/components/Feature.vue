<template>
  <div
    v-editable="blok"
    class="relative md:flex md:flex-row items-center"
    :class="{ 'md:flex-row-reverse': imageOnRight }"
  >
    <div class="basis-1/2">
      <img :src="image" class="w-full h-auto" />
    </div>
    <div class="relative basis-1/2 text-black py-10 px-6 md:px-10 lg:px-16 xl:px-20 flex "
    :class="imageOnRight? 'md:justify-end' :'md:justify-start'">
    <div class="md:max-w-sm">
      <span class="block text-sm mb-4 uppercase font-bold">{{ subheading }}</span>
      <h2 class="mb-6 text-xl font-bold tracking-widest uppercase">
        {{ heading }}
      </h2>
      <div class="text-sm mb-4 space-y-4" v-html="text"></div>

        <a v-if="linkTitle && linkURL" href="{{linkURL}}"
        class="text-sm relative z-1
        after:bg-current after:content[''] after:h-[1px] after:absolute after:w-full after:left-0 after:-bottom-[2px]  after:transition-all hover:after:w-0 after:duration-300"
        >{{ linkTitle }}</a>
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
    let heading = blok.Heading;
    let subheading = blok.SubHeading;
    let imageOnRight = blok.ImageOnRight;
    let text = computed(() => renderRichText(blok.Text));
    let linkTitle = blok.ButtonLabel ? blok.ButtonLabel : false;
    let linkURL = blok.ButtonURL.url ? blok.ButtonURL.url : false;
    let image = blok.Image.filename ? blok.Image.filename : false;
    //const count = ref(0);

    // expose to template and other options API hooks
    return {
      blok,
      heading,
      subheading,
      text,
      imageOnRight,
      linkTitle,
      linkURL,
      image,
    };
  },
};

//const props = defineProps({ blok: Object });
</script>
