<script setup lang="ts">
const router = useRouter();

const goBack = (): void => {
  router.go(-1);
};
</script>

<template>
  <button @click="goBack"  class="hidden md:block absolute -left-24 top-5 bg-slate-500 text-white px-3 py-1 rounded">Back</button>
</template>