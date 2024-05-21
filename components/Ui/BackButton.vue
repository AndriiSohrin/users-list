<script setup lang="ts">
const router = useRouter();

const goBack = (): void => {
  router.go(-1);
};
</script>

<template>
  <button @click="goBack"  class=" md:block bg-slate-500 text-white px-3 py-1 rounded">Back</button>
</template>