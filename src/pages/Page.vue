<script setup>
import { useStoryblok } from '@storyblok/vue';
import { ref, computed } from 'vue';

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

let siteConfigContent = ref();
let siteConfig = await useStoryblok('site-config', {
    version: 'draft',
    language: activeLanguage,
});
siteConfigContent.value = siteConfig.story;

let header = computed(() => {
  let headerData = {};
  if(siteConfigContent.value.logo){ headerData.logo = siteConfigContent.value.logo; }
  if(siteConfigContent.value.alternatelogo){ headerData.alternatelogo = siteConfigContent.value.alternatelogo; }
  if(siteConfigContent.value.menu){ headerData.menu = siteConfigContent.value.menu; }
  return headerData
});
console.log(header)

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
  <Announcement
    :text="siteConfig.content.AnnouncementText"
    :link="siteConfig.content.AnnouncementLink"
    :bg="siteConfig.content.AnnouncementBarColor"
    :color="siteConfig.content.AnnouncementTextColor"
    />
  <Header 
    :page="currentPath"
    :logo="siteConfig.content.HeaderLogo" 
    :logoAlternate="siteConfig.content.HeaderLogoAlternate" 
    :menu="siteConfig.content.HeaderMenu" 
    />
  <StoryblokComponent v-if="story" :blok="story.content" />
  <Footer :footer="siteConfig.content.FooterColumns"/>
</template>
