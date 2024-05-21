<script setup lang="ts">
import {useStore} from "~/store/main.store";
import type {UserInterface} from "~/types/User.interface";
const store = useStore()

const props = defineProps<{
  user: UserInterface;
}>();


function save() {
    store.saveUser(props.user)
}

const isAlreadySaved = computed(() => !!store.users[props.user.id])


</script>

<template>
  <li>
    <NuxtLink class="py-4 flex justify-between" :to="`/details/${props.user.id}`">
      <div class="flex items-center">
        <img :src="user.image" alt="avatar" class="w-10 h-10 rounded-full mr-2">
        <div>
          <div class="font-bold">{{ user.firstName }}</div>
          <div class="text-sm text-gray-600">{{ user.email }}</div>
        </div>
      </div>


      <UserButtons :isAlreadySaved="isAlreadySaved" @save="save" />
    </NuxtLink>
  </li>
</template>

