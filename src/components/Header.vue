<template>
  <header
    class=" box-border "
    :data-class="[headerClasses, headerBg, headerTransparency]"
    :class="isHome ? 'home -mt-[1px] -mb-20 group/header' : 'page'"
  > 
  <div class="flex z-10 relative px-4 xl:px-12 transition-all duration-500  border-b"
    :class="isHome ? ' border-b-white/10 text-white group-hover/header:text-black group-hover/header:bg-white' : 'border-b-black/10'">
    <div class="flex-1 flex items-center " >
        <button class=" xl:hidden" v-on:click="toggleMobileNav()">
            <svg class="w-5 h-5" role="presentation" viewBox="0 0 24 16" >
                <path d="M0 15.985v-2h24v2H0zm0-9h24v2H0v-2zm0-7h24v2H0v-2z" fill="currentColor"></path>
            </svg>
        </button>
        <div class="fixed inset-0 z-10 xl:static xl:!visible" :class="mobileNavOpen ? 'visible':'invisible'">
            <div class="block absolute inset-0 bg-black/30 xl:hidden" v-on:click="toggleMobileNav()"></div>
            <div class="relative py-6 px-6 bg-white h-screen w-[90vw] shadow-lg xl:shadow-none xl:h-auto xl:w-auto xl:p-0 transition-all duration-500 xl:!translate-x-0 xl:bg-transparent"  :class="mobileNavOpen ? 'translate-x-0':'-translate-x-full'">
                <button class=" xl:hidden" v-on:click="toggleMobileNav()">
                    <svg class="w-4 h-4" role="presentation" viewBox="0 0 16 14">
                        <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path>
                    </svg>
                </button>
                <ul class="relative flex flex-col xl:flex-row xl:space-x-10 uppercase font-extrabold text-sm tracking-widest">
                    <li v-for="link in menu" class="relative group">
                        <a :href="link.url.url ? link.url.url : link.url.cached_url" v-text="link.label" :target="link.url.target"
                            class="relative block py-4 xl:h-20 flex items-center
                            after:bg-current after:content[''] after:h-[2px] after:absolute 
                            after:left-0 after:-bottom-[1px] after:w-0 after:transition-all 
                            hover:after:w-full after:duration-30
                            
                            "></a>
                        <ul v-if="link.subItems.length" class="absolute left-0 top-full z-10 bg-white py-6 px-6 w-60 -mt-[1px] invisible group-hover:visible
                        after:bg-current after:content[''] after:h-[2px] after:absolute 
                            after:left-0 after:top-0 after:w-0 after:transition-all 
                            group-hover:after:w-full after:duration-300
                        ">
                            <li v-for="link in link.subItems">
                                <a :href="link.url.url ? link.url.url : link.url.cached_url" v-text="link.label" :target="link.url.target"></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="flex-none">
        <a href="/" class="h-20 flex items-center">
            <img :src="logo.filename" :class="isHome?'hidden group-hover/header:block':'block'"/>
            <img :src="logoAlternate.filename" :class="isHome? 'block group-hover/header:hidden':'hidden'"/>
        </a>
    </div>
    <div class="flex-1 flex justify-end items-center space-x-6">
        <a href="">
            <svg class="w-5 h-5" role="presentation" viewBox="0 0 21 21">
                <g transform="translate(1 1)" stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square">
                    <path d="M18 18l-5.7096-5.7096"></path>
                    <circle cx="7.2" cy="7.2" r="7.2"></circle>
                </g>
            </svg>
        </a>

        <a href="">
            <svg class="w-5 h-5" role="presentation" viewBox="0 0 19 23">
                <path d="M0 22.985V5.995L2 6v.03l17-.014v16.968H0zm17-15H2v13h15v-13zm-5-2.882c0-2.04-.493-3.203-2.5-3.203-2 0-2.5 1.164-2.5 3.203v.912H5V4.647C5 1.19 7.274 0 9.5 0 11.517 0 14 1.354 14 4.647v1.368h-2v-.912z" fill="currentColor"></path>
            </svg>
        </a>
    </div>
  </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  logo: Object,
  logoAlternate: Object,
  menu: Object,
  page: String
});
const isHome = props.page.length == 1 ? true : false;



const mobileNavOpen = ref(false)

const toggleMobileNav = () => {
  mobileNavOpen.value = !mobileNavOpen.value
}
/*
const route = useRoute()
watch(route, () => {
  mobileNavOpen.value = false
})
*/

const headerClasses = ref('h-32')
const logoScale = ref('scale-100')

const headerBg = computed(() => {
  //return props.light ? 'bg-light' : 'bg-[#0B0F19]'
})

const headerTransparency = computed(() => {
  //return props.disable_transparency ? '' : 'bg-opacity-80 backdrop-blur-lg'
})

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      headerClasses.value = ' shadow-md h-20'
      logoScale.value = 'scale-75'
    } else {
      headerClasses.value = 'h-32'
      logoScale.value = 'scale-100'
    }
  })
})
</script>