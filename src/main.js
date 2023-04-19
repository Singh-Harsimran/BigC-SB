import { createApp } from 'vue';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import App from './App.vue';

import Page from './components/Page.vue';
import Product from './components/Product.vue';

import Section from './components/Section.vue';
import Grid from './components/Grid.vue';
import Column from './components/Column.vue';
import Teaser from './components/Teaser.vue';
import Feature from './components/Feature.vue';
import Hero from './components/Hero.vue';
import Space from './components/Space.vue';
import TextBlock from './components/TextBlock.vue';
import Heading from './components/Heading.vue';
import RichText from './components/RichText.vue';
import Link from './components/Link.vue';
import Benefit from './components/Benefit.vue';
import Image from './components/Image.vue';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Announcement from './components/Announcement.vue';

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: 'n4HyFrrsuX1CcPVyzembQgtt',
  use: [apiPlugin],
});

app.component('Page', Page);
app.component('Product', Product);

app.component('Header', Header);
app.component('Footer', Footer);
app.component('Announcement', Announcement);

app.component('Section', Section);
app.component('Grid', Grid);
app.component('Column', Column);
app.component('Teaser', Teaser);
app.component('Feature', Feature);
app.component('Hero', Hero);
app.component('Space', Space);
app.component('TextBlock', TextBlock);
app.component('Heading', Heading);
app.component('RichText', RichText);
app.component('Link', Link);
app.component('Benefit', Benefit);
app.component('Image', Image);

app.mount('#app');
