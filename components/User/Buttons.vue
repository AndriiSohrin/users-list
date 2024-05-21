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
    <button  @click.prevent="handleSave" class="text-white font-bold py-2 px-4 rounded">{{text}}</button>
  </div>
</template>