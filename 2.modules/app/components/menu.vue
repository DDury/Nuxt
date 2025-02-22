<template>
  <nav class="font-mono">
    <ul class="flex space-x-4">
      <li>
        <NuxtLink to="/" class="link">Main page</NuxtLink>
      </li>
      <li>
        <NuxtLink to="about" class="link">About page</NuxtLink>
      </li>
      <li>
        <NuxtLink to="repos" class="link">repository</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.link {
  @apply p-3 hover:bg-gray-100;
}
</style>
