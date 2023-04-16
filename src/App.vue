<script setup>
import { ref, computed } from 'vue';
import Home from './pages/Home.vue';
import Product from './pages/Product.vue';
import Page from './pages/Page.vue';
const routes = {
  '/': Home,
  '/home': Home,
  '/product': Product,
};
//const currentPath = ref(window.location.hash);
const currentPath = window.location.pathname;
//console.log(currentPath);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});
//console.log(currentPath);
//console.log(currentPath.value.slice(1));

const currentView = computed(() => {
  return routes[currentPath] || NotFound;
});
//console.log(currentView);
</script>
<template>
  <Suspense>
    <template #default>
      <component :is="Page" />
    </template>

    <template #fallback>
      <div class="h-screen flex items-center justify-center">
        <div>
          <svg
            class="animate-spin h-8 w-8 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    </template>
  </Suspense>
</template>
