<script setup lang="ts">
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
    <button  @click.prevent="handleSave" class="text-white font-bold py-2 px-4 rounded bg-slate-500">{{text}}</button>
  </div>
</template>