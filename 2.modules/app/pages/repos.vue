<template>
  <div>
    <p class="pb-5">My repository</p>

    <UPage>
      <template #default>
        <h1 class="text-xl font-bold mb-3">대시보드</h1>
        <UPageGrid class="mb-5">
          <UCard>
            <h3 class="text-lg font-semibold">위젯 1</h3>
            <p>대시보드 위젯 내용</p>
          </UCard>
          <UCard>
            <h3 class="text-lg font-semibold">위젯 2</h3>
            <p>대시보드 위젯 내용</p>
          </UCard>
        </UPageGrid>
      </template>
    </UPage>

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
