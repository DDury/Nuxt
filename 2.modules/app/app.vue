<template>
  <NuxtLayout>
    <div class="text-cyon-500 text-xl underline decoration-dotted">
      <NuxtPage></NuxtPage>
    </div>
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  title: "Main Page",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
});
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>
<!-- <script setup>
const another = 'another'
</script> -->
