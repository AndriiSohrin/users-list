<script setup lang="ts">
import {useStore} from "~/store/main.store";
const store =  useStore()
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://media.istockphoto.com/id/1189517575/nl/foto/3d-auto-op-zwarte-achtergrond.jpg?s=2048x2048&w=is&k=20&c=vpeKjM3RGHJx0DPFYIaoPKa_Q-wa5VxResNLmw5dgwg=',
  twitterCard: 'summary_large_image',
})
</script>


<template>
  <div class="container mx-auto px-4">



    <h1 class="text-2xl font-bold mb-4 text-center">Saved Users</h1>
    <div class="flex justify-between border-b pb-5">
      <UiBackButton />
      <button v-if="store.getSavedUsersValues.length" class="text-white font-bold py-2 px-4 rounded bg-slate-500" @click="store.deleteAllUsers()">Remove all</button>
    </div>


      <ul v-if="store.getSavedUsersValues.length">
        <UserItem v-for="user in store.getSavedUsersValues || []" :user="user" :key="user.id"></UserItem>
      </ul>

      <div v-else class="flex h-[600px] justify-center items-center flex-col text-center">
        <p class="mt-7 text-2xl">There are no saved users</p>
      </div>

  </div>

</template>