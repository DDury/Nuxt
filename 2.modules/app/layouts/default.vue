<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between mt-10">
      <div>
        Default layout!
        <slot></slot>
      </div>
      <Menu />
    </header>
  </div>
</template>

<script setup>
useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: "%s - default",
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
