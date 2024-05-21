<script setup lang="ts">
import {useStore} from "~/store/main.store";
const store =  useStore()

</script>


<template>
  <div class="container mx-auto px-4">
      <UiBackButton />
    <h1 class="text-2xl font-bold mb-4 text-center">Saved Users</h1>

      <ul v-if="store.getSavedUsersValues.length">
        <UserItem v-for="user in store.getSavedUsersValues || []" :user="user" :key="user.id"></UserItem>
      </ul>

      <div v-else class="flex h-[600px] justify-center items-center flex-col text-center">
        <p class="mt-7 text-2xl">There are no saved users</p>
      </div>

  </div>

</template>