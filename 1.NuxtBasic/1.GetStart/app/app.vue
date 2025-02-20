<template>
  <NuxtLayout :name="another">
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
const another = 'another'
</script>