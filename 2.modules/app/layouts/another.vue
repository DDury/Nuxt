<template>
  <div class="container mx-auto max-w-2xl">
    <slot></slot>
  </div>
</template>

<script setup>
useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: "%s - another",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style>
body {
  font-family: "roboto";
}
</style>
