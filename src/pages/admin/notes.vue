<template>
  <div>
    <div v-for="n in state.notes" >
      <button type="button">
        {{ n.text }}
      </button>
    </div>
  </div>
</template>


<script setup>
import { t } from '~/i18n'

import { state } from '@/store/index';
 // xx

const x = ref('')
</script>

<route lang="yaml">
meta:
  layout: admin
</route>
