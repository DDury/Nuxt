<template>
  <div class="container mx-auto max-w-2xl">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/" class="underline decoration-wavy"
            >Main page</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="about">About page</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>

  This is default layout!
  <slot></slot>
</template>

<script setup>
useHead({
  // as a string,
  // where `%s` is replaced with the title
  title: "default layout",
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
