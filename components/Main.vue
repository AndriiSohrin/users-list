<script setup lang="ts">
import queryString from 'query-string';
import type {UserResponseInterface} from "~/types/UsersResponse.interface";
const route = useRoute();

const limit: number = 10;
const currentPage = ref(route.query.page ? Number(route.query.page) : 1);

const { data, pending, refresh } = await useAsyncData<UserResponseInterface>(
    'users',
    () => $fetch('https://dummyjson.com/users' + getParams())
)
watch(() => route.query.page, (newPage) => {
  currentPage.value = Number(newPage) || 1;
  refresh()
});

function getParams() {
  const skip = currentPage.value * limit - limit;
  const parsedUrl = queryString.parseUrl('/');
  const stringifiedParams = queryString.stringify({
    limit: limit,
    skip,
    ...parsedUrl.query,
  });

  return `${parsedUrl.url}?${stringifiedParams}`;
}

</script>

<template>
  <div>
    <UiSpinner v-if="pending"/>

    <div v-else>
      <UserList :users="data?.users || []"/>
      <UiPagination :total="data?.total || 0" :limit="limit" :current-page="currentPage" url="/" />
    </div>

  </div>
</template>

