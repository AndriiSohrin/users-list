<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps<{
  isAlreadySaved: boolean;
}>();
const emits = defineEmits(['save'])



const text = computed(() => props.isAlreadySaved ? 'Delete' : 'Save')

function handleSave() {
  emits('save', true)
}

</script>


<template>
  <div class="mt-4">
    <button @click.prevent="handleSave"
            :class="isAlreadySaved ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'"
            class=" text-white font-bold py-2 px-4 rounded" v-if="true">{{text}}</button>
  </div>
</template>