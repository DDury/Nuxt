<template>
  <div>This page is about me</div>
</template>

<script setup>
definePageMeta({
  layout: "another",
});

useHead({
  titleTemplate: "%s - about",
});
</script>
