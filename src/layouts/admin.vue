

<template>
  <div class="flex min-h-screen bg-pink-800">
    <Sidebar />
    <div class="flex flex-col flex-1">
      <Topbar />
      <main class="p-4">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/layouts/sidebar.vue'
import Topbar from '@/components/layouts/topbar.vue'
</script>
