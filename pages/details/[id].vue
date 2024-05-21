<script setup lang="ts">
import type {UserInterface} from "~/types/User.interface";
import Buttons from "~/components/User/Buttons.vue";
import {useStore} from "~/store/main.store";
const route = useRoute();
const router = useRouter();
const { data: user, pending } = await useFetch<UserInterface>('https://dummyjson.com/users/' + route.params.id);

const store = useStore()

if (!user.value) {
  throw createError({
    statusCode: 404,
    message: `User with ID of ${route.params.id} not found`
  });
}

const isAlreadySaved = computed(() => !!store.users[Number(route.params.id)])


function save() {
  if(user.value) {
    store.saveUser(user.value)
  }
}

const goBack = () => {
  router.go(-1)
};
</script>

<template>
  <div>
    <button @click="goBack"  class="absolute -left-24 top-5 bg-slate-500 text-white px-3 py-1 rounded">Back</button>

    <div v-if="pending">Loading...</div>
    <div v-if="user" class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="p-6">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <img :src="user.image" alt="User Avatar" class="w-24 h-24 rounded-full object-cover">
            <div>
              <h2 class="text-2xl font-bold">{{ user.firstName }} {{ user.lastName }}</h2>
              <p class="text-gray-600">@{{ user.username }}</p>
            </div>
          </div>

         <UserButtons :isAlreadySaved="isAlreadySaved" @save="save" />
        </div>

        <div class="mt-8">
          <h3 class="text-xl font-bold mb-4">Contact Information</h3>
          <div class="border border-gray-300 rounded-lg p-4 mb-4">
            <p class="text-gray-600"><span class="font-semibold">Email:</span> {{ user.email }}</p>
            <p class="text-gray-600"><span class="font-semibold">Phone:</span> {{ user.phone }}</p>
            <p class="text-gray-600"><span class="font-semibold">Address:</span> {{ user.address.address }}, {{ user.address.city }}, {{ user.address.state }}</p>
          </div>
          <h3 class="text-xl font-bold mb-4">Physical Information</h3>
          <div class="border border-gray-300 rounded-lg p-4">
            <p class="text-gray-600"><span class="font-semibold">Age:</span> {{ user.age }}</p>
            <p class="text-gray-600"><span class="font-semibold">Height:</span> {{ user.height }} cm</p>
            <p class="text-gray-600"><span class="font-semibold">Weight:</span> {{ user.weight }} kg</p>
            <p class="text-gray-600"><span class="font-semibold">Eye Color:</span> {{ user.eyeColor }}</p>
            <p class="text-gray-600"><span class="font-semibold">Hair Color:</span> {{ user.hair.color }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
