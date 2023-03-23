<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="flex">
    <aside>
        <Sidebar />
    </aside>
    
    <main>
      <router-view></router-view>
    </main>
</div>
  
</template>