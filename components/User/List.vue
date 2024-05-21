
<script setup lang="ts">
import type {UserInterface} from "~/types/User.interface";

defineProps<{
  users: UserInterface[];
}>();

</script>

<template>
  <div class="container mx-auto px-4">
    <h1 class="text-2xl font-bold mb-4 text-center">User List</h1>

    <ul class="divide-y divide-gray-200">
        <UserItem v-for="user in users" :user="user" :key="user.id"></UserItem>
    </ul>
  </div>
</template>

