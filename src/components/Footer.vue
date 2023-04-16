<template>
    <footer class="bg-black/10 py-20">
        <div class="px-6 mx-auto lg:px-12 xl:px-14 text-sm leading-relaxed">
            <div v-for="grid in footer" class="grid" :class="grid.ColumnMobile, grid.ColumnsTablet, grid.ColumnsDesktop">
                <div v-for="columns in grid.columns" class="px-6" :class="columns.Class">
                    <div>
                        <component v-for="column in columns.Content"  :is="column.component" :blok="column"/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup>  
  const props = defineProps({
    footer: Object.FooterColumns
  });
</script>