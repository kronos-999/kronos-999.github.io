<template>
  <div>
    <div v-for="n in store.notes" >
      <button type="button">
        {{ n.text }}
      </button>
    </div>
  </div>
</template>


<script setup>
import { useStore } from '@/store/index'
const store = useStore() // xx

const x = ref('')
</script>

<route lang="yaml">
meta:
  layout: admin
</route>
