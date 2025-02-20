<template>
  <div>This is my private blog [{{ route.params.id }}]</div>
</template>

<script setup>
const route = useRoute();
</script>
