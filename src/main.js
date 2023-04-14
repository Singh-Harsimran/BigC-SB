import { createApp } from 'vue';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import App from './App.vue';

import Page from './components/Page.vue';
import Product from './components/Product.vue';

import Grid from './components/Grid.vue';
import Teaser from './components/Teaser.vue';
import Feature from './components/Feature.vue';
import Hero from './components/Hero.vue';
import Space from './components/Space.vue';
import TextBlock from './components/TextBlock.vue';

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: 'ucd3BuwBFrjaVaS228NECQtt',
  use: [apiPlugin],
});

app.component('Page', Page);
app.component('Product', Product);

app.component('Grid', Grid);
app.component('Teaser', Teaser);
app.component('Feature', Feature);
app.component('Hero', Hero);
app.component('Space', Space);
app.component('TextBlock', TextBlock);

app.mount('#app');
