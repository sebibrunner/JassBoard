<script setup lang="ts">
import Navigation from './components/Navigation.vue';
</script>

<template>
  <div class="flex-col">
    <Navigation />
    
    <main>
      <router-view></router-view>
    </main>
</div>
  
</template>