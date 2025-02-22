<template>
  <div>
    <p class="pb-5">My repository</p>
    <ul class="grid grid-cols-1 gap-4">
      <li
        v-for="repo in repos"
        :key="repo.id"
        class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono"
      >
        <a :href="repo.html_url" target="_blank">
          <div class="flex items-center justify-between text-sm">
            <div>{{ repo.name }}</div>
            <div>{{ repo.size }}</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
const { data } = await useFetch("https://api.github.com/users/DDury/repos");
const repos = computed(() => data.value.sort((a, b) => b.size - a.size));
</script>
