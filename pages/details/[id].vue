<script setup lang="ts">
import type { UserInterface } from "~/types/User.interface";
import { useStore } from "~/store/main.store";
const route = useRoute();

const { data: user, pending } = await useFetch<UserInterface>('https://dummyjson.com/users/' + route.params.id);

const store = useStore();

if (!user.value) {
  throw createError({
    statusCode: 404,
    message: `User with ID of ${route.params.id} not found`,
  });
}

const isAlreadySaved = computed(() => !!store.users[Number(route.params.id)]);

function save(): void {
  if (user.value) {
    store.saveUser(user.value);
  }
}


</script>

<template>
  <div>
    <UiBackButton class="absolute -left-24 top-5 hidden" />

    <div v-if="pending">Loading...</div>
    <div v-if="user" class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="p-6">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div class="flex items-center space-x-4">
            <img :src="user.image" alt="User Avatar" class="w-24 h-24 rounded-full object-cover">
            <div>
              <h2 class="text-2xl font-bold">{{ user.firstName }} {{ user.lastName }}</h2>
              <p class="text-gray-600">@{{ user.username }}</p>
            </div>
          </div>

          <div class="mt-4 md:mt-0">
            <UserButtons :isAlreadySaved="isAlreadySaved" @save="save" />
          </div>
        </div>

        <div class="mt-8">
          <h3 class="text-xl font-bold mb-4">Contact Information</h3>
          <div class="border border-gray-300 rounded-lg p-4 mb-4 space-y-2">
            <p class="text-gray-600"><span class="font-semibold">Email:</span> {{ user.email }}</p>
            <p class="text-gray-600 border-t pt-2"><span class="font-semibold">Phone:</span> {{ user.phone }}</p>
            <p class="text-gray-600 border-t pt-2"><span class="font-semibold">Address:</span> {{ user.address.address }}, {{ user.address.city }}, {{ user.address.state }}</p>
          </div>

          <h3 class="text-xl font-bold mb-4">Physical Information</h3>
          <div class="border border-gray-300 rounded-lg p-4 space-y-2">
            <p class="text-gray-600"><span class="font-semibold">Age:</span> {{ user.age }}</p>
            <p class="text-gray-600 border-t pt-2"><span class="font-semibold">Height:</span> {{ user.height }} cm</p>
            <p class="text-gray-600 border-t pt-2"><span class="font-semibold">Weight:</span> {{ user.weight }} kg</p>
            <p class="text-gray-600 border-t pt-2"><span class="font-semibold">Eye Color:</span> {{ user.eyeColor }}</p>
            <p class="text-gray-600 border-t pt-2"><span class="font-semibold">Hair Color:</span> {{ user.hair.color }}</p>
          </div>

          <h3 class="text-xl font-bold mb-4">Company Information</h3>
          <div class="border border-gray-300 rounded-lg p-4 space-y-2">
            <p class="text-gray-600"><span class="font-semibold">Company:</span> {{ user.company.name }}</p>
            <p class="text-gray-600 border-t pt-2"><span class="font-semibold">Title:</span> {{ user.company.title }}</p>
            <p class="text-gray-600 border-t pt-2"><span class="font-semibold">Department:</span> {{ user.company.department }}</p>
            <p class="text-gray-600 border-t pt-2"><span class="font-semibold">Address:</span> {{ user.company.address.address }}, {{ user.company.address.city }}, {{ user.company.address.state }}</p>
          </div>

          <h3 class="text-xl font-bold mb-4">Bank Information</h3>
          <div class="border border-gray-300 rounded-lg p-4 space-y-2">
            <p class="text-gray-600"><span class="font-semibold">Card Type:</span> {{ user.bank.cardType }}</p>
            <p class="text-gray-600 border-t pt-2"><span class="font-semibold">Card Number:</span> {{ user.bank.cardNumber }}</p>
            <p class="text-gray-600 border-t pt-2"><span class="font-semibold">Card Expiry:</span> {{ user.bank.cardExpire }}</p>
            <p class="text-gray-600 border-t pt-2"><span class="font-semibold">Currency:</span> {{ user.bank.currency }}</p>
            <p class="text-gray-600 border-t pt-2"><span class="font-semibold">IBAN:</span> {{ user.bank.iban }}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
