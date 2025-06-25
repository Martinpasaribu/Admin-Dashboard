<template>
  <div class="flex items-center justify-center h-screen bg-gray-50">
    <form @submit.prevent="login" class="bg-white p-6 rounded shadow w-80 space-y-4">
      <h2 class="text-xl font-bold">Login</h2>
      <input v-model="username" type="text" placeholder="Username" class="input" />
      <input v-model="password" type="password" placeholder="Password" class="input" />
      <button type="submit" class="btn">Login</button>
    </form>
  </div>
</template>

<script setup>
const username = ref('')
const password = ref('')
// const auth = useAuthStore()

// const login = async () => {
//   await auth.login({ username: username.value, password: password.value })
//   navigateTo('/admin')
// }
</script>

<style scoped>
.input { @apply w-full px-3 py-2 border rounded; }
.btn { @apply bg-blue-600 text-white px-4 py-2 rounded; }
</style>
