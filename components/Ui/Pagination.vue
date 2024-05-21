<script setup lang="ts">
const props = defineProps<{
  total: number;
  limit: number;
  currentPage: number;
  url: string;
}>();

function range(start: number, end: number): number[] {
  return [...Array(end).keys()].map((el) => el + start)
}

const pageCount = computed(() => Math.ceil(props.total / props.limit));
const pages = computed(() => (pageCount.value > 0 ? range(1, pageCount.value) : []));

</script>


<template>
  <ul class="pagination flex space-x-2 flex-wrap gap-1 justify-center">
    <li
        v-for="page in pages"
        :key="page"
        class="page-item m-1"
        :class="{ 'bg-blue-500 text-white rounded': currentPage === page, 'bg-white text-blue-500 rounded': currentPage !== page }"
    >
      <NuxtLink
          :to="{ path: url, query: { page: page } }"
          class="page-link px-3 py-1 rounded border border-gray-300 hover:bg-gray-200 inline-block h-full"
      >
        {{ page }}
      </NuxtLink>
    </li>
  </ul>
</template>