<template>
  <div v-editable="blok" class="py-16 px-6 mx-auto max-w-screen-xl lg:px-10 xl:px-12 ">
    <div class="md:flex">
      <div class="grow">
        <div class="md:flex">
          <div class="hidden md:block w-[72px] flex-none mr-10">
            <div class=" sticky top-0">
              <a class="mb-4 block" v-for="blok in blok.Gallery" :key="blok._uid" :href="'#gallery'+blok.id" v-on:click="goToImg($event,'gallery'+blok.id)">
                <img :src="blok.filename"/>
              </a>
            </div>
          </div>
          <div class="grow">
            <div class="mb-6" v-for="blok in blok.Gallery" :key="blok._uid" :id="'gallery'+blok.id">
              <img :src="blok.filename"/>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-[400px] flex-none md:ml-16">
        <StoryblokComponent
          v-for="blok in blok.Detail"
          :blok="blok"
          :key="blok._uid" 
        />
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ blok: Object });
const goToImg = (e,id) => {
  e.preventDefault();
  let element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
}
</script>
