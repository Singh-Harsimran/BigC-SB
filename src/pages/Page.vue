<script setup>
import { useStoryblok } from '@storyblok/vue';
import { ref, computed } from 'vue';
import Page404 from './404.vue';

let { pathname } = location;
let language = pathname.split('/')[1].replace('/', '');
let languages = ['en-gb', 'en'];
let hasLanguage = false;
let activeLanguage = 'en';

if (languages.includes(language)) {
  activeLanguage = language;
  hasLanguage = true;
}

const routes = {
  '/': 'home',
  '/home': 'home',
  '/product': 'product',
};
//const currentPath = ref(window.location.hash);
let currentPath = window.location.pathname;
if (hasLanguage) {
  currentPath = currentPath.replace(`/${activeLanguage}`, '');
}
//console.log(currentPath);
/*
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});
*/
//console.log(currentPath);
//console.log(currentPath.value.slice(1));
/*
const currentView = computed(() => {
  //return routes[currentPath] || NotFound;
  return routes[currentPath] || 'home';
});
*/
let currentView = routes[currentPath] || currentPath.slice(1);
//console.log(currentPath, currentView);

let story = null;
try {
  story = await useStoryblok(currentView, {
    version: 'draft',
    language: activeLanguage,
  });
} catch (e) {
  console.log('error: ', e);
  story = await useStoryblok('not-found', {
    version: 'draft',
    language: activeLanguage,
  });
}
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
