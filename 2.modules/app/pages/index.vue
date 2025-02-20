<template>
  <div>This is main NuxtPage</div>
  <div>
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template>

<script setup>
function enableCustomLayout() {
  setPageLayout("another");
}
definePageMeta({
  layout: false,
});
</script>
